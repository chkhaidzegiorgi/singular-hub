import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepositoryState } from './repository.reducer';

const getRepositoryState = createFeatureSelector<RepositoryState>('repository');

export const getRepository = createSelector(
    getRepositoryState,
    (state: RepositoryState) => state.repository
)

export const getContributions = createSelector(
    getRepositoryState,
    (state: RepositoryState) => state.contributions.entities
)

export const getContributionListCount = createSelector(
    getRepositoryState,
    (state: RepositoryState) => state.contributions.total
)

export const getContributionListPaging = createSelector(
    getRepositoryState,
    (state: RepositoryState) => state.contributions.config.paging
)

export const getContributionListConfig = createSelector(
    getRepositoryState,
    (state: RepositoryState) => state.contributions.config
)

