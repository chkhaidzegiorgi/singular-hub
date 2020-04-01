import { User } from '../models/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './users.actions';
import { Paging } from 'src/app/shared/models/paging.model';

export interface UsersState {
    readonly users: UserList;
    readonly config: ListConfig;
}

export const initialState: UsersState = {
    users: {
        entities: [],
        total: 0
    },
    config: {
        paging: { page: 1, limit: 30 },
        query: ''
    }
}

export interface UserList {
    entities: User[];
    total: number;
}

export interface ListConfig {
    query: string;
    paging: Paging;
}

const reducer = createReducer(
    initialState,
    on(UserActions.setListPaging, (state, action) => {

        const config = {
            ...state.config,
            paging: action.paging
        };
        return { ...state, config };
    }),
    on(UserActions.setListQuery, (state, action) => {
        const config = {
            ...state.config,
            query: action.query
        };
        return { ...state, config };
    }),
    on(UserActions.loadUsers, (state: UsersState, _) => {
        return { ...state };
    }),
    on(UserActions.loadUsersSuccess, (state: UsersState, action) => {
        const users = {
            ...state.users,
            entities: action.entities,
            total: action.total
        };
        return { ...state, users };
    }),
    on(UserActions.loadUsersFail, (state: UsersState, _) => {
        const users = {
            ...state.users,
            entities: [],
            total: 0
        };
        return { ...state, users };
    })
);

export function usersReducer(state: UsersState | undefined, action: Action): UsersState {
    return reducer(state, action);
}