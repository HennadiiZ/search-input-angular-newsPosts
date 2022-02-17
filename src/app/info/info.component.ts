import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { News } from '../interfaces/post.interface';
import { GetPostService } from '../services/get-post.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  searchResults!: string;

  news!: News[]

  constructor(private httpClient: HttpClient, private getPostService: GetPostService ){}

  ngOnInit(){
    this.getPostService.getPosts()
    .subscribe((news)=>{
      console.log(news)
      this.news = news
    })
  }

  getPost(){
    console.log('getPost')
    // this.getPostService.getPosts()
  }

}
