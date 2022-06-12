import React, { useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import tinycolor from 'tinycolor2';

import './index.less';

const HuePicker = (props: any) => {
  const { hsv, onChange = () => {} } = props;
  const [domInfo, setDomInfo] = useState<any>({});
  const refHuePicker = useRef<any>(null);
  const refHueSpot = useRef<any>(null);
  const onMouseDown = (event: any) => {
    const { width, height, left, top } = refHuePicker.current.getBoundingClientRect();
    let x = event.clientX - left;
    // 限制在色板内
    if (x < 0) {
      x = 0;
    }
    if (x > width - 10) {
      x = width - 10;
    }
    const h = (x / (width - 10)) * 360;
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
  const xMemo = useMemo(() => {
    const { width } = domInfo;
    return (hsv?.h / 360) * (width - 10);
  }, [domInfo, hsv]);

  useEffect(() => {
    const info = refHuePicker.current.getBoundingClientRect();
    setDomInfo(info);
  }, [hsv]);

  return (
    <div ref={refHuePicker} className="hue-picker" onMouseDown={onMouseDown}>
      <Draggable
        axis="x"
        bounds=".hue-picker"
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: xMemo, y: 0 }}
        onDrag={onMouseDown}
      >
        <div ref={refHueSpot} className="color-spot"></div>
      </Draggable>
    </div>
  );
};

export default HuePicker;
