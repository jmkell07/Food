import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListContainerComponent } from './food-list-container/food-list-container.component';
import { FoodService } from './food.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodListComponent,
    FoodListContainerComponent,
    AddFoodComponent,
    EditFoodComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
