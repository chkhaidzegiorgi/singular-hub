import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Paging } from 'src/app/shared/models/paging.model';
import { BaseComponent } from './base.component';

export abstract class ListBaseComponent<T> extends BaseComponent {

    entities$: Observable<T[]>;
    total$: Observable<number>;
    paging$: Observable<Paging>;

    abstract initialize();


}
