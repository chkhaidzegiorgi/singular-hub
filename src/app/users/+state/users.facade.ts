import { Injectable } from '@angular/core';
import { UsersState } from './users.reducer';
import { Store } from '@ngrx/store';
import * as usersQuery from './users.selectors';
import * as userActions from './users.actions';
import { loadUsers } from './users.actions';
import { Paging } from 'src/app/shared';

@Injectable()
export class UsersFacade {

    entities$ = this.store.select(usersQuery.getUsers);
    paging$ = this.store.select(usersQuery.getUserListPaging);
    config$ = this.store.select(usersQuery.getUserListConfig);
    total$ = this.store.select(usersQuery.getUserListCount);

    constructor(private store: Store<UsersState>) { }

    loadUsers(): void {
        this.store.dispatch(loadUsers());
    }

    setPage(paging: Paging) {
        this.store.dispatch(userActions.setUserListPaging({ paging }));
    }

    setQuery(query: string) {
        this.store.dispatch(userActions.setUserListQuery({ query }));
    }
}