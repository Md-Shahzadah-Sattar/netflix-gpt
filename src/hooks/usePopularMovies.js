import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTION_API } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?page=1",
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      OPTION_API
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;