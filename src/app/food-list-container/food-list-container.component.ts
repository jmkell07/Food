import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-food-list-container',
  templateUrl: './food-list-container.component.html',
  styleUrls: ['./food-list-container.component.css']
})
export class FoodListContainerComponent implements OnInit {
  sortBy: string = "name";
  filterBy: string = "";
  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown({placeholder:'Your placeholder'});
 
  }

}
