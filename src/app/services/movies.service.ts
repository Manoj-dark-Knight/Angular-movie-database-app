import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImage, MovieVideoDto } from '../Models/Movie';
import { switchMap } from 'rxjs';
import { of } from "rxjs";
import { MovieGenre } from '../Models/Genre';
import { tvShows, tvShowsDto } from '../Models/tv-shows';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  baseUrl: String = 'https://api.themoviedb.org/3/';
  apikey: String = '56e174a45348b56a70de2c6311b23ec2';

  constructor(private http: HttpClient) { }

  getMovies (type: String = 'top_rated', count: number = 20) {
    return this.http.get<MovieDto>(`${this.baseUrl}movie/${type}?api_key=${this.apikey}`)
    .pipe(switchMap(res => {
      return of(res.results.slice(0, count)); //returns an array[]
    }));
  }
  searchMovies(page: number, SearchValue?: string){
    const url = SearchValue ? `search/movie` : `movie/popular`
    return this.http.get<MovieDto>(`${this.baseUrl}${url}?page=${page}&query=${SearchValue}&api_key=${this.apikey}`).pipe(
      switchMap((res) =>{
        return of(res.results);
      })
    )
  }
  getMoviesByGenre(id: number, page: number){
    return this.http.get<MovieDto>(`${this.baseUrl}discover/movie?with_genres=${id}&page=${page}&api_key=${this.apikey}`).pipe(
      switchMap((res) =>{
        return of(res.results);
      })
    )
  }
  getMovieVideo (id: number) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}movie/${id}/videos?api_key=${this.apikey}`)
    .pipe(switchMap(res => {
      return of(res.results); 
    }));
  }
  getMovieGenre () {
    return this.http.get<MovieGenre>(`${this.baseUrl}/genre/movie/list?api_key=${this.apikey}`)
    .pipe(switchMap(res => {
      return of(res.genres); 
    }));
  }
  getTv(type: string, count: number = 20){
    return this.http.get<tvShowsDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apikey}`)
    .pipe(switchMap(res=>{
      return of(res.results.slice(0, count))
    }))
  }
  getMovieCredits(id:string){
    return this.http.get<MovieCredits>(`${this.baseUrl}movie/${id}/credits?api_key=${this.apikey}`)
  }
  getMoviePage(id: String){
    return this.http.get<Movie>(`${this.baseUrl}movie/${id}?api_key=${this.apikey}`)
  }
  getMovieImages(id: string){
    return this.http.get<MovieImage>(`${this.baseUrl}movie/${id}/images?api_key=${this.apikey}`)
  }
  }

