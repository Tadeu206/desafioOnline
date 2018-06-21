import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private baseUrl = "https://www.googleapis.com/customsearch/v1?q=";
  private apiKey = "key=AIzaSyDndFyiWA_E4xcPatLAn4UNcc8vW1Dv0Gg"
  private cxKey = "cx=016531454908138522902%3Aq8ej-vaxd7c&"
  private endUrl = "searchType=image&fields=items%2Flink&" 
  

  constructor(private http: HttpClient) { }

  addAllPictures(name){
    return this.http.get<any>(this.baseUrl+name+"&"+this.cxKey+this.endUrl+this.apiKey);
  }
}
