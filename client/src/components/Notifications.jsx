import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';
const Notification = () => {
  const { answerCall, call, callAccepted ,name} = useContext(SocketContext);

  return (
    
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{name} is calling:</h1>
          <button className="btn btn-primary" onClick={answerCall} >Answer
          </button>
        </div>
       )}  
    </>
  );
}

export default Notification;
