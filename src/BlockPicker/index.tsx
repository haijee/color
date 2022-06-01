import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';

import './index.less';

const BlockPicker = ({ hsv, alpha }) => {
  const [rgba, setRgba] = useState({});
  useEffect(() => {
    const instance = tinycolor.fromRatio(hsv);
    const { r, g, b } = instance?.toRgb();
    setRgba(`rgba(${r},${g},${b},${alpha})`);
  }, [hsv, alpha]);
  return <div className="block-picker" style={{ background: rgba }}></div>;
};

export default BlockPicker;
