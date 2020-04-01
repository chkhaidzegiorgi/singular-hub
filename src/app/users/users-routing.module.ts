import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { DetailsComponent } from './containers/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':username',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
