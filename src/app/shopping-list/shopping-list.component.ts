import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]= [new Ingredient("Batata", 10),new Ingredient("Meat", 10), new Ingredient("Water", 10) ];
  constructor() { }

  ngOnInit(): void {
  }

}
