//
// Domain class
//

export class User {

  private _name: string;
  private _title: string;
  private _recipes: [{}];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get title(): string {
    return this._title;
  }

  public set title(t: string) {
    this._title = t;
  }
  public get recipes(): [{}] {
    return this._recipes;
  }

  public set recipes(r: [{}]) {
    this._recipes = r;
  }
}
