import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { News } from "../interfaces/post.interface";

@Injectable({providedIn: 'root'})

export class GetPostService implements OnInit {

    news!: News[];
    refreshPost!: any
    
    constructor(private httpClient: HttpClient ){}

    ngOnInit(){
        return this.httpClient.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=12")
        .subscribe((news)=>{
          console.log(news)
          this.news = news
        })
    }

    getPosts(): Observable<any>{
        return this.httpClient.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=12");
    }

    getPostById(id: number){
       
        this.getPosts().subscribe((news)=>{

            this.refreshPost = news.find((post: Params) => post['id'] === id)
        })
        return this.refreshPost
    }

}