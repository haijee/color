import React, { useMemo, useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { IAlphaPicker } from './interface';
import './index.less';

const AlphaPicker: React.FC<IAlphaPicker> = (props) => {
  const { defaultValue = 100, onChange } = props;
  const refAlphaPicker = useRef<HTMLDivElement>(null);
  const refAlphaSpot = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  const handleDrag = () => {
    const pickerInfo: any = refAlphaPicker?.current?.getBoundingClientRect();
    const spotInfo: any = refAlphaSpot?.current?.getBoundingClientRect();
    const left: any = spotInfo?.left - pickerInfo?.left;
    const width: any = pickerInfo?.width - spotInfo?.width;
    setX(left);
    const value: any = (left / width).toFixed(3);
    typeof onChange === 'function' && onChange(value);
  };

  useEffect(() => {
    const { width = 0 }: { width: any } = refAlphaPicker.current?.getBoundingClientRect();
    const value: number = width * (Number(defaultValue) / 100);
    setX(value);
  }, [defaultValue]);

  return (
    <div ref={refAlphaPicker} className="alpha-picker">
      <Draggable
        axis="x"
        bounds=".alpha-picker"
        // handle='.alpha-picker'
        defaultPosition={{ x, y: 0 }}
        position={{ x, y: 0 }}
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
