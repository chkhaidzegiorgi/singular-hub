import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services';
import { User } from './models/user.model';
import { ListConfig } from './+store';

@Injectable()
export class UsersService {

  constructor(private apiService: ApiService) { }

  query(config: ListConfig): Observable<{ items: User[], total_count: number }> {
    const query = {
      q: config.query,
      page: config.paging.page,
      page_per: config.paging.limit
    };
    return this.apiService.get<{ items: User[], total_count: number }>(`search/users?${ApiService.toHttpParams(query)}`);
  }

}
