import React from 'react';

import IconSimple from './ic_simple.svg';
import IconTested from './ic_tested.svg';
import IconDualCam from './ic_dual_cam.svg';
import IconVR from './ic_vr_addons.svg';

export default [
  {
    icon: <IconSimple />,
    text: 'Easy Implementation',
    description: 'CameraKit fits into your existing stack and can be run up almost immediately. Implement the library and start improving reliability immediately.'
  },
  {
    icon: <IconTested />,
    text: 'Extensively Tested',
    description: 'CameraKit has been tested across thousands of Android devices, major Android OS versions, and is ready for upcoming flagship Android device releases.'
  },
  {
    icon: <IconDualCam />,
    text: 'All Camera Features',
    description: 'CameraKit supports all camera features, including seamless photo and video capture, auto permission handling, continuous and tap focus, scaling, and more.'
  },
  {
    icon: <IconVR />,
    text: 'Camera 1 and 2',
    description: 'CameraKit supports and improves, hooking in the library in minutes, Camera 1 and 2 APIs while drastically improving stability and reliability for your app.'
  },
];
