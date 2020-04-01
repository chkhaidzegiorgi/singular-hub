import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from './users.reducer';

const getUserList = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
    getUserList,
    (state: UsersState) => state.users.entities,
);

export const getUsersCount = createSelector(
    getUserList,
    (state: UsersState) => state.users.total
)

export const getConfig = createSelector(
    getUserList,
    (state: UsersState) => state.config
)

export const userListQuery = {
    getUsers,
    getConfig,
    getUsersCount
}