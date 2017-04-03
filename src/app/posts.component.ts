import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from './user.service';

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
                this.pagedPosts = this.getPostsInPage(1);
            },
            null,
            () => { this.postsLoading = false; });
    }

    private getPostsInPage(page) {
        var result = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);

        return result;
    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }

    onPageChanged(page) {
        this.pagedPosts = this.getPostsInPage(page);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}