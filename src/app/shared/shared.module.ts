import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationComponent } from '../shared/pagination.component';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
    imports:[CommonModule],
    exports: [
        SpinnerComponent,
        PaginationComponent
    ],
    declarations:[
        SpinnerComponent,
        PaginationComponent
    ],
    providers:[
        PreventUnsavedChangesGuard
    ]
})
export class SharedModule{}