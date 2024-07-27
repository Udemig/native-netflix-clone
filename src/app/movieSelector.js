export const getUpcomingState =
  () =>
  ({movie: {upcoming}}) =>
    upcoming;
export const getTopRatedState =
  () =>
  ({movie: {topRated}}) =>
    topRated;

export const getMovieDetailState =
  () =>
  ({movie: {movieDetail}}) =>
    movieDetail;

export const getMovieCreditState =
  () =>
  ({movie: {movieCredits}}) =>
    movieCredits;

export const getSimilarMoviesState =
  () =>
  ({movie: {movieSimilar}}) =>
    movieSimilar;
