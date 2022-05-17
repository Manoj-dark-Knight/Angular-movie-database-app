export interface Movie{
    adult: boolean,
    backdrop_path: String,
    genre_ids: number [],
    id: number,
    original_language: string,
    original_title: String,
    overview: String,
    popularity: number,
    poster_path: String,
    release_date: number,
    title: String,
    video: boolean,
    vote_average: number,
    vote_count: number,
    revenue: number,
    runtime: number,
    status: string,
    genres: Genre[]
}
export interface MovieDto{
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}
export interface Genre{
    id: number,
    name: string
}
export interface MovieVideoDto{
    id: number,
    results: MovieVideo[]
}
export interface MovieVideo{
    site: string,
    key: string
}
export interface MovieImage{
    backdrops: {
        file_path: string
    }[];
}
export interface MovieCredits{
    cast: {
        name: string,
        profile_path: string | null
    }[];
    
}