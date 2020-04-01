import { Injectable } from '@angular/core';
import { UsersState } from './users.reducer';
import { Store, select } from '@ngrx/store';
import * as usersQuery from './users.selectors';
import { loadUsers } from './users.actions';
import * as userActions from './users.actions';
import { Paging } from 'src/app/shared/models/paging.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersFacade {

    users$ = this.store.select(usersQuery.getUsers);
    config$ = this.store.select(usersQuery.getConfig);
    paging$ = this.store.select(usersQuery.getPaging);
    total$ = this.store.select(usersQuery.getUsersCount);
    selectedUser$ = this.store.select(usersQuery.getSelectedUser);
    selectedUsername$: Observable<string>;

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

    loadUser(username: string): void {
        this.selectedUsername$ = of(username);
        this.store.dispatch(userActions.loadUser({ username }));
    }
}