import { Component, OnInit } from '@angular/core';
import { Hive } from 'src/models/hive.class';

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {

  constructor() { }

  hive!: Hive;

  ngOnInit(): void {
    this.hive = new Hive;
    console.log('new hive is ', this.hive);
    console.log('toJSON is ', this.hive.toJSON())
  }

}
