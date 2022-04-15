import { Component, OnInit } from '@angular/core';
import { AddHiveComponent } from '../add-hive/add-hive.component';
import { MatDialog } from '@angular/material/dialog';
import { Hive } from 'src/models/hive.class';


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

  constructor(public dialog: MatDialog) { }


  hive: Hive = new Hive();

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddHiveComponent)
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
