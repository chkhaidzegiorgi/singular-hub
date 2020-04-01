import { Injectable } from '@angular/core';
import { UserState } from './users.reducer';
import { Store } from '@ngrx/store';
import { userListQuery } from './users.selectors';
import { loadUsers } from './users.actions';

@Injectable()
export class UsersFacade {

    users$ = this.store.select(userListQuery.getUsers);

    constructor(private store: Store<UserState>) { }

    load(): void {
        this.store.dispatch(loadUsers());
    }
}