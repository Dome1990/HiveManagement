import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DialogData } from '../hive-detail/hive-detail.component';


@Component({
  selector: 'app-check-card',
  templateUrl: './check-card.component.html',
  styleUrls: ['./check-card.component.scss']
})
export class CheckCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CheckCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
