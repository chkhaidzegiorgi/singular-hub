import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  LayoutComponent,
  ToolbarComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: COMPONENTS
})
export class CoreModule { }
