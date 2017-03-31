import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from './email-validators';
import { IFormsComponent } from './prevent-unsaved-changes-guard.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent implements OnInit, IFormsComponent {
    form: FormGroup;

    constructor(
        fb: FormBuilder,
        private _userService: UserService,
        private _router: Router
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

    ngOnInit() { }
}