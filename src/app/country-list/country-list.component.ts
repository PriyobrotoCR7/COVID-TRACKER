import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../service/global-data.service';
import { GlobalData ,  CountryData, CovidData } from '../models/globaldata'

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  
  allCountryList: any
  p: any;
  allCountry: [];
  Country: any;
  nameSearch : string = '';
  date : any;

  constructor(private globalDataService: GlobalDataService) {
    // this.countryList = [];
   }

  ngOnInit(): void {
    this.globalDataService.getGlobalData().subscribe(data=>{
      this.allCountryList = data;
      this.allCountry = this.allCountryList["Countries"];
      this.date = this.allCountryList.Date;
      
    },(err)=>{
      console.log('Not Able to fetch Data'+ err)
    })
  }


}
