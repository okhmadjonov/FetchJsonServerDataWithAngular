import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsUrlFromChrome: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getDataFromPostsApi(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrlFromChrome);
  }
}
