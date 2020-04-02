import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as repositoryQuery from './repository.selectors';
import * as repositoryActions from './repository.actions';
import { RepositoryState } from '.';
import { Paging } from 'src/app/shared';

@Injectable()
export class RepositoryFacade {

    repository$ = this.store.select(repositoryQuery.getRepository);

    name: string;
    owner: string;

    contributions = {
        entities$: this.store.select(repositoryQuery.getContributions),
        paging$: this.store.select(repositoryQuery.getContributionListPaging),
        config$: this.store.select(repositoryQuery.getContributionListConfig),
        total$: this.store.select(repositoryQuery.getContributionListCount)
    };

    constructor(private store: Store<RepositoryState>) { }

    loadContributions(owner: string, name: string): void {
        this.store.dispatch(repositoryActions.loadContributions({ owner, name }));
    }

    setContributionsPage(paging: Paging): void {
        this.store.dispatch(repositoryActions.setContributionListPaging({ paging }));
    }
   
}