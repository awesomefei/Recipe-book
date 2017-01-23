import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Summer Salad', 'Description: OK', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-01_mini.jpg',[]),
        new Recipe('Summer Salad', 'Description: OK', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-01_mini.jpg',[])
    ]
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

}
