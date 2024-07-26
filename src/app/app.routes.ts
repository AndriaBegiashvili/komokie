import { Routes } from '@angular/router';
import {UsersComponent} from "./pages/users/users.component";
import {PostsComponent} from "./pages/posts/posts.component";

export const routes: Routes = [
  {path:'',
    loadChildren: () =>
      import('./pages/users/users-routing').then((r) => r.routes),
  },
  {path:'users',
    loadChildren: () =>
      import('./pages/users/users-routing').then((r) => r.routes),
  },
  {path:'posts',component:PostsComponent
  },

];
