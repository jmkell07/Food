import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';
declare var $;
declare var toastr;

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  food: Food;
  name: string;
  editFood: Food;
  error: string = "";
  allFood: Food[];
  url: string;

  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router, private forms: FormsModule) {
    this.name = route.snapshot.params['name'];
    this.food = foodService.getFoodByName(this.name);
    this.url = this.food.url;
    this.allFood = this.foodService.getFood();
  }

  ngOnInit() {
     this.editFood = new Food({name: this.food.name, calories: this.food.calories, price: this.food.price, rating: this.food.rating});
    // var i = this.allFood.map(item => item.url).filter((value, index, self) => self.indexOf(value) === index);
     //console.log(i);
      $('.dropdown').dropdown();
;
  }
  
  cancel(){
    this.router.navigate(['list']);
  }

  toggleModel(){
     $('.ui.modal').modal('toggle');
  }

  delete(){
  $('.ui.modal').modal('hide');
   this.foodService.deleteFood(this.food);
   this.router.navigate(['list']);
  }

  edit(food){
    var nameExists = this.foodService.getFoodByName(food.name);
     if(!nameExists || this.name.toLocaleLowerCase() == food.name.toLocaleLowerCase()){
       var newFood: Food = new Food(food);
       this.foodService.editFood(this.name, newFood);
       this.router.navigate(['/list']);
       toastr.success(newFood.name + " has been successfully updated!");
     }
     else {this.error = "That name is already in use";}
  }
}
