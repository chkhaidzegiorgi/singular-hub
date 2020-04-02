import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { DetailsComponent, FollowersComponent, FollowingComponent, RepositoriesComponent } from './containers';
import {  SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer, initialState, UserFacade } from './+state';
import { UserService } from './user.service';
import { UserEffects } from './+state/user.effects';


@NgModule({
  declarations: [
    DetailsComponent,
    FollowersComponent,
    FollowingComponent,
    RepositoriesComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer, {
      initialState,
    }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserService, UserEffects, UserFacade],
})
export class UserModule { }
