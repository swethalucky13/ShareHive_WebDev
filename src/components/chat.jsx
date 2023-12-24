import React from 'react';
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import { useEffect, useState } from 'react';
import { app_id, app_secret } from './constants';

const id = Math.floor(Math.random() * 1000);

function ChatRoom() {
  const [state, setState] = useState({
    appConfig: {
      appID: app_id, 
      serverSecret: app_secret, 
    },
    
    userInfo: {
      userID: `User${id}`,
      
      userName: `User${id}`,
      
      userAvatarUrl: '',
    },
    error: null,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const zimKit = new ZIMKitManager();
        const token = zimKit.generateKitTokenForTest(
          state.appConfig.appID,
          state.appConfig.serverSecret,
          state.userInfo.userID
        );
        await zimKit.init(state.appConfig.appID);

        
        await zimKit.connectUser(state.userInfo, token).catch((error) => {
          console.error('Error occurred during connection:', error);
          setState({ ...state, error: 'Error occurred during connection' });
        });
      } catch (error) {
        console.error('Error occurred during initialization:', error);
        setState({ ...state, error: 'Error occurred during initialization' });
      }
    };

    init().catch(handleErrors);
  }, [state]);

  const handleErrors = (error) => {
    console.error('Unhandled promise rejection:', error);
    setState({ ...state, error: 'Unhandled promise rejection' });
  };

  return (

    <div className="App" style={{ 
      backgroundColor: '#f0f0f0', 
      color: '#333', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '5px', 
      textAlign: 'center' 
  }}>
      Welcome Home {state.userInfo.userID}
      <Common></Common>
      {state.error && <div style={{ color: 'red' }}>Error: {state.error}</div>}
  </div>
  
  );
}

export default ChatRoom;


