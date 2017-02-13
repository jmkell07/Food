import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable()
export class FoodService {
food: Food[] = [ 
      new Food({name: "Fries", calories: 450, price: 3.5, rating: 5, url: "fries.jpg"}),
      new Food({name: "Salad", calories: 50, price: 2.5, rating: 1, url: "salad.jpg"}),
      new Food({name: "Coffee", calories: 30, price: 4.5, rating: 10, url: "coffee.jpg"}),
      new Food({name: "Rice", calories: 250, price: 1.5, rating: 4, url: "rice.jpg"}),
      new Food({name: "Donut", calories: 675, price: 1.25, rating: 7, url: "donut.jpg"}),
      new Food({name: "sandwich", calories: 500, price: 5.25, rating: 8, url: "sandwich.jpg"}),
      new Food({name: "Pizza", calories: 700, price: 2.25, rating: 7, url: "pizza.jpg"}),
      new Food({name: "Chicken", calories: 600, price: 3.25, rating: 6, url: "chicken.jpg"}),
      new Food({name: "Watermelon", calories: 100, price: 0.75, rating: 4, url: "watermelon.jpg"}),
      new Food({name: "Icecream", calories: 1500, price: 6.25, rating: 10, url: "icecream.jpg"}),
      new Food({name: "Hamburger", calories: 1000, price: 5.25, rating: 8, url: "hamburger.jpg"}),
      new Food({name: "Hotdog", calories: 450, price: 2.25, rating: 4, url: "hotdog.jpg"})
    ];

  constructor() { }

  public getFood(): Food[]{
    return this.food;
  }

  public getFoodByName(str: string): Food{
    return this.food.filter((a: Food) => a.name.toLocaleLowerCase() === str.toLocaleLowerCase())[0];
  }

  public editFood(str: string, f: Food){
    var old = this.food.filter((a: Food) => a.name.toLocaleLowerCase() === str.toLocaleLowerCase())[0];
    old.name = f.name;
    old.price = f.price;
    old.calories = f.calories;
    old.rating = f.rating;
    old.url = f.url;
  }

  public addFood(f: Food){
    this.food.push(f);
  }

  public deleteFood(f: Food){
     this.food.splice(this.food.indexOf(f), 1);
  }
}
