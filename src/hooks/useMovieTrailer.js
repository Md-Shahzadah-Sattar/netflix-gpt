import { useDispatch } from "react-redux";
import { OPTION_API } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

        const dispatch = useDispatch();

        const getMoviesVideo = async () => {
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            OPTION_API
          );
          const json = await data.json();
          // console.log(json);
      
          const filteredData = json.results.filter(
            (video) => video.type == "Trailer"
          );
          const Trailer = filteredData.length ? filteredData[0] : json.results;
          // console.log(Trailer);
      
          dispatch(addTrailerVideo(Trailer));
        };
      
        useEffect(() => {
          getMoviesVideo();
        }, []);
}

export default useMovieTrailer;