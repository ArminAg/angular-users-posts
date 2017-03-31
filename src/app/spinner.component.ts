import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <i *ngIf="visible" class="fa fa-circle-o-notch fa-spin fa-3x"></i>
    `
})

export class SpinnerComponent implements OnInit {
    @Input() visible = true;

    constructor() { }

    ngOnInit() { }
}