import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './containers/list/list.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer, initialState, UsersFacade } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+store/users.effects';
import { UsersService } from './users.service';
import { MaterialModule } from '../shared';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './containers/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MaterialModule,
    StoreModule.forFeature('users', usersReducer, {
      initialState,
    }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService, UsersEffects, UsersFacade],
})
export class UsersModule { }
