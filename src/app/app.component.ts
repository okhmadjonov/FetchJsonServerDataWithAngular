import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'appfetchapi';
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.postsService.getDataFromPostsApi().subscribe(
      (response) => {
        this.posts = response;
        console.log('Data from API:', this.posts);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
