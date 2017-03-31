import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts.component';
import { UserFormComponent } from './user-form.component';

import { UserService } from './user.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent,
    UserFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
