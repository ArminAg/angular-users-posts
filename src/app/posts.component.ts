import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './post.service';

@Component({
    selector: 'posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit, OnDestroy {
    posts;
    subscription;
    isLoading = true;

    constructor(private _postService: PostService) { }

    ngOnInit() {
        this.subscription = this._postService.getPosts()
            .subscribe(
            posts => this.posts = posts,
            null,
            () => { this.isLoading = false; });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}