import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import 'bootstrap/dist/css/bootstrap.css';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='container'>

      <div className='grid1'>
        <h4>Account Name</h4>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <CopyToClipboard text={me}>
          <button type="button" className="btn btn-primary">COPY YOUR ID</button>
        </CopyToClipboard>
      </div>

      <div className='grid2'>
        <h4>Make a call</h4>
        <input type="text" placeholder='ID to Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
        {callAccepted && !callEnded ? (
          <button type="button" className="btn btn-danger" onClick={leaveCall}>HANG UP</button>
        ) : (
          <button type="button" className="btn btn-success" onClick={() => {callUser(idToCall); console.log('call')}}>CALL</button>
        )}
      </div>
      {children}
    </div>

  );
}

export default Options;
