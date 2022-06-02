import React, { useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import tinycolor from 'tinycolor2';

import './index.less';

const PalettePicker = ({ hsv = { h: 0.7, s: 0.7, v: 0.6 }, onChange = () => {} }) => {
  const refPalettePicker = useRef(null);
  const refPaletteSpot = useRef(null);
  const [domInfo, setDomInfo] = useState({});

  const rgbMemo = useMemo(() => {
    const instance = tinycolor({ h: hsv?.h, s: 100, v: 100 });
    if (instance.isValid()) {
      const { r, g, b } = instance?.toRgb();
      return `rgb(${r},${g},${b})`;
    }
    return '';
  }, [hsv]);

  const onMouseDown = (event) => {
    const { width, height, left, top } = domInfo;
    let x = event.clientX - left;
    let y = top + height - event.clientY;
    // 限制在色板内
    if (x < -5) {
      x = 0;
    }
    if (x > width) {
      x = width;
    }
    if (y < -5) {
      y = 0;
    }
    if (y > height) {
      y = height;
    }
    const s = x / width;
    const v = y / height;

    const instance = tinycolor({ ...hsv, s, v });
    if (instance.isValid()) {
      onChange({
        hsv: { ...hsv, s, v },
        hex: instance.toHex(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    }
  };
  const xyMemo = useMemo(() => {
    const { width, height } = domInfo;
    const x = width * hsv.s;
    const y = -height * hsv.v;
    return { x, y };
  }, [hsv, domInfo]);

  useEffect(() => {
    const domInfo = refPalettePicker.current.getBoundingClientRect();
    setDomInfo(domInfo);
  }, []);

  return (
    <div ref={refPalettePicker} className="palette-picker" style={{ background: rgbMemo }}>
      <div className="palette-white">
        <div className="palette-black" onMouseDown={onMouseDown}>
          <Draggable
            // bounds=".palette-picker"
            // handle='.alpha-picker'
            defaultPosition={{ x: 0, y: 0 }}
            position={xyMemo}
            // onStart={onMouseDown}
            onDrag={onMouseDown}
            // onStop={this.handleStop}
          >
            <div ref={refPaletteSpot} className="color-spot"></div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default PalettePicker;
