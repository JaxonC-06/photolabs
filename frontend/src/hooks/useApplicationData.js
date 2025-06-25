import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
  SET_SEARCH_DATA: 'SET_SEARCH_DATA'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favorites: [...state.favorites, action.payload.id]};
    
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorites: state.favorites.filter(id => id !== action.payload.id)};

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
      
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, modal: action.payload };  

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload};

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };

    case ACTIONS.SET_SEARCH_DATA:
      return { ...state, searchValue: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );  
  }
}

// Add searchValue, searchSuggestions for searchBar
const useAppData = () => {
  const initialState = {
    favorites: [],
    modal: false,
    selectedPhoto: null,
    photoData: [],
    topicData: [],
    searchValue: '',
    searchResults: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  // Suggestions for searches

  // Add useEffect hook to track searchBar
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch(`/api/photos/search?searchValue=${encodeURIComponent(state.searchValue)}`);
        if (!response.ok) {
          console.log('Network response was not ok. Status: ', response);
        }
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_SEARCH_RESULTS, payload: data });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (state.searchValue) {
      fetchSearchData();
    }
  }, [state.searchValue]);

  const handleTopicClick = (topic_id) => {
    fetch(`/api/topics/${topic_id}/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch((error) => console.error('Error fetching photos:', error))
  };

  const handlePhotoClick = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: photo,
    });

    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: true
    })
  };

  const toggleFavorite = (photoId) => {
    dispatch({
      type: state.favorites.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: { id: photoId },
    });
  };

  return {
    state,
    dispatch,
    handlePhotoClick,
    handleTopicClick,
    toggleFavorite
  }
}

export default useAppData;