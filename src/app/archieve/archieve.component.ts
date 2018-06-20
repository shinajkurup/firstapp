import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {

  month;
  date;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onClick(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let month = +params.get('month');
        let date = +params.get('date');
        this.month = month;
        this.date = date;
      })
  }

}
