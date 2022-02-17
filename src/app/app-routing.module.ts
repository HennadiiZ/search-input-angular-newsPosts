import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: InfoComponent, children: [
    {path: 'post', component: PostComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
