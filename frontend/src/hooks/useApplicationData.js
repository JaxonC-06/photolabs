import { useReducer } from "react";

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
      return [...state, action.payload.id];
    
    case ACTIONS.FAV_PHOTO_REMOVED:
      return state.filter(id => id !== action.payload.id);

    case ACTIONS.SELECT_PHOTO:
      return action.payload;
      
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return action.payload;  

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );  
  }
}

const useAppData = () => {
  const [favorites, dispatchFavorites] = useReducer(reducer, []);
  const [modal, dispatchModal] = useReducer(reducer, false);
  const [selectedPhoto, dispatchSelectedPhoto] = useReducer(reducer, null);

  const handlePhotoClick = (photo) => {
    dispatchSelectedPhoto({
      type: ACTIONS.SELECT_PHOTO,
      payload: photo,
    });

    dispatchModal({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: true
    })
  };

  const toggleFavorite = (photoId) => {
    dispatchFavorites({
      type: favorites.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: { id: photoId },
    });
  };

  return {
    favorites,
    modal,
    dispatchModal,
    selectedPhoto,
    handlePhotoClick,
    toggleFavorite
  }
}

export default useAppData;