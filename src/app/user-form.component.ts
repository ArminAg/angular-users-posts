import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from './email-validators';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent implements OnInit {
    form: FormGroup;

    constructor(fb: FormBuilder) { 
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

    ngOnInit() { }
}