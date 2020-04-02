import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LinkHeaders } from 'src/app/shared/models/paging.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static toHttpParams(params: any): HttpParams {
    return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }

  static getLinkHeaders(linkHeaders: string): LinkHeaders {
    const parts = linkHeaders.split(',').reduce((row, link) => {
      const match = link.match(/<(.*)>; rel="(\w*)"/);
      const rel = match[2]; // link
      row[rel] = match[1]; // type
      return row;
    }, {}) as LinkHeaders;
    return parts;
  }

  static mapQueryListFor = (result, entities) => {
    const linkHeaders = result.headers.get('Link');
    let totalPages = 1;
    if (linkHeaders) { // if page is only 1 no Link header is provided
      const links = ApiService.getLinkHeaders(linkHeaders);
      totalPages = ApiService.getLastPage(links);
    }

    return {
      entities,
      total: totalPages * entities.length,
    };
  }

  static getLastPage(links: LinkHeaders): number {
    if (!links.last) {
      return 1;
    }
    const url = new URL(links.last);
    const params = new URLSearchParams(url.search);
    return +params.get('page');
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Authorization': 'token 505a45ad2231d088ade8b1b92ed3808923d94233',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  constructor(private http: HttpClient) { }

  getWithHeaders(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}/${url}`, {
      headers: this.headers,
      observe: 'response',
      params,
    });
  }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}/${url}`, {
      headers: this.headers,
      params,
    });
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.http.post<T>(`${environment.api_url}${url}`, JSON.stringify(data), { headers: this.headers });
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${environment.api_url}${url}`, JSON.stringify(data), {
      headers: this.headers,
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${environment.api_url}${url}`, {
      headers: this.headers,
    });
  }

}
