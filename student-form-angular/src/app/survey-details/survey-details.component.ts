import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Survey {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  telephone: string;
  email: string;
  dateOfSurvey: string;
  mostLiked: string[];
  zip: string;
  intrestInUni: string;
  recommendUni: string;
} 

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})

export class SurveyDetailsComponent implements OnInit {

  firstName= 'Sachin';
  lastName='Tendulkar';

  
  //  surveys: Survey[] = [
  // {

  //     "firstName":"Rushikesh chu",
      
  //     "lastName":"Borse",
      
  //     "address":"New York",
      
  //     "city":"New York",
      
  //     "state":"Maharashtra",
      
  //     "zip":"22034",
      
  //     "telephone":"9011544020",
      
  //     "email":"rborse60@gmail.com",
      
  //     "dateOfSurvey":"2022-01-01",
      
  //     "mostLiked":["students","location"],
      
  //     "intrestInUni":"friends",
      
  //     "recommendUni":"Very Likely"
  //   }]
  public surveys : Survey[]=[];

  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.http.get<Survey[]>("http://localhost:8082/api/studentSurvey").
      subscribe((data) => this.surveys=data)
  }
}
