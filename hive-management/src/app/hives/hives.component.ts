import { Component, OnInit } from '@angular/core';
import { AddHiveComponent } from '../add-hive/add-hive.component';
import { MatDialog } from '@angular/material/dialog';
import { Hive } from 'src/models/hive.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


export interface DialogData {
  name: string;
  type: string;
}

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    ) { }
  hive: Hive = new Hive();
  allHives: any;

  ngOnInit(): void {
    this.loadAllHives();
  }

  loadAllHives(){
    this.firestore
      .collection('hives')
      .valueChanges()
      .subscribe((hives: any) => { 
        this.allHives = hives;
        console.log('hives ', this.allHives); 
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddHiveComponent);
  }

}
