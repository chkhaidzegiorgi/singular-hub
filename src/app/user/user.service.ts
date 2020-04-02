import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services';
import { Paging } from '../shared/models/paging.model';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { QueryListFor } from '../shared/models/list.model';
import { Repository } from '../shared';

@Injectable()
export class UserService {

  private readonly resourceUri = 'users';

  constructor(private apiService: ApiService) { }

  getUser(username: string): Observable<User> {
    return this.apiService.get<User>(`${this.resourceUri}/${username}`);
  }

  getFollowers(username: string, paging: Paging): Observable<QueryListFor<User>> {
    const query = {
      page: paging.page,
      page_per: paging.limit
    };

    return this.apiService
      .getWithHeaders(`${this.resourceUri}/${username}/followers?${ApiService.toHttpParams(query)}`)
      .pipe(
        map(res => ApiService.mapQueryListFor(res, res.body))
      );
  }

  getFollowings(username: string, paging: Paging): Observable<QueryListFor<User>> {
    const query = {
      page: paging.page,
      page_per: paging.limit
    };

    return this.apiService
      .getWithHeaders(`${this.resourceUri}/${username}/following?${ApiService.toHttpParams(query)}`)
      .pipe(
        map(res => ApiService.mapQueryListFor(res, res.body))
      );
  }


  getRepositories(username: string, paging: Paging): Observable<QueryListFor<Repository>> {
    const query = {
      page: paging.page,
      page_per: paging.limit
    };

    return this.apiService
      .getWithHeaders(`${this.resourceUri}/${username}/repos?${ApiService.toHttpParams(query)}`)
      .pipe(
        map(res => ApiService.mapQueryListFor(res, res.body))
      );
  }
  
}
