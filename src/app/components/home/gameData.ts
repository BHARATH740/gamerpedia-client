export interface ListGamesResponse {
  error: boolean;
  total_games: number;
  received_games: number;
  total_pages: number;
  page: number;
  data: Game;
}

export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  image: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface Genre {
  name: string;
}

export interface ParentPlatform {
  platform: {
    // name: string;
    slug: string;
  };
}

export interface Publishers {
  name: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
}

export interface Screenshots {
  image: string;
}

export interface Trailer {
  data: {
    max: string;
  };
}

export interface APIResponse<T> {
  data: Array<T>;
}
