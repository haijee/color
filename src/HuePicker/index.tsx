import React, { useEffect, useMemo, useRef } from 'react';
import tinycolor from 'tinycolor2';

import useDrag from '../hooks/useDrag';
import { IHuePicker } from './interface';

import './index.less';

const HuePicker: React.FC<IHuePicker> = (props) => {
  const { hsv = { h: 100, s: 100, v: 100 }, onChange = () => {} } = props;
  const { h } = hsv as any;
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const x: any = h;
  const n: number = 360;
  const { dragInfo, onMouseDown } = useDrag({ x, n, targetRef, containerRef });

  const memoStyle = useMemo(() => {
    if (containerRef?.current && targetRef?.current) {
      const { width } = containerRef?.current?.getBoundingClientRect();
      const targetInfo = targetRef?.current?.getBoundingClientRect();
      const result: number = dragInfo.x / (width - targetInfo.width);
      return { left: `calc(${(result * 100).toFixed(2)}% - ${targetInfo.width * result}px )` };
    }
    return { left: dragInfo.x };
  }, [dragInfo]);

  useEffect(() => {
    const { width } = containerRef?.current?.getBoundingClientRect();
    const targetInfo = targetRef?.current?.getBoundingClientRect();
    const hVal: number = (dragInfo.x / (width - targetInfo.width)) * 360;
    const newHsv: any = { ...hsv, h: hVal };
    const instance = tinycolor(newHsv);
    if (instance.isValid()) {
      onChange({
        hsv: { ...hsv, h: hVal },
        hex: instance.toHex(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    }
  }, [dragInfo]);

  return (
    <div ref={containerRef} className="hue-picker">
      <div ref={targetRef} className="color-spot" onMouseDown={onMouseDown} style={memoStyle} />
    </div>
  );
};

export default HuePicker;
