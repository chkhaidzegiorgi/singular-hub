export interface Paging {
    page: number;
    limit: number;
}

export interface LinkHeaders {
    prev: string;
    next: string;
    first: string;
    last: string;
}