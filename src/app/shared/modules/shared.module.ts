import { NgModule } from '@angular/core';

import { UserListComponent } from '../components/user-list/user-list.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerComponent } from '../components/progress-spinner/progress-spinner.component';

const COMPONENTS = [
    UserListComponent,
    ProgressSpinnerComponent
];

const MODULES = [
    CommonModule,
    RouterModule,
    MaterialModule
];

@NgModule({
    declarations: COMPONENTS,
    imports: MODULES,
    exports: [
        ...COMPONENTS,
        ...MODULES
    ],
})
export class SharedModule { }
