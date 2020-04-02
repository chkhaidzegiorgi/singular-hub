import { createAction, props } from '@ngrx/store';
import { User, Paging } from 'src/app/shared';

export const loadContributions = createAction(
    '[repository] - LOAD_CONTRIBUTIONS',
    props<{ owner: string, name: string }>()
);

export const loadContributionsSuccess = createAction(
    '[user] - LOAD_CONTRIBUTIONS_SUCCESS',
    props<{ entities: User[], total: number }>()
);

export const loadContributionsFail = createAction(
    '[user] - LOAD_CONTRIBUTIONS_FAIL',
    props<{ error: Error }>()
)

export const setContributionListPaging = createAction(
    '[user] - SET_CONTRIBUTIONS_LIST_PAGING',
    props<{ paging: Paging }>()
)
