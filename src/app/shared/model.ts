export interface imovieresponse {
    page: number
    results: imovie[]
    total_pages: number
    total_results: number
  }
  
  export interface imovie {
    backdrop_path: string
    id: number
    name?: string
    original_name?: string
    overview: string
    poster_path: string
    media_type: string
    adult: boolean
    original_language: string
    genre_ids: number[]
    popularity: number
    first_air_date?: string
    vote_average: number
    vote_count: number
    origin_country?: string[]
    title?: string
    original_title?: string
    release_date?: string
    video?: boolean
  }
  


  export interface itailerresponse {
    id: number
    results: itailer[]
  }
  
  export interface itailer {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
  }
  