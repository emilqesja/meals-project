import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>()

  recipes:Recipe[] = [
    new Recipe('A test Recipe',
      'This is simply a test.',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe('Another test Recipe',
      'This is simply a test.',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe:Recipe){
   this.recipeWasSelected.emit(recipe)
  }

}
