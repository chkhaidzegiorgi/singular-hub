import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserFacade } from '.';
import { UserService } from '../user.service';
import * as  UserActions from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService,
        private facade: UserFacade
    ) { }

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUser),
            switchMap((action) =>
                this.usersService.getUser(action.username).pipe(
                    map(result =>
                        UserActions.loadUserSuccess({
                            user: result
                        })
                    ),
                    catchError(error => of(UserActions.loadUserFail({ error }))),
                )
            )
        )
    );

    setFollowerListPaging = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setFollowersListPaging),
            withLatestFrom(this.facade.username$),
            map(([_, username]) => UserActions.loadFollowers({ username })),
        ),
    );

    loadFollowers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadFollowers),
            withLatestFrom(this.facade.followers.config$),
            switchMap(([action, config]) =>
                this.usersService.getFollowers(action.username, config.paging).pipe(
                    map(result =>
                        UserActions.loadFollowersSuccess({
                            entities: result.entities,
                            total: result.total
                        })
                    ),
                    catchError(error => of(UserActions.loadFollowersFail({ error }))),
                )
            )
        )
    );

    setFollowingListPaging$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setFollowingListPaging),
            withLatestFrom(this.facade.username$),
            map(([_, username]) => UserActions.loadFollowing({ username })),
        ),
    );

    loadFollowings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadFollowing),
            withLatestFrom(this.facade.following.config$),
            switchMap(([action, config]) =>
                this.usersService.getFollowings(action.username, config.paging).pipe(
                    map(result =>
                        UserActions.loadFollowingSuccess({
                            entities: result.entities,
                            total: result.total
                        })
                    ),
                    catchError(error => of(UserActions.loadFollowingFail({ error }))),
                )
            )
        )
    );

    setRepositoriesListPaging$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.setRepositoriesListPaging),
            withLatestFrom(this.facade.username$),
            map(([_, username]) => UserActions.loadRepositories({ username })),
        ),
    );

    loadRepositories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadRepositories),
            withLatestFrom(this.facade.repositories.config$),
            switchMap(([action, config]) =>
                this.usersService.getRepositories(action.username, config.paging).pipe(
                    map(result =>
                        UserActions.loadRepositoriesSuccess({
                            entities: result.entities,
                            total: result.total
                        })
                    ),
                    catchError(error => of(UserActions.loadRepositoriesFail({ error }))),
                )
            )
        )
    );
}