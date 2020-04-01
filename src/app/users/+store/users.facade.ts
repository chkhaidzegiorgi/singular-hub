import { Injectable } from '@angular/core';
import { UsersState } from './users.reducer';
import { Store, select } from '@ngrx/store';
import { userListQuery } from './users.selectors';
import { loadUsers } from './users.actions';
import * as userActions from './users.actions';
import { Paging } from 'src/app/shared/models/paging.model';

@Injectable()
export class UsersFacade {

    users$ = this.store.select(userListQuery.getUsers);
    config$ = this.store.select(userListQuery.getConfig);
    paging$ = this.store.select(userListQuery.getPaging);
    total$ = this.store.select(userListQuery.getUsersCount);

    constructor(private store: Store<UsersState>) { }

    load(): void {
        this.store.dispatch(loadUsers());
    }

    setPage(paging: Paging) {
        this.store.dispatch(userActions.setListPaging({ paging }));
    }

    setQuery(query: string) {
        this.store.dispatch(userActions.setListQuery({ query }));
    }
}