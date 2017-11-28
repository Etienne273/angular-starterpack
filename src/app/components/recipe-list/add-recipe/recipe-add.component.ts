import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../../../services/recipe.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Recipe} from '../../../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['../../../app.component.css']
})

export class RecipeAddComponent {
  recipeAddForm: FormGroup;
  recipe = new Recipe();

  constructor(private recipeService: RecipeService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.recipeAddForm = this.formBuilder.group({
      name: [this.recipe.name, Validators.required],
      description: [this.recipe.description, Validators.required],
      imagePath: [this.recipe.imagePath, Validators.required],
      ingredients: [this.recipe.ingredients, Validators.required]
    });
  }

  add(): void {
    const recipe = this.recipeAddForm.value as Recipe;
    this.recipeService.add(recipe)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/recipes']);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
