import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hive } from 'src/models/hive.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, NavigationStart } from '@angular/router';
import { Check } from 'src/models/check.class';
import { MatDialog } from '@angular/material/dialog';
import { CheckCardComponent } from '../check-card/check-card.component';
import { TreatmentCardComponent } from '../treatment-card/treatment-card.component';

export interface DialogData {
  check: Check;
}

@Component({
  selector: 'app-hive-detail',
  templateUrl: './hive-detail.component.html',
  styleUrls: ['./hive-detail.component.scss']
})
export class HiveDetailComponent implements OnInit {

  hive: Hive = new Hive();
  hiveId: string = '';
  dateStamp: Date = new Date();
  check: Check = new Check();
  checkups: any = [];

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  /**
   * get the route params id to load the right hive
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hiveId = params['id'];
      this.getHive();
      this.getChecks();
    })
    this.firestore
      .collection('hives')
      .doc(this.hiveId)
      .valueChanges()
      .subscribe((hive: any) => {
        this.hive = hive;
        console.log('this hive is: ', this.hive)
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
        console.log('hive response from firebase', hive);
      });
  }

  /**
   * load the checkups
   */
  getChecks() {
    this
      .firestore
      .collection('hives')
      .doc(this.hiveId)
      .collection('checks')
      .valueChanges()
      .subscribe((check: any) => {
        setTimeout(() => {
          this.checkups = [];
          for (let i = 0; i < check.length; i++) {
            this.check = check[i];
            this.checkups.push(this.check);
          }
          console.log('this.checkups are ', this.checkups);
        }, 3000);

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
      .then(() => { this.backToHives() })
  }

  /**
   * navigate to /hives
   */
  backToHives() {
    this.router.navigate(['/', 'hives']);
  }

  openDialog(destiny: string): void {
    let type: string = destiny;
    if (type == 'check') {
      const dialogRef = this.dialog.open(CheckCardComponent, {
        data: {
          check: Check,
        }
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        this.resultToCheck(result);
        this.saveCheck();
      });
    }
    else if (type == 'treatment') {
      const dialogRef = this.dialog.open(TreatmentCardComponent, {});
    }
  }

  /**
   * put the data of the check-card into check class and change the date into a timestamp
   * @param result answer of check-card
   */
  resultToCheck(result: any) {

    //clear this.check
    this.check = new Check();
    console.log('empty check ', this.check)




    this.dateStamp = result.check.datestamp ? result.check.dateStamp.getTime() : undefined;
    this.check.dateStamp = this.dateStamp ? this.dateStamp : '';
    this.check.queenright = result.check.queenright ? result.check.queenright : '';
    this.check.varroa = result.check.varroa ? result.check.varroa : '';
    this.check.brood = result.check.brood ? result.check.brood : '';
    this.check.toDo = result.check.toDo ? result.check.toDo : '';
    this.check.comment = result.check.comment ? result.check.comment : '';
    //console.log('result is: ', result);
    // console.log('date is: ', result.check.dateStamp);
    // console.log('check datestamp is: ', this.check.dateStamp);
    // console.log('check is: ', this.check);
  }

  /**
   * save the new check and store the given id in check.checkId
   */
  saveCheck() {
    this.firestore
      .collection('hives')
      .doc(this.hiveId)
      .collection('checks')
      .add(this.check.checkToJSON())
      .then((checkInfo: any) => {
        console.log('snapshop is: ', checkInfo.id);
        this.check.checkId = checkInfo.id;
        this.saveCheckId();
      })
  }

  /**
   * save the updated check
   */
  saveCheckId() {
    this.firestore
      .collection('hives')
      .doc(this.hiveId)
      .collection('checks')
      .doc(this.check.checkId)
      .update(this.check.checkToJSON())
  }

  editHive() {
    console.log('edit Hive');
  }
  newTreatment() {
    console.log('new treatment');
  }

  newCheck() {
    console.log('new check');
  }
}
