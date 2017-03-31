import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts.component';
import { UserFormComponent } from './user-form.component';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { 
        path: 'users/new', 
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
     },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: NotFoundComponent }
]);