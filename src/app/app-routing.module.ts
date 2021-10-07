import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"post", component:PostComponent},
  {path:"postdetails/:id", component:PostdetailsComponent},
  {path:"photoalbums", component:PhotoalbumsComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
