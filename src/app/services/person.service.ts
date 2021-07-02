import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  
  alldata(){
    return this.http.get("http://localhost:7000/persons/getdata")
  }
  senddata(personform: any):Observable<any>{
    return this.http.post("http://localhost:7000/persons/insert",personform)
  }
}
