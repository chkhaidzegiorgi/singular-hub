import { Repository } from './repositories.model';

export interface User {
    login: string;
    avatar_url: string;
}

export interface SelectedUser extends User {
    followers: User[];
    following: User[];
    repositories: Repository[];
}