import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
 
// interface Global{
//   NewConfirmed : number;
//   TotalConfirmed : number
// }

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  

  // globalData!: new () => Subject();

  constructor(private http: HttpClient) { }

  getGlobalData(){
    return this.http.get('https://api.covid19api.com/summary')
  }
}
