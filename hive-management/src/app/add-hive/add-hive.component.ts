import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hive } from 'src/models/hive.class';
import { HivesComponent } from '../hives/hives.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-hive',
  templateUrl: './add-hive.component.html',
  styleUrls: ['./add-hive.component.scss']
})
export class AddHiveComponent implements OnInit {
  hive: Hive = new Hive();
  hiveId: any;

  constructor(
    public dialogRef: MatDialogRef<HivesComponent>,
    private firestore: AngularFirestore
  ) { }



  ngOnInit(): void {
  }

  save() {

    /**
     * adding a new hive to the firestore collection
     */
    this.firestore
      .collection('hives')
      .add(this.hive.toJSON())
      .then((hiveInfo: any) => {
        this.hiveId = hiveInfo.id;
        console.log('hiveId is: ', this.hiveId);
        this.hive.hiveId = this.hiveId;
        this.saveId();
        this.dialogRef.close();
      })
  }

  /**
 * save the id of the hive in the doc
 */
  saveId() {
    this.firestore
      .collection('hives')
      .doc(this.hiveId)
      .update(this.hive.toJSON())
    console.log('hiveId has been updated ', this.hive)
  }

}
