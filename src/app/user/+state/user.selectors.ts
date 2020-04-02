import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const getUserState = createFeatureSelector<UserState>('user');

export const getUser = createSelector(
    getUserState,
    (state: UserState) => state
)

export const getUsername = createSelector(
    getUserState,
    (state: UserState) => state.login
)

export const getRepositories = createSelector(
    getUserState,
    (state: UserState) => state.repositories.entities
)

export const getRepositoriesListCount = createSelector(
    getUserState,
    (state: UserState) => state.repositories.total
)

export const getRepositoriesListPaging = createSelector(
    getUserState,
    (state: UserState) => state.repositories.config.paging
)

export const getRepositoriesListConfig = createSelector(
    getUserState,
    (state: UserState) => state.repositories.config
)


export const getFollowers = createSelector(
    getUserState,
    (state: UserState) => state.followers.entities
)

export const getFollowerListCount = createSelector(
    getUserState,
    (state: UserState) => state.followers.total
)

export const getFollowerListPaging = createSelector(
    getUserState,
    (state: UserState) => state.followers.config.paging
)

export const getFollowerListConfig = createSelector(
    getUserState,
    (state: UserState) => state.followers.config
)

export const getFollowings = createSelector(
    getUserState,
    (state: UserState) => state.following.entities
)

export const getFollowingListCount = createSelector(
    getUserState,
    (state: UserState) => state.following.total
)

export const getFollowingListPaging = createSelector(
    getUserState,
    (state: UserState) => state.following.config.paging
)

export const getFollowingListConfig = createSelector(
    getUserState,
    (state: UserState) => state.following.config
)
