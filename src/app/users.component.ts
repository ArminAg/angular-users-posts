import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit, OnDestroy {
    users = [];
    subscription;
    isLoading = true;

    constructor(
        private _userService: UserService,
        private _router: Router
    ) { }

    newUser() {
        this._router.navigate(['users/new']);
    }

    ngOnInit() {
        this.subscription = this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
            },
            null,
            () => { this.isLoading = false; });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}