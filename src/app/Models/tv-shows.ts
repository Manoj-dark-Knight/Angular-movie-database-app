export interface tvShows{
    backdrop_path: string,
      first_air_date: number,
      genre_ids: number[],
      id: number,
      name: string,
      origin_country: string[],
      original_language: string,
      original_name: string,
      overview: string,
      popularity: number,
      poster_path: number,
      vote_average: number,
      vote_count: number
}
export interface tvShowsDto{
    page: number,
    results: tvShows[],
    total_pages: number,
    total_results: number
}