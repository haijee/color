import React from 'react';
import './index.less';

const BlockPicker = ({ color = '#194D33', alpha = 100 }) => {
  return <div className="block-picker" style={{ background: color, opacity: alpha / 100 }}></div>;
};

export default BlockPicker;
