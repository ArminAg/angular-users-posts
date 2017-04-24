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

    deleteUser(user) {
        if (confirm("Are you sure you want to delete this User?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(
                    null,
                    error => {
                        alert("Could not delete user.");
                        this.users.splice(index, 0, user);
                    }
                );
        }
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