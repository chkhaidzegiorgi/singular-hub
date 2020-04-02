import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userQuery from './user.selectors';
import * as userActions from './user.actions';
import { UserState } from '.';
import { Paging } from 'src/app/shared';

@Injectable()
export class UserFacade {

    user$ = this.store.select(userQuery.getUser);
    username$ = this.store.select(userQuery.getUsername);

    followers = {
        entities$: this.store.select(userQuery.getFollowers),
        paging$: this.store.select(userQuery.getFollowerListPaging),
        config$: this.store.select(userQuery.getFollowerListConfig),
        total$: this.store.select(userQuery.getFollowerListCount)
    };

    following = {
        entities$: this.store.select(userQuery.getFollowings),
        paging$: this.store.select(userQuery.getFollowingListPaging),
        config$: this.store.select(userQuery.getFollowingListConfig),
        total$: this.store.select(userQuery.getFollowingListCount)
    };

    repositories = {
        entities$: this.store.select(userQuery.getRepositories),
        paging$: this.store.select(userQuery.getRepositoriesListPaging),
        config$: this.store.select(userQuery.getRepositoriesListConfig),
        total$: this.store.select(userQuery.getRepositoriesListCount)
    };

    constructor(private store: Store<UserState>) { }

    loadUser(username: string): void {
        this.store.dispatch(userActions.loadUser({ username }));
    }

    loadFollowers(username: string): void {
        this.store.dispatch(userActions.loadFollowers({ username }));
    }

    setFollowersPage(paging: Paging) {
        this.store.dispatch(userActions.setFollowersListPaging({ paging }));
    }

    loadFollowings(username: string): void {
        this.store.dispatch(userActions.loadFollowing({ username }));
    }

    setFollowingsPage(paging: Paging) {
        this.store.dispatch(userActions.setFollowingListPaging({ paging }));
    }

    loadRepositories(username: string): void {
        this.store.dispatch(userActions.loadRepositories({ username }));
    }

    setRepositoriesPage(paging: Paging) {
        this.store.dispatch(userActions.setRepositoriesListPaging({ paging }));
    }
}