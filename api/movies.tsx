export const fetchTopratedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
  return json;
};
