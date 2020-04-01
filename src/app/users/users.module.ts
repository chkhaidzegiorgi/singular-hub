import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './containers/list/list.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer, initialState, UsersFacade } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+store/users.effects';
import { UsersService } from './users.service';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,

    StoreModule.forFeature('users', usersReducer, {
      initialState,
    }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService, UsersEffects, UsersFacade],
})
export class UsersModule { }
