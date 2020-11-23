import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient, public route: Router) { }

  postApi(url, data): Observable<any> {
    return this.http.post(environment.baseurl + url, data)
  }
  getApi(url): Observable<any> {
    return this.http.get(environment.baseurl + url)
  }
  navigateTo(route) {
    this.route.navigate([route])
  }
}
