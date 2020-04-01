import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as  UserActions from './users.actions';
import { concatMap, catchError, map } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }

    loadArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            concatMap(() =>
                this.usersService.query().pipe(
                    map(results =>
                        UserActions.loadUsersSuccess({
                            entities: results
                        }),
                    ),
                    catchError(error => of(UserActions.loadUsersFail({ error }))),
                ),
            ),
        ),
    );

}