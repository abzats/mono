import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews:object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get().subscribe((reviews) => this.reviews = reviews);
  }

}
