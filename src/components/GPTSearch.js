import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="w-full fixed -z-10">
        <img className="w-full h-screen object-cover" src={BG_URL} alt="logo"/>
      </div>
      <div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
      </div>
    </>
  );
};

export default GPTSearch;