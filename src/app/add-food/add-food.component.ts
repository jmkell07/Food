import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
declare var $;
declare var toastr;

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  price: number = 5.25;
  calories: number = 350;
  rating: number = 5;
  error: string = "";
  food: Food[];
  constructor(private foodService: FoodService, private router: Router, private forms: FormsModule) {}

  ngOnInit() {
    this.food = this.foodService.getFood();
    $('.dropdown').dropdown();
   
  }

  addFood(food){
     var nameExists = this.foodService.getFoodByName(food.name);
     if(!nameExists){
       console.log(food);
       var newFood: Food = new Food(food);
       this.foodService.addFood(food);
       this.router.navigate(['/list']);
       toastr.success(newFood.name + " has been successfully added!");
     }
     else {this.error = "That name is already in use";}

  }

  // setUrl(){
  //   console.log(url);
  // }
  cancel(){
    this.router.navigate(['/list']);
  }
}
