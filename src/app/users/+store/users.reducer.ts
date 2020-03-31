import { User } from '../models/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './users.actions';

export interface State {
    users: User[];
    loading: boolean;
}

export const initialState: State = {
    users: [],
    loading: false
}

const reducer = createReducer(
    initialState,
    on(UserActions.loadUsers, (state: State, _) => {
        return { ...state, loading: true };
    }),
    on(UserActions.loadUsersSuccess, (state: State, action) => {
        const users = {
            ...state.users,
            users: action.users
        };
        return { ...state, users, loading: false };
    }),
    on(UserActions.loadUsersFail, (state: State, _) => {
        return { ...state, users: [], loading: false };
    })
);

export function UsersReducer(state: State | undefined, action: Action): State {
    return reducer(state, action);
}