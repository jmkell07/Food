import { OnInit } from '@angular/core';
import { FoodService } from './food.service';

export class Food {
    name: string;
    calories: number;
    price: number;
    rating: number;
    url: string = "question.jpg";
    id: number;

    constructor(arg){
       this.name = arg.name.toLocaleLowerCase();
       this.calories = arg.calories;
       this.price = arg.price;
       this.rating = arg.rating;
       if (arg.url){this.url = arg.url;}
    }
}
