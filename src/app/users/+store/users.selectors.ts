import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './users.reducer';

const getUserList = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
    getUserList,
    (state: UserState) => state.entities,
);


export const userListQuery = {
    getUsers
}