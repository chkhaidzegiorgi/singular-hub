import { createReducer, on, Action } from '@ngrx/store';
import { User, Repository, List } from 'src/app/shared';
import * as UserActions from './user.actions';

export interface UserState {
    readonly login: string;
    readonly avatar_url: string;
    readonly followers: List<User>;
    readonly following: List<User>;
    readonly repositories: List<Repository>;
}

export const initialState: UserState = {
    login: '',
    avatar_url: '',
    followers: {
        config: {
            paging: {
                limit: 30,
                page: 1
            }
        },
        entities: [],
        total: 0
    },
    following: {
        config: {
            paging: {
                limit: 30,
                page: 1
            }
        },
        entities: [],
        total: 0
    },
    repositories: {
        config: {
            paging: {
                limit: 30,
                page: 1
            }
        },
        entities: [],
        total: 0
    }
}

const reducer = createReducer(
    initialState,
    on(UserActions.loadUser, (state: UserState, action) => {
        return { ...state, login: action.username,  };
    }),
    on(UserActions.loadUserSuccess, (state: UserState, action) => {
        return { ...state, login: action.user.login, avatar_url: action.user.avatar_url };
    }),
    on(UserActions.loadUserFail, (state: UserState, action) => {
        console.error(action.error);
        return { ...state, login: '', avatar_url: '' };
    }),
    on(UserActions.setFollowersListPaging, (state, action) => {

        const config = {
            ...state.followers.config,
            paging: action.paging
        };

        const followers = {
            ...state.followers,
            config
        };

        return { ...state, followers };
    }),
    on(UserActions.loadFollowers, (state: UserState, _) => {
        return { ...state };
    }),
    on(UserActions.loadFollowersSuccess, (state: UserState, action) => {
        const followers = {
            ...state.followers,
            entities: action.entities,
            total: action.total
        };
        return { ...state, followers };
    }),
    on(UserActions.loadFollowersFail, (state: UserState, action) => {
        const followers = {
            ...state.followers,
            entities: [],
            total: 0
        };
        console.error(action.error);
        return { ...state, followers };
    }),
    on(UserActions.setFollowingListPaging, (state, action) => {

        const config = {
            ...state.following.config,
            paging: action.paging
        };

        const following = {
            ...state.following,
            config
        };

        return { ...state, following };
    }),
    on(UserActions.loadFollowing, (state: UserState, _) => {
        return { ...state };
    }),
    on(UserActions.loadFollowingSuccess, (state: UserState, action) => {
        const following = {
            ...state.following,
            entities: action.entities,
            total: action.total
        };
        return { ...state, following };
    }),
    on(UserActions.loadFollowingFail, (state: UserState, action) => {
        const following = {
            ...state.following,
            entities: [],
            total: 0
        };
        console.error(action.error);
        return { ...state, following };
    }),
    on(UserActions.setRepositoriesListPaging, (state, action) => {

        const config = {
            ...state.repositories.config,
            paging: action.paging
        };

        const repositories = {
            ...state.repositories,
            config
        };

        return { ...state, repositories };
    }),
    on(UserActions.loadRepositories, (state: UserState, _) => {
        return { ...state };
    }),
    on(UserActions.loadRepositoriesSuccess, (state: UserState, action) => {
        const repositories = {
            ...state.repositories,
            entities: action.entities,
            total: action.total
        };
        return { ...state, repositories };
    }),
    on(UserActions.loadRepositoriesFail, (state: UserState, action) => {
        const repositories = {
            ...state.repositories,
            entities: [],
            total: 0
        };
        console.error(action.error);
        return { ...state, repositories };
    })
);

export function userReducer(state: UserState | undefined, action: Action): UserState {
    return reducer(state, action);
}