import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './containers/list/list.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer, initialState, UsersFacade, UsersEffects } from './+state';
import { EffectsModule } from '@ngrx/effects';
import { UsersService } from './users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', usersReducer, {
      initialState,
    }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService, UsersEffects, UsersFacade],
})
export class UsersModule { }
