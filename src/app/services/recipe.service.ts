import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {Recipe} from '../models/recipe.model';

@Injectable()
export class RecipeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private recipesUrl = environment.serverUrl + '/recipes'; // URL to web api
  private recipes: Recipe[] = [];

  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getRecipes(): Promise<Recipe[]> {
    console.log('recipes ophalen van server');
    return this.http.get(this.recipesUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Recipe[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getRecipe(_id: string): Promise<Recipe> {
    const url = `${this.recipesUrl}/${_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Recipe)
      .catch(this.handleError);
  }

  /**
   * Adds new recipe
   * @param recipe:Recipe
   * @returns {Promise<Recipe>}
   */
  add(recipe: Recipe): Promise<Recipe>{
    return this.http.post(this.recipesUrl, JSON.stringify(recipe), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Recipe)
      .catch(this.handleError)
  }

  update(recipe: Recipe): Promise<Recipe> {
    console.log(recipe);
    return this.http.put(this.recipesUrl + '/' + recipe._id, JSON.stringify(recipe), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Recipe)
      .catch(this.handleError);
  }

  remove(id: string): Promise<any> {
    return this.http.delete(`${this.recipesUrl}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError);
  }



  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
