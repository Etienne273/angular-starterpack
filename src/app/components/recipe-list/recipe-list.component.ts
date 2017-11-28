import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private router: Router,
              private recipeService: RecipeService) {
  }

  /**
   * Gets the existing users
   */
  getRecipes(): void {
    this.recipeService.getRecipes()
      .then(recipes => {
        this.recipes = recipes;
      });
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  update(id: string): void {
    this.router.navigate(['/update/recipe', id]);
  }

  remove(id: string): void {
    this.recipeService.remove(id)
      .then(() => {
        this.getRecipes();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail/recipe', id]);
  }
}
