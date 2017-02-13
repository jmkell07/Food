import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
declare var toastr;

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnChanges  {

  @Input() sortBy: string;
  @Input() filterBy: string;  
  food: Food[];
  sortFood: Food[];

  constructor(foodService: FoodService) {
    this.food = foodService.getFood();
  
  }

  ngOnInit() {
    // console.log(this.food);
  }
  
  ngOnChanges(changes) {
     if(this.sortBy.length > 0){
      if(this.sortBy === "name"){
        this.sortFood = this.food.sort((a: Food, b: Food) => { 
          if (a.name > b.name){ return 1;}
          else if  (a.name === b.name){ return 0;}
          else {return -1;}
        });
      } else if(this.sortBy === "price"){
        this.sortFood = this.food.sort((a: Food, b: Food) => a.price - b.price);        
      } else if(this.sortBy === "rating"){
        this.sortFood = this.food.sort((a: Food, b: Food) => b.rating - a.rating);        
      } else if(this.sortBy === "calories"){
        this.sortFood = this.food.sort((a: Food, b: Food) => a.calories - b.calories);        
      }

      if(changes.sortBy && changes.sortBy.previousValue.length > 0){ 
        toastr.info("Sorted by <b>" + this.sortBy + "</b>");
      }
     }
      this.sortFood = this.food.filter((a: Food) => a.name.toLocaleLowerCase().includes(this.filterBy));
      
  }

}
