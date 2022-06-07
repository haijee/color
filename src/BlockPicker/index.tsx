import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { IBlockPicker } from './interface';

import './index.less';

const BlockPicker: React.FC<IBlockPicker> = (props) => {
  const { color = '#194D33', alpha = 1 } = props;
  const [rgba, setRgba] = useState({});
  useEffect(() => {
    const instance = tinycolor.fromRatio(color);
    const { r, g, b } = instance?.toRgb();
    setRgba(`rgba(${r},${g},${b},${alpha})`);
  }, [color, alpha]);
  return <div className="block-picker" style={{ background: rgba }}></div>;
};

export default BlockPicker;
