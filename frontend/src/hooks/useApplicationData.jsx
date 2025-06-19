import { useState } from "react";

/* 
Return object with four keys representing:
- The state of the application
- toggleFavorite action to set favorite photos
- setSelectedPhoto action for when user selects photo
- onClose action to close the modal
*/

const useAppData = () => {
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModal(true)
  };

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId]
      }
    });
  };

  return {
    favorites,
    modal,
    setModal,
    selectedPhoto,
    handlePhotoClick,
    toggleFavorite
  }
}

export default useAppData;