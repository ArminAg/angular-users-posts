import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { routing } from './app.routing';
import { postsRouting } from './posts/posts.routing';
import { usersRouting } from './users/users.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PostsModule,
    UsersModule,
    postsRouting,
    usersRouting,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
