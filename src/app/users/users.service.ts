import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services';
import { UserListConfig } from './+state';
import { map } from 'rxjs/operators';
import { User, QueryListFor } from '../shared';

@Injectable()
export class UsersService {

  private readonly resourceUri = 'search/users';

  constructor(private apiService: ApiService) { }

  query(config: UserListConfig): Observable<QueryListFor<User>> {
    const query = {
      q: config.query,
      page: config.paging.page,
      page_per: config.paging.limit
    };

    return this.apiService
      .getWithHeaders(`${this.resourceUri}?${ApiService.toHttpParams(query)}`)
      .pipe(
        map(res => ApiService.mapQueryListFor(res, res.body.items))
      );
  }
}
