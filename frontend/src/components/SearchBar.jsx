// C.Y.O.A. SearchBar
import "../styles/SearchBar.scss"
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
      <input 
        type="text"
        placeholder="Search photos..."
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default SearchBar;