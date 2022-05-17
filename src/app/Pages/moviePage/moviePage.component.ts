import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Movie, MovieCredits, MovieImage, MovieVideo } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from "../../components/Constants/image-sizes";

@Component({
  selector: 'app-moviePage',
  templateUrl: './moviePage.component.html',
  styleUrls: ['./moviePage.component.scss']
})
export class MoviePageComponent implements OnInit,OnDestroy {

  movie: Movie | null = null;
  imageSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImage | null = null;
  movieCredits: MovieCredits | null = null;

  constructor(private route: ActivatedRoute, private moviePageService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id })=>{
      this.getMovie(id);
      this.getMoviVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    })
  }
  ngOnDestroy(): void {
      console.log('destroyed');
  }
  getMovie(id: String){
    this.moviePageService.getMoviePage(id).subscribe((MovieData)=>{
      this.movie = MovieData;
      console.log(this.movie)
    })
  }
  getMoviVideo(id: number){
    this.moviePageService.getMovieVideo(id).subscribe((movieVideos)=>{
      this.movieVideos = movieVideos;
    })
  }
  getMovieCredits(id: string){
    this.moviePageService.getMovieCredits(id).subscribe((movieCredits)=>{
      this.movieCredits = movieCredits;
    })
  }
  getMovieImages(id: string){
    this.moviePageService.getMovieImages(id).subscribe((movieImages)=>{
      this.movieImages = movieImages;
    })
  }

}