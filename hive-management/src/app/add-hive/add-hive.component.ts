import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Hive } from 'src/models/hive.class';
import { HivesComponent } from '../hives/hives.component';

@Component({
  selector: 'app-add-hive',
  templateUrl: './add-hive.component.html',
  styleUrls: ['./add-hive.component.scss']
})
export class AddHiveComponent implements OnInit {
    hive: Hive = new Hive();
  constructor(
    public dialogRef: MatDialogRef<HivesComponent>,
  ) { }



  ngOnInit(): void {
  }

  save(){
    console.log(this.hive);
    this.dialogRef.close();
  }

}
