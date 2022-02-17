import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class GetPostService{
    
    constructor(private httpClient: HttpClient ){

    }


    getWholePost(): Observable<any>{
        return this.httpClient.get<string>("https://api.spaceflightnewsapi.net/v3/articles?_limit=9");
    }

}