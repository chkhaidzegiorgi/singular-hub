import { createAction, props } from '@ngrx/store';
import { User, Paging } from 'src/app/shared';

export const loadUsers = createAction('[users] LOAD_USERS');

export const loadUsersSuccess = createAction(
    '[users] - LOAD_USERS_SUCCESS',
    props<{ entities: User[], total: number }>()
)

export const loadUsersFail = createAction(
    '[users] - LOAD_USERS_FAIL',
    props<{ error: Error }>()
)

export const setUserListQuery = createAction(
    '[users] - SET_LIST_QUERY',
    props<{ query: string }>()
)

export const setUserListPaging = createAction(
    '[users] - SET_LIST_PAGE',
    props<{ paging: Paging }>()
)