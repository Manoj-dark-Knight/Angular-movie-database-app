import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../Models/Movie';
import { tvShows } from 'src/app/Models/tv-shows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PopularMovies: Movie[] = [];
  upcomingMoves: Movie[] = [];
  topRated: Movie[] = [];
  popularTVShows: tvShows[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((response)=>{
      this.PopularMovies = response;
    });
    this.movieService.getMovies('upcoming').subscribe((response)=>{
      this.upcomingMoves = response;
    });
    this.movieService.getMovies('top_rated').subscribe((response)=>{
      this.topRated = response;
    });
    this.movieService.getTv('popular').subscribe((response: tvShows[])=>{
      this.popularTVShows = response;
    })
  }

}
