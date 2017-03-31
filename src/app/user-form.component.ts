import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from './email-validators';
import { IFormsComponent } from './prevent-unsaved-changes-guard.service';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent implements OnInit, IFormsComponent {
    title;
    form: FormGroup;
    user = new User();
    subscription;

    constructor(
        fb: FormBuilder,
        private _userService: UserService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', EmailValidators.isValidEmail],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipCode: []
            })
        });
    }

    save() {
        this._userService.addUser(this.form.value)
            .subscribe(x => {
                this.form.markAsPristine();
                this._router.navigate(['users']);
            });
    }

    hasUnsavedChanges() {
        return this.form.dirty;
    }

    ngOnInit() {
        this.subscription = this._activatedRoute.params.subscribe(params => {
            var id = params["id"];
            this.title = id ? "Edit User" : "Add User";

            if (!id)
                return;

            this._userService.getUser(id)
                .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404)
                        this._router.navigate(['not-found']);
                });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}