import { Paging } from 'src/app/shared/models/paging.model';

export interface List<T>  extends QueryListFor<T>{
    config: ListConfig;
}

export interface ListConfig {
    paging: Paging;
}

export interface QueryListFor<T> {
    entities: T[];
    total: number;
}