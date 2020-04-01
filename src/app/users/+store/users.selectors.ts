import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from './users.reducer';

const getUserState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
    getUserState,
    (state: UsersState) => state.users.entities,
);

export const getUsersCount = createSelector(
    getUserState,
    (state: UsersState) => state.users.total
)

export const getPaging = createSelector(
    getUserState,
    (state: UsersState) => state.config.paging
)

export const getConfig = createSelector(
    getUserState,
    (state: UsersState) => state.config
)

export const getSelectedUser = createSelector(
    getUserState,
    (state: UsersState) => state.selectedUser
)

export const getSelectedUserRepositories = createSelector(
    getUserState,
    (state: UsersState) => state.selectedUser.repositories
)

export const getSelectedUserFollowers = createSelector(
    getUserState,
    (state: UsersState) => state.selectedUser.followers
)

export const getSelectedUserFollowing = createSelector(
    getUserState,
    (state: UsersState) => state.selectedUser.following
)