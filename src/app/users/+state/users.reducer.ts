import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './users.actions';
import { User, List, ListConfig } from 'src/app/shared';

export interface UsersState extends List<User> {
    readonly config: UserListConfig;
}

export const initialState: UsersState = {
    entities: [],
    total: 0,
    config: {
        paging: { page: 1, limit: 30 },
        query: ''
    }
}


export interface UserListConfig extends ListConfig {
    query: string;
}

const reducer = createReducer(
    initialState,
    on(UserActions.setUserListPaging, (state, action) => {

        const config = {
            ...state.config,
            paging: action.paging
        };

        return { ...state, config };
    }),
    on(UserActions.setUserListQuery, (state, action) => {
        const config = {
            ...state.config,
            query: action.query,
            paging: {
                page: 1,
                limit: 30
            }
        };

        return { ...state, config };
    }),
    on(UserActions.loadUsers, (state: UsersState, _) => {
        return { ...state };
    }),
    on(UserActions.loadUsersSuccess, (state: UsersState, action) => {
        return { ...state, entities: action.entities, total: action.total };
    }),
    on(UserActions.loadUsersFail, (state: UsersState, action) => {
        console.error(action.error);
        return { ...state, entities: [], total: 0 };
    })
);

export function usersReducer(state: UsersState | undefined, action: Action): UsersState {
    return reducer(state, action);
}