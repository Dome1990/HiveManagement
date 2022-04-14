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
  hives: any;
  hiveId!: string;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.loadHives();
    this.addHive();
  }

  loadHives() {
    this.firestore
      .collection('hives')
      .valueChanges()
      .subscribe((hives: any) => { console.log('hives ', hives) })


    this
      .firestore
      .collection('hives')
      .doc('QhdFQq8k7BPY3hTPXXFd')
      .valueChanges()
      .subscribe((hive: any) => {

        console.log('specific hive is: ', hive);
      });
  }

  addHive() {

    let hive = new Hive;
    // console.log(hive.toJSON())

    // add a new hive
    this.firestore
      .collection('hives')
      .add(hive.toJSON())
      .then((hiveInfo: any) => {
        this.hiveId = hiveInfo.id;
        console.log('hiveId is: ', this.hiveId);
        this.hive = hive;
        this.hive.hiveId = this.hiveId;
        this.saveId();
      })




  }

  saveId() {
    this.firestore
      .collection('hives')
      .doc(this.hiveId)
      .update(this.hive.toJSON())
    console.log('hiveId has been updated ', this.hive)
  }

}
