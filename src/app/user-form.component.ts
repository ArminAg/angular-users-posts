import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent implements OnInit {
    form: FormGroup;

    constructor(fb: FormBuilder) { 
        this.form = fb.group({
            name: [],
            email: [],
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