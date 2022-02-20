import { Pipe, PipeTransform } from '@angular/core';
import { News, Post } from '../interfaces/post.interface';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(posts: News[], searchResults = ''): News[] {
    if(!searchResults.trim()){
      return posts
    }

      return posts.filter(post => {
            return post.title.toLowerCase().includes(searchResults) || post.summary.toLowerCase().includes(searchResults)
      })
  }

}
