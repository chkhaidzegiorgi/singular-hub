import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

const getUserState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
    getUserState,
    (state: UsersState) => state.entities,
);

export const getUserListCount = createSelector(
    getUserState,
    (state: UsersState) => state.total
)

export const getUserListPaging = createSelector(
    getUserState,
    (state: UsersState) => state.config.paging
)

export const getUserListConfig = createSelector(
    getUserState,
    (state: UsersState) => state.config
)
