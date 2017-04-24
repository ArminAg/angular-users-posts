import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        PostsComponent
    ],
    providers: [
        PostService,
        UserService
    ]
})
export class PostsModule { }