import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'update-user',
  templateUrl: './user-update.component.html',
  styleUrls: ['../../../app.component.css']
})

export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(params['id']))
      .subscribe(user => {
        this.user = user;
        this.buildForm();
      });
  }

  buildForm(): void {
    this.userUpdateForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      _id: [this.user._id, Validators.required],
      imagePath: [this.user.imagePath, Validators.required]
    });
  }

  update(): void {
    const user = this.userUpdateForm.value as User;
    this.userService.update(user)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/users']);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
