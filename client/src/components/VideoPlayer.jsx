import React,{useContext} from 'react';
import { SocketContext } from '../SocketContext';
import '../index.css';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    //me
    <div className='grid'>
      {stream && (
      <div className='paper2'>
        <div className='item'>
          <div className='name'>{name || 'Name'}</div>
        </div>
        <video playsInline muted ref={myVideo} autoPlay className='video' />
      </div>
      )}
      {/* user */}
      {callAccepted && !callEnded && (
      <div className='paper1'>
        <div className='item'>
          <div className='name'>{call.name || 'Name'}</div>
        </div>
        <video playsInline ref={userVideo} autoPlay className='video' />
      </div>
      )}
    </div>
  );
}

export default VideoPlayer;
