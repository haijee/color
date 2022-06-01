import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import tinycolor from 'tinycolor2';

import './index.less';

const HuePicker = ({ hsv, onChange = () => {} }) => {
  const refHuePicker = useRef(null);
  const refHueSpot = useRef(null);
  const [x, setX] = useState(0);
  const handleDrag = () => {
    const pickerInfo = refHuePicker.current.getBoundingClientRect();
    const spotInfo = refHueSpot.current.getBoundingClientRect();
    const left = spotInfo.left - pickerInfo.left;
    const width = pickerInfo.width - spotInfo.width;
    const h = left / width;
    const instance = tinycolor({ ...hsv, h });
    if (instance.isValid()) {
      onChange({
        hsv: { ...hsv, h },
        hex: instance.toHex(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    }
  };

  useEffect(() => {
    // console.log(props)
    const { width } = refHuePicker.current.getBoundingClientRect();
    const value = width * (hsv?.h / 360);
    setX(value);
  }, [hsv]);

  return (
    <div ref={refHuePicker} className="hue-picker">
      <Draggable
        axis="x"
        bounds=".hue-picker"
        // handle='.alpha-picker'
        defaultPosition={{ x: x, y: 0 }}
        position={null}
        // onStart={this.handleStart}
        onDrag={handleDrag}
        // onStop={this.handleStop}
      >
        <div ref={refHueSpot} className="color-spot"></div>
      </Draggable>
    </div>
  );
};

export default HuePicker;
