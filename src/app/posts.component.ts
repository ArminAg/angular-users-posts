import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from './user.service';
import * as _ from 'underscore';

@Component({
    selector: 'posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit, OnDestroy {
    posts = [];
    pagedPosts = [];
    pageSize = 10;
    users = [];
    subscription;
    postsLoading;
    commentsLoading;
    currentPost;

    constructor(
        private _postService: PostService,
        private _userService: UserService
    ) { }

    select(post) {
        this.currentPost = post;
        this.commentsLoading = true;
        this._postService.getPostComments(post.id)
            .subscribe(
            comments => this.currentPost.comments = comments,
            null,
            () => { this.commentsLoading = false; });
    }

    reloadPosts(filter) {
        this.currentPost = null;
        this.loadPosts(filter);
    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    private loadPosts(filter?) {
        this.postsLoading = true;

        this.subscription = this._postService.getPosts(filter)
            .subscribe(
            posts => {
                this.posts = posts;
                this.pagedPosts = _.take(this.posts, this.pageSize);
            },
            null,
            () => { this.postsLoading = false; });
    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }

    onPageChanged(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}