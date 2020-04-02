import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RepositoryFacade } from '.';
import { RepositoryService } from '../repository.service';
import * as  RepositoryActions from './repository.actions';

@Injectable()
export class RepositoryEffects {

    constructor(
        private actions$: Actions,
        private repositoryService: RepositoryService,
        private facade: RepositoryFacade
    ) { }

    setFollowerListPaging = createEffect(() =>
        this.actions$.pipe(
            ofType(RepositoryActions.setContributionListPaging),
            withLatestFrom(this.facade.repository$),
            map(([_, repository]) => RepositoryActions.loadContributions({ owner: repository.owner, name: repository.name })),
        ),
    );

    loadFollowers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RepositoryActions.loadContributions),
            withLatestFrom(this.facade.contributions.config$),
            switchMap(([action, config]) =>
                this.repositoryService.getContributions(action.owner, action.name, config.paging).pipe(
                    map(result =>
                        RepositoryActions.loadContributionsSuccess({
                            entities: result.entities,
                            total: result.total
                        })
                    ),
                    catchError(error => of(RepositoryActions.loadContributionsFail({ error }))),
                )
            )
        )
    );

}