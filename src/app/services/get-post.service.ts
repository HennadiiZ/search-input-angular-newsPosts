import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { News } from "../interfaces/post.interface";

@Injectable({providedIn: 'root'})

export class GetPostService implements OnInit, OnDestroy {

    subscription!: Subscription;
    news!: News[];
    refreshPost!: any;
    
    constructor(private httpClient: HttpClient ){}

    ngOnInit(){}

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    getPosts(): Observable<any>{
        return this.httpClient.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=12");
    }

    getPostById(id: number){
       
        this.subscription = this.getPosts()
        .subscribe((news)=>{
            this.refreshPost = news.find((post: Params) => post['id'] === id)
        })
        return this.refreshPost
    }


}