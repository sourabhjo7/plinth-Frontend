import React, { useState } from 'react';
import './FlashMessage.css'
const FlashMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <>
    <div className="flash-message">
        {message}
    </div>
      <button onClick={() => setVisible(false)}>Dismiss</button>
    </>
  );
};

export default FlashMessage;