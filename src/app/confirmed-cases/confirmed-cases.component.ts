import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../service/global-data.service';

@Component({
  selector: 'app-confirmed-cases',
  templateUrl: './confirmed-cases.component.html',
  styleUrls: ['./confirmed-cases.component.scss']
})
export class ConfirmedCasesComponent implements OnInit {
 
  confirmed: any;
  newConfirmed: number
  totalConfirmed: number;
  date: Date = new Date()
  
  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDataService.getGlobalData().subscribe(data=>{
      this.confirmed = data;
      this.newConfirmed = this.confirmed.Global.NewConfirmed;
      this.totalConfirmed = this.confirmed.Global.TotalConfirmed
      // console.log(data);
    },(err)=>{
      console.log('Not Able to fetch Data'+ err)
    })
      
    }
     
  }


