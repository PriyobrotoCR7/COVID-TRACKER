import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.scss']
})
export class GlobalDataComponent implements OnInit {

  date: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
