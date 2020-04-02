import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { Paging, User, QueryListFor } from '../shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RepositoryService {

  private readonly resourceUri = 'repos';

  constructor(private apiService: ApiService) { }

  getContributions(owner: string, name: string, paging: Paging): Observable<QueryListFor<User>> {
    const query = {
      page: paging.page,
      page_per: paging.limit
    };

    return this.apiService
      .getWithHeaders(`${this.resourceUri}/${owner}/${name}/contributors?${ApiService.toHttpParams(query)}`)
      .pipe(
        map(res => ApiService.mapQueryListFor(res, res.body))
      );
  }
}
