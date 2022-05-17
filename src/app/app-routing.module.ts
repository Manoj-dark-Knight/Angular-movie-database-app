import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { MoviePageComponent } from "./Pages/moviePage/moviePage.component";
import { GenresComponent } from './Pages/genres/genres.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreID',
    component: MoviesComponent
  },
  {
    path: 'genre',
    component: GenresComponent
  },
  {
    path: 'movie/:id',
    component: MoviePageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
