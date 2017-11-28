import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from "../../models/user.model";

@Pipe({
  name: 'fullTextSearch'
})
@Injectable()

export class FullTextSearch implements PipeTransform {
  transform(customers: User[], args: any[]): any {
    return customers.filter(user => user.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}
