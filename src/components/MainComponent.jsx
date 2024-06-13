import { useState } from 'react'
import PopupRegistration from './PopupRegistration';

const MainComponent = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div className="main-component">
        <h1>Welcome to the Main Component</h1>
        <button onClick={openPopup}>Open Registration</button>
        {isPopupOpen && <PopupRegistration onClose={closePopup} />}
      </div>
    );
  };
  
  export default MainComponent;