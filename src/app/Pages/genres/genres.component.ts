import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovieGenre().subscribe((res)=>{
      this.genres = res
    })
  }

}
