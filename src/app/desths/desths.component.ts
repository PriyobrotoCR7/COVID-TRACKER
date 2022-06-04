import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../service/global-data.service';

@Component({
  selector: 'app-desths',
  templateUrl: './desths.component.html',
  styleUrls: ['./desths.component.scss']
})
export class DesthsComponent implements OnInit {

  deaths: any;
  newDeaths : number;
  totalDeaths : number;

  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDataService.getGlobalData().subscribe(data=>{
      this.deaths = data;
      this.newDeaths = this.deaths.Global.NewDeaths;
      this.totalDeaths =this.deaths.Global.TotalDeaths;
    },(err)=>{
      console.log('Not Able to fetch Data'+ err)
    })
  }

}
