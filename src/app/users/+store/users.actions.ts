import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsers = createAction('[users] LOAD_USERS');

export const loadUsersSuccess = createAction(
    '[users] - LOAD_USERS_SUCCESS',
    props<{ users: User[] }>()
)

export const loadUsersFail = createAction(
    '[users] - LOAD_USERS_FAIL',
    props<{ error: Error }>()
)
