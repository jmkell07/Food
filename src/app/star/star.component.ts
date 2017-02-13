import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
@Input() rating: number;
ratingArray: number[] = [];

  constructor() { }
  ngOnInit() { }

  ngOnChanges(changes){
    this.ratingArray = [];
    for(var i = 0; i < changes.rating.currentValue; i++) {
      this.ratingArray.push(1);
    }
  }
}
