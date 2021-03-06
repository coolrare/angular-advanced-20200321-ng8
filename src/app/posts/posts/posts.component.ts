import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Article, Articles } from '../article';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  articles: Article[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getArticles().subscribe( data => {
      this.articles = data.articles;
      console.log(this.articles);
    });
  }

}
