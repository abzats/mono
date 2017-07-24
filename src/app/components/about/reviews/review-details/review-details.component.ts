import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  @Input() details: object = null;
  @Output() hideReviewDetails = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {

  }

}
