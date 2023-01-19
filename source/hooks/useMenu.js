import { useState } from 'react';

const useMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuHandler = () => setIsVisible(!isVisible);
//RETORNAR O QUE VAI USAR
  return [isVisible, toggleMenuHandler];
};

export default useMenu;