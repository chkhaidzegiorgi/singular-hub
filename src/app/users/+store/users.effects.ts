import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as  UserActions from './users.actions';
import { concatMap, catchError, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { of } from 'rxjs';
import { UsersFacade } from './users.facade';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService,
        private facade: UsersFacade
    ) { }

    setListPaging = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setListPaging),
            map(() => UserActions.loadUsers()),
        ),
    );

    setListQuery = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setListQuery),
            map(() => UserActions.loadUsers()),
        ),
    );

    loadArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            withLatestFrom(this.facade.configs$),
            switchMap(([_, config]) =>
                this.usersService.query(config).pipe(
                    map(results =>
                        UserActions.loadUsersSuccess({
                            entities: results.items,
                            total: results.total_count
                        }),
                    ),
                    catchError(error => of(UserActions.loadUsersFail({ error }))),
                )
            )
        )
    );
}