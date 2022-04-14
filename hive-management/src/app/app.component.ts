import { Component, OnInit } from '@angular/core';
import { Hive } from 'src/models/hive.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hive-management';
  showFiller = false;

  hive!: Hive;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // this.hive = new Hive;
    // console.log('new hive is ', this.hive);
    // console.log('toJSON is ', this.hive.toJSON());

    // this.firestore
    //   .collection('hives')
    //   .valueChanges()
    //   .subscribe((hives: any)=>{console.log('hives ', hives)})
      // .add(this.hive.toJSON())
      // .then((result: any) => {
      //   console.log('adding hive finished', result);
      // })

      this.addHive();
  }

  addHive(){

    let hive = new Hive;
    console.log('type is', typeof(hive.toJSON()));
    console.log(hive.toJSON())

    this.firestore
    .collection('hives')
    .add(hive.toJSON())
  }

}
