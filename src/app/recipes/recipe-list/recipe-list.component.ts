import { Component, OnInit } from '@angular/core';

//import the model (java class we created)
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Meat & Broccoli","Meaty","test description","https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Beef-and-broccoli-tall-FS.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
