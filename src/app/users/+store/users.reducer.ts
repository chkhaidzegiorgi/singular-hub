import { User } from '../models/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './users.actions';

export interface UserState {
    readonly entities: User[];
}

export const initialState: UserState = {
    entities: []
}

const reducer = createReducer(
    initialState,
    on(UserActions.loadUsers, (state: UserState, _) => {
        return { ...state };
    }),
    on(UserActions.loadUsersSuccess, (state: UserState, action) => {
        const entities = {
            ...state.entities,
            entities: action.entities
        };
        return { ...state, ...entities };
    }),
    on(UserActions.loadUsersFail, (state: UserState, _) => {
        return { ...state, entities: [] };
    })
);

export function usersReducer(state: UserState | undefined, action: Action): UserState {
    return reducer(state, action);
}