import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export abstract class BaseComponent implements OnDestroy {
    unsubscribe$: Subject<void> = new Subject();

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}