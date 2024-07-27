import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMovieCredits,
  getMovieDetails,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../../api';
import {
  setMovieCreditState,
  setMovieDetailState,
  setSimilarMoviesState,
  setTopRatedState,
  setTrendingState,
  setUpcomingState,
} from '../slices/movieSlice';

export const GetTrendingMovies = createAsyncThunk(
  'movie/getTrendingMovies',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();

    dispatch(setTrendingState(response.results));
  },
);

export const GetUpcomingMovies = createAsyncThunk(
  'movie/getUpcomingMovies',
  async (_, {dispatch}) => {
    const response = await getUpcomingMovies();
    dispatch(setUpcomingState(response.results));
  },
);

export const GetTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedState(response.results));
  },
);

export const GetMovieDetails = createAsyncThunk(
  'movie/getMovieDetails',
  async (id, {dispatch}) => {
    const response = await getMovieDetails(id);
    dispatch(setMovieDetailState(response));
  },
);
export const GetMovieCredits = createAsyncThunk(
  'movie/getMovieCredits',
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);
    dispatch(setMovieCreditState(response.cast));
  },
);
export const GetSimilarMoviesState = createAsyncThunk(
  'movie/getSimilarMovies',
  async (id, {dispatch}) => {
    const response = await getSimilarMovies(id);
    dispatch(setSimilarMoviesState(response.results));
  },
);
