import { Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {PostsComponent} from "../posts/posts.component";

export const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'posts/:id', component: PostsComponent
  },
];
