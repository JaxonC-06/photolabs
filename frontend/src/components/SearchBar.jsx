// C.Y.O.A. SearchBar
import "../styles/SearchBar.scss"
import searchLogo from "../assets/search-svgrepo-com.svg";
import { ACTIONS } from "../hooks/useApplicationData";

const SearchBar = (props) => {
  const { searchValue, searchResults, dispatch, photos } = props;

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_SEARCH_DATA, payload: e.target.value });
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(searchResults)
      dispatch({ type:ACTIONS.SET_PHOTO_DATA, payload: searchResults });
    }
  }

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <img src={searchLogo} alt="looking-glass" className="search-bar__search-icon" />
        <input 
          type="text"
          className="search-bar__search-input"
          placeholder="Search photos..."
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default SearchBar;