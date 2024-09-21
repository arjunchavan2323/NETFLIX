import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedashbordComponent } from './component/moviedashbord/moviedashbord.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path:'', component:MoviedashbordComponent
  },
  {
    path:'moviedetail/:movieid', component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
