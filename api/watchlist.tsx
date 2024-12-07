export const addMovieToWatchlist = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/null/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzM2OTIyZWFmNDVkZjI5YzZjMmM0NWYwMDI5NjAzNyIsIm5iZiI6MTY5NDc5MTQ1My44MzgsInN1YiI6IjY1MDQ3NzFkNjNhYWQyMDBhYjE2NmVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cr7i7RASW8OpF4dN9hQcuovNSvCtH1wHyTeT4Ypvlu4',
    },
    body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: true }),
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  // console.log(JSON.stringify(json,null,2))
  return json;
};

export const fetchWatchlistMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/account/null/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzM2OTIyZWFmNDVkZjI5YzZjMmM0NWYwMDI5NjAzNyIsIm5iZiI6MTY5NDc5MTQ1My44MzgsInN1YiI6IjY1MDQ3NzFkNjNhYWQyMDBhYjE2NmVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cr7i7RASW8OpF4dN9hQcuovNSvCtH1wHyTeT4Ypvlu4',
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  // console.log(JSON.stringify(json,null,2))
  return json.results;
};
