import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { News } from '../interfaces/post.interface';
import { GetPostService } from '../services/get-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getPostService : GetPostService,
    private httpClient: HttpClient, 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      console.log(params);
      this.post = this.getPostService.getPostById(+params['id'])
      console.log( "WHERE IS MY POST? ", this.post)
    })
  }


  goBack(){
    this.router.navigate(['/posts']);
  }

}
