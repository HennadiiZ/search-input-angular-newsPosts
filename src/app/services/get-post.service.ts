import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../interfaces/post.interface";

@Injectable({providedIn: 'root'})

export class GetPostService{
    
    constructor(private httpClient: HttpClient ){}

    getPosts(): Observable<any>{
        return this.httpClient.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=12");
    }

}