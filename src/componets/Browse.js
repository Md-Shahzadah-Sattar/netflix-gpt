import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainers";
import SecondaryContainer from "./SecondaryContainers";


const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
