import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );  
  }
}

const useAppData = () => {
  const initialState = {
    favorites: [],
    modal: false,
    selectedPhoto: null,
    photoData: [],
    topicData: []
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
    toggleFavorite
  }
}

export default useAppData;