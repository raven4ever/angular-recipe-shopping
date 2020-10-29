import {Component} from '@angular/core';
import {Ingredient} from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('milk', 3),
    new Ingredient('apple', 5),
    new Ingredient('water', 13)
  ];

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}
