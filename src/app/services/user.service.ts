import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {User} from '../models/user.model';
import {Headers, Http} from '@angular/http';
import {environment} from 'environments/environment';

@Injectable()
export class UserService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersURL = environment.serverUrl + '/users';

  constructor(private http: Http) {
  };

  /**
   * Return all users
   * @returns {Promise<User[]>}
   */
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersURL)
      .toPromise()
      .then(response => {
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns user based on id
   * @param id:string
   * @returns {Promise<User>}
   */
  getUser(_id: string): Promise<User> {
    const url = `${this.usersURL}/${_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  /**
   * Adds new user
   * @param user:User
   * @returns {Promise<User>}
   */
  add(user: User): Promise<User> {
    return this.http.post(this.usersURL, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  /**
   * Updates user that matches to id
   * @param user:User
   * @returns {Promise<User>}
   */
  update(user: User): Promise<User> {
    console.log(user);
    return this.http.put(this.usersURL + '/' + user._id, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  /**
   * Removes user
   * @param id:string
   * @returns {Promise<User>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.usersURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError);
  }

  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
