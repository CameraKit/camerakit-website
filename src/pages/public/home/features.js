import React from 'react';

import IconCapture from './ic_capture.svg';
import IconPermissions from './ic_permissions.svg';
import IconScaling from './ic_scaling.svg';
import IconMethods from './ic_methods.svg';
import IconFocus from './ic_focus.svg';
import IconTouch from './ic_touch.svg';

export default [
  {
    icon: <IconCapture />,
    text: 'Seamless image and video capture',
  }, {
    icon: <IconPermissions />,
    text: 'Auto permission handling',
  }, {
    icon: <IconScaling />,
    text: 'Auto preview scaling',
  }, {
    icon: <IconMethods />,
    text: 'Multiple capture methods',
  }, {
    icon: <IconFocus />,
    text: 'Built-in continuous focus',
  }, {
    icon: <IconTouch />,
    text: 'Built-in tap to focus',
  },
];
