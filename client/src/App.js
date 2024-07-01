import React from 'react';
// import { Typography, AppBar} from '@mui/material';
// import { makeStyles } from '@mui/material/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notifications';



const App = () => {

  return (
    <div >
      <div className="wrapper">
        <div className="appBar">Video Call</div>
      </div>

      <div className='videoplayer'>
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
      </div>
    </div>
  );
}

export default App;
