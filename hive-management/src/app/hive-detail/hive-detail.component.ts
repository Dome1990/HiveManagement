import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hive } from 'src/models/hive.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router,NavigationStart} from '@angular/router';

@Component({
  selector: 'app-hive-detail',
  templateUrl: './hive-detail.component.html',
  styleUrls: ['./hive-detail.component.scss']
})
export class HiveDetailComponent implements OnInit {

  hive: Hive = new Hive();
  hiveId: string = '';

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  /**
   * get the route params id to load the right hive
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hiveId = params['id'];
      this.getHive();
    })
  }


  /**
 * loading a specific hive
 */
  getHive() {
    this
      .firestore
      .collection('hives')
      .doc(this.hiveId)
      .valueChanges()
      .subscribe((hive: any) => {
        this.hive = hive;
      });
  }

  /**
   * delete the hive
   * @param specHiveId string of the hive ID
   */
  delete(specHiveId: any) {
    let hiveId = specHiveId;
    this.firestore
      .collection('hives')
      .doc(hiveId)
      .delete()
      .catch((error) => {
        console.log(error);
      })
      .then(()=>{this.backToHives()})
  }

  /**
   * navigate to /hives
   */
  backToHives(){
    this.router.navigate(['/', 'hives'])
  }

  editHive(){
    console.log('edit Hive')
  }
}
