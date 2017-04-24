import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserFormComponent } from './users/user-form.component';

import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    {
        path: 'users/new',
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: NotFoundComponent }
]);