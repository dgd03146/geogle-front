import React from 'react';

const SubmitButton = ({ handleSubmitButtonPressed, username }) => {
  return (
    <div className="login-page_button_container">
      {username && (
        <button
          className="login-page_button background_main_color text_main_color"
          onClick={username && handleSubmitButtonPressed}
        >
          Start Video
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
