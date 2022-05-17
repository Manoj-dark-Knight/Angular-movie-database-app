import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  genreId: string | any = null;
  SearchValue: string | any = null;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreID})=>{
      if(genreID){
        this.genreId = genreID;
        this.getGenrebyMovies(genreID, 1);
        this.SearchChanged();
      }else{
        this.getPagedMovies(1);
        this.SearchChanged();
      }
    })
  }
  getGenrebyMovies(id: number, pageNumber: number){
    this.movieService.getMoviesByGenre(id, pageNumber).subscribe((res)=>{
      this.movies = res
    })
  }
  getPagedMovies(page: number, searchKeyword?: string){
    this.movieService.searchMovies(page, this.SearchValue).subscribe(res=>{
      this.movies = res;
    })
  }
  paginate(event:any){
    if(!this.genreId){
      this.getPagedMovies(event.page + 1)
    }else{
      this.getGenrebyMovies(this.genreId, event.page + 1)
    }
    
  }
  SearchChanged(){
    this.getPagedMovies(1, this.SearchValue);
  }

}
