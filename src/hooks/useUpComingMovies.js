import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTION_API } from "../utils/constant";
import { addUpComingMovies} from "../utils/moviesSlice";

const useUpComingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.topRatedMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
   'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      OPTION_API
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;