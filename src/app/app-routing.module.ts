import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    pathMatch: 'full',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'users/:username',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'users/:username/repos/:repo',
    loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
