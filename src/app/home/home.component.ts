import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  followers:any[];
  archieveTime = [
    {month: 2017, date: 1},
    {month: 2017, date: 2},
    {month: 2017, date: 3},
  ]

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/mosh-hamedani/followers')
      .subscribe(response =>{
       this.followers= response.json();
      } );
  }

}
