import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../service/global-data.service';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.scss']
})
export class RecoveredComponent implements OnInit {
 
  recovered: any;
  newRecovered:number;
  totalRecovered: number;

  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDataService.getGlobalData().subscribe(data=>{
      this.recovered = data;
      this.newRecovered = this.recovered.Global.NewRecovered;
      this.totalRecovered = this.recovered.Global.NewRecovered;

    },(err)=>{
      console.log('Not Able to fetch Data'+ err)
    })
  }

}
