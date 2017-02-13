import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
declare var $;

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
@Input() food: Food;
rating: number[] = [];
public fs: FoodService;

  constructor(foodService: FoodService) { 
      this.fs = foodService;
   }

  ngOnInit() {
    for(var i = 0; i < this.food.rating; i++) {
      this.rating.push(1);
    }
    $('.special.cards .image').dimmer({on: 'hover'});
    
  }
}
