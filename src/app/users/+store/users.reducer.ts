import { User, SelectedUser } from '../models/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './users.actions';
import { Paging } from 'src/app/shared/models/paging.model';

export interface UsersState {
    readonly selectedUser: SelectedUser;
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
    },
    selectedUser: {
        avatar_url: '',
        login: '',
        followers: [],
        following: [],
        repositories: []
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
    }),
    on(UserActions.loadUser, (state: UsersState, action) => {
        return { ...state };
    }),
    on(UserActions.loadUserSuccess, (state: UsersState, action) => {
        const selectedUser = {
            ...state.selectedUser,
            avatar_url: action.user.avatar_url,
            login: action.user.login
        };

        return { ...state, selectedUser };
    }),
    on(UserActions.loadUserFail, (state: UsersState, action) => {
        const selectedUser = {
            avatar_url: '',
            followers: [],
            following: [],
            repositories: [],
            login: ''
        };

        return { ...state, selectedUser };
    })
);

export function usersReducer(state: UsersState | undefined, action: Action): UsersState {
    return reducer(state, action);
}