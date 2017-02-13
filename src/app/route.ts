import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListContainerComponent } from './food-list-container/food-list-container.component';

export const appRoutes: Routes = [
  { path: 'list', component: FoodListContainerComponent},
  { path: 'add', component: AddFoodComponent},
  { path: 'edit/:name', component: EditFoodComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
]