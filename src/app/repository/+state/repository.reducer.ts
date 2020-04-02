import { createReducer, on, Action } from '@ngrx/store';
import { User, List } from 'src/app/shared';
import * as RepositoryActions from './repository.actions';

export interface RepositoryState {
    readonly repository: Repository;
    readonly contributions: List<User>;
}

export const initialState: RepositoryState = {
    repository: {
        name: '',
        owner: ''
    },
    contributions: {
        config: {
            paging: {
                limit: 30,
                page: 1
            }
        },
        entities: [],
        total: 0
    }
}

export interface Repository {
    owner: string;
    name: string;
}

const reducer = createReducer(
    initialState,
    on(RepositoryActions.setContributionListPaging, (state, action) => {

        const config = {
            ...state.contributions.config,
            paging: action.paging
        };

        const contributions = {
            ...state.contributions,
            config
        };

        return { ...state, contributions };
    }),
    on(RepositoryActions.loadContributions, (state: RepositoryState, action) => {
        const repository = {
            ...state.repository,
            owner: action.owner,
            name: action.name
        }
        return { ...state, repository };
    }),
    on(RepositoryActions.loadContributionsSuccess, (state: RepositoryState, action) => {
        const contributions = {
            ...state.contributions,
            entities: action.entities,
            total: action.total
        };
        return { ...state, contributions };
    }),
    on(RepositoryActions.loadContributionsFail, (state: RepositoryState, action) => {
        const contributions = {
            ...state.contributions,
            entities: [],
            total: 0
        };
        console.error(action.error);
        return { ...state, contributions };
    }),
);

export function repositoryReducer(state: RepositoryState | undefined, action: Action): RepositoryState {
    return reducer(state, action);
}