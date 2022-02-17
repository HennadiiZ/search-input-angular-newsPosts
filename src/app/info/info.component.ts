import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { News, Post, Todo } from '../interfaces/post.interface';
import { GetPostService } from '../services/get-post.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  searchResults!: string;
  
  articles: Post[] = [
    { 
      id: 1,
      img: 'https://media.timeout.com/images/105240189/1024/576/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Bali. Indonesia', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 2,
      img: 'https://media.timeout.com/images/105242442/1024/576/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Jakarta. Indonesia', 
      article: 'star Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 3,
      img: 'https://media.timeout.com/images/105817563/1372/772/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Kuala Lumpur. Malaysia', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 4,
      img: 'https://davaypoedem.com/images/daytrips/kyiv/kyiv_sightseeing1.jpg', 
      date: 'June 1st, 2021',
      title: 'Kyiv. Ukraine', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 5,
      img: 'https://all.accor.com/magazine/imagerie/kartinka-1-db70.jpg', 
      date: 'June 1st, 2021',
      title: 'Tbilisi. Georgia', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 6,
      img: 'https://timeout.europcar.pt/assets/img/tours/lx_plural_desk.jpg', 
      date: 'June 1st, 2021',
      title: 'Lisbon. Portugal', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 7,
      img: 'https://media.timeout.com/images/105687608/1372/772/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Los Angeles. USA', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 8,
      img: 'https://media.timeout.com/images/105827631/1372/772/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Barcelona. Spain', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
    { 
      id: 9,
      img: 'https://media.timeout.com/images/105798343/1372/772/image.jpg', 
      date: 'June 1st, 2021',
      title: 'Hong Kong. Hong Kong', 
      article: 'Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip Lorem lorem ipsum dolor sit amet, consectetur adip'
    },
  ];

  todos!: Todo[]
  news!: News[]

  resCounter: number = this.articles.length;

  constructor(private httpClient: HttpClient, private getPostService: GetPostService ){}

  ngOnInit(){
    // this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=9")
    // .subscribe((response)=>{
    //   console.log(response)
    //   this.todos = response
    // })


    this.httpClient.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=9")
    .subscribe((news)=>{
      console.log(news)
      this.news = news
    })
  }

  getPost(){
    console.log('getPost')
    this.getPostService.getWholePost()
  }

}
