import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services';
import { User } from './models/user.model';

@Injectable()
export class UsersService {

  constructor(private apiService: ApiService) { }

  query(): Observable<User[]> {
    return this.apiService.get<User[]>('users?per_page=20');
  }

}
