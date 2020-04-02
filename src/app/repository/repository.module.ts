import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { DetailsComponent } from './containers/details/details.component';
import { ContributorsComponent } from './containers/contributors/contributors.component';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { repositoryReducer, initialState, RepositoryFacade } from './+state';
import { RepositoryService } from './repository.service';
import { RepositoryEffects } from './+state/repository.effects';


@NgModule({
  declarations: [
    DetailsComponent,
    ContributorsComponent
  ],
  imports: [
    SharedModule,
    RepositoryRoutingModule,
    StoreModule.forFeature('repository', repositoryReducer, {
      initialState,
    }),
    EffectsModule.forFeature([RepositoryEffects])
  ],
  providers: [RepositoryService, RepositoryEffects, RepositoryFacade],
})
export class RepositoryModule { }
