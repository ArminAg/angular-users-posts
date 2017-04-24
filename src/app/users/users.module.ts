import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { UserService } from './user.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule { }