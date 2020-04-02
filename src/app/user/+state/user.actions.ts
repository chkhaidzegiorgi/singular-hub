import { createAction, props } from '@ngrx/store';
import { User, Paging } from 'src/app/shared';
import { Repository } from '../models/repositories.model';

export const loadUser = createAction(
    '[user] - LOAD_USER',
    props<{ username: string }>()
);

export const loadUserSuccess = createAction(
    '[user] - LOAD_USER_SUCCESS',
    props<{ user: User }>()
);

export const loadUserFail = createAction(
    '[user] - LOAD_USER_FAIL',
    props<{ error: Error }>()
)

export const loadFollowing = createAction(
    '[user] - LOAD_USER_FOLLOWING',
    props<{ username: string }>()
);

export const loadFollowingSuccess = createAction(
    '[user] - LOAD_USER_FOLLOWING_SUCCESS',
    props<{ entities: User[], total: number }>()
);

export const loadFollowingFail = createAction(
    '[user] - LOAD_USER_FOLLOWING_FAIL',
    props<{ error: Error }>()
)

export const setFollowingListPaging = createAction(
    '[user] - SET_USER_FOLLOWING_LIST_PAGE',
    props<{ paging: Paging }>()
)

export const loadFollowers = createAction(
    '[user] - LOAD_USER_FOLLOWERS',
    props<{ username: string }>()
);

export const loadFollowersSuccess = createAction(
    '[user] - LOAD_USER_FOLLOWERS_SUCCESS',
    props<{ entities: User[], total: number }>()
);

export const loadFollowersFail = createAction(
    '[user] - LOAD_USER_FOLLOWERS_FAIL',
    props<{ error: Error }>()
)

export const setFollowersListPaging = createAction(
    '[user] - SET_USER_FOLLOWERS_LIST_PAGE',
    props<{ paging: Paging }>()
)

export const loadRepositories = createAction(
    '[user] - LOAD_USER_REPOSITORIES',
    props<{ username: string }>()
);

export const loadRepositoriesSuccess = createAction(
    '[user] - LOAD_USER_REPOSITORIES_SUCCESS',
    props<{ entities: Repository[], total: number }>()
);

export const loadRepositoriesFail = createAction(
    '[user] - LOAD_USER_REPOSITORIES_FAIL',
    props<{ error: Error }>()
)

export const setRepositoriesListPaging = createAction(
    '[user] - SET_USER_REPOSITORY_LIST_PAGE',
    props<{ paging: Paging }>()
)