import React, { useMemo, useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { IAlphaPicker } from './interface';
import './index.less';

const AlphaPicker: React.FC<IAlphaPicker> = (props) => {
  const { defaultValue = 100, onChange } = props;
  const refAlphaPicker = useRef(null);
  const refAlphaSpot = useRef(null);
  const [x, setX] = useState(0);

  const handleDrag = () => {
    const pickerInfo = refAlphaPicker.current.getBoundingClientRect();
    const spotInfo = refAlphaSpot.current.getBoundingClientRect();
    const left = spotInfo.left - pickerInfo.left;
    const width = pickerInfo.width - spotInfo.width;
    const value = (left / width).toFixed(3);
    typeof onChange === 'function' && onChange(value);
  };

  useEffect(() => {
    const { width } = refAlphaPicker.current.getBoundingClientRect();
    const value = width * (defaultValue / 100);
    setX(value);
  }, [defaultValue]);

  return (
    <div ref={refAlphaPicker} className="alpha-picker">
      <Draggable
        axis="x"
        bounds=".alpha-picker"
        // handle='.alpha-picker'
        defaultPosition={{ x: x, y: 0 }}
        position={null}
        // onStart={this.handleStart}
        onDrag={handleDrag}
        // onStop={this.handleStop}
      >
        <div ref={refAlphaSpot} className="color-spot"></div>
      </Draggable>
    </div>
  );
};

export default AlphaPicker;
