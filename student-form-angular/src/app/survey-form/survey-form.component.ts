import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  onClickSubmit(result: any) {

    
    // console.log("First name is  : " + result.firstName);
    // console.log("last name is  : " + result.lastName);
    // console.log("Street is  : " + result.streetAddress);
    // console.log("City is  : " + result.city);
    // console.log("State is  : " + result.state);
    // console.log("zip is  : " + result.zip);  
    // console.log("Mobile is  : " + result.mobile);
    // console.log("Date is  : " + result.date);

    let likeMost: string[] = [];
    if(result.students) {
      likeMost.push("Students");
    }
    if(result.location) {
      likeMost.push("Location");
    }
    if(result.campus) {
      likeMost.push("Campus");
    }
    if(result.atmosphere) {
      likeMost.push("Atmosphere");
    }
    if(result.dormRooms) {
      likeMost.push("Dorm Rooms");
    }
    if(result.sports) {
      likeMost.push("Sports");
    }
    console.log("Like most is ",likeMost);
    // console.log("Interest is ",result.interest);
    // console.log("Recommendation is ",result.recommendation);

    // console.log("Raffle is ",result.raffle);
    // console.log("comments is ",result.comments);

    result.mostLiked=likeMost;
    console.log(result)

    // alert('Successfully inserted...')
    // this.router.navigateByUrl('/survey-details');

    this.http.post('http://localhost:8082/api/studentSurvey',result).subscribe({
      next: (response) => {
        console.log(response);
        alert('Your response for survey is added...')
        this.router.navigateByUrl('/schema-details');
      },
      error: (error) => console.log(error),
    });;
 }

}
