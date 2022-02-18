import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../interfaces/post.interface';
import { GetPostService } from '../services/get-post.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  searchResults!: string;

  news!: News[];

 

  constructor(
    private httpClient: HttpClient, 
    public getPostService: GetPostService ,
    private router: Router,
  ){}

  ngOnInit(){
    this.getPostService.getPosts()
    .subscribe((news)=>{
      console.log(news)
      this.news = news
    })
  }

  getPost(id: number){
    console.log('getPost')
    console.log(id)
    this.router.navigate(['posts/' + id])

    this.getPostService.getPostById(id)
  }

}
