import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { Paging } from 'src/app/shared/models/paging.model';

export const loadUsers = createAction('[users] LOAD_USERS');

export const loadUsersSuccess = createAction(
    '[users] - LOAD_USERS_SUCCESS',
    props<{ entities: User[], total: number }>()
)

export const loadUsersFail = createAction(
    '[users] - LOAD_USERS_FAIL',
    props<{ error: Error }>()
)

export const setListQuery = createAction(
    '[users] SET_LIST_QUERY',
    props<{ query: string }>()
)

export const setListPaging = createAction(
    '[users] SET_LIST_PAGE',
    props<{ paging: Paging }>()
)