import React from 'react';
// import { MdCallEnd, MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdVideoLabel, MdCamera } from 'react-icons/md';
import ConversationButton from './ConversationButton';
import {
  switchForScreenSharingStream,
  hangUp,
} from '../../../utils/webRTC/webRTCHandler';

const styles = {
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: '22%',
    left: '35%',
  },
  icon: {
    width: '25px',
    height: '25px',
    fill: '#e6e5e8',
  },
};

const ConversationButtons = props => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    setMicrophoneEnabled,
    screenSharingActive,
    groupCall,
  } = props;

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div style={styles.buttonContainer}>
      <ConversationButton onClickHandler={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <i className="fas fa-microphone" style={styles.icon} />
        ) : (
          <i className="fas fa-microphone-slash" style={styles.icon} />
        )}
      </ConversationButton>
      {!groupCall && (
        <ConversationButton onClickHandler={handleHangUpButtonPressed}>
          <i className="fas fa-phone-slash" style={styles.icon} />
        </ConversationButton>
      )}
      <ConversationButton onClickHandler={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <i className="fas fa-video" style={styles.icon} />
        ) : (
          <i className="fas fa-video-slash" style={styles.icon} />
        )}
      </ConversationButton>
      {!groupCall && (
        <ConversationButton onClickHandler={handleScreenSharingButtonPressed}>
          {screenSharingActive ? (
            <i className="fas fa-camera" style={styles.icon} />
          ) : (
            <i className="fas fa-share-square" style={styles.icon} />
          )}
        </ConversationButton>
      )}
    </div>
  );
};

export default ConversationButtons;
