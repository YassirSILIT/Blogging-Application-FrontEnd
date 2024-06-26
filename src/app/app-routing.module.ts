import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatPostComponent } from './pages/creat-post/creat-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';

const routes: Routes = [
  {path: "creat-post", component : CreatPostComponent},
  {path: "view-all", component : ViewAllComponent},
  {path: "view-post/:id", component : ViewPostComponent},
  {path: "search-by-name", component : SearchByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
