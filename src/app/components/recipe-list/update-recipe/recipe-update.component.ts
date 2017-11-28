import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RecipeService} from '../../../services/recipe.service';
import {Recipe} from '../../../models/recipe.model';

@Component({
  selector: 'update-recipe',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['../../../app.component.css']
})

export class RecipeUpdateComponent implements OnInit {
  recipeUpdateForm: FormGroup;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(params['id']))
      .subscribe(recipe => {
        this.recipe = recipe;
        this.buildForm();
      });
  }

  buildForm(): void {
    this.recipeUpdateForm = this.formBuilder.group({
      name: [this.recipe.name, Validators.required],
      _id: [this.recipe._id, Validators.required],
      description: [this.recipe.description, Validators.required],
      imagePath: [this.recipe.imagePath, Validators.required],
      ingredients: [this.recipe.ingredients, Validators.required]
    });
  }

  update(): void {
    const recipe = this.recipeUpdateForm.value as Recipe;
    this.recipeService.update(recipe)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/recipes']);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
