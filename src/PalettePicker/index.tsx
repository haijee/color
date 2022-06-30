import React, { useEffect, useMemo, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';
import useDrag from '../hooks/useDrag';

import { IPalettePicker } from './interface';
import './index.less';

const PalettePicker: React.FC<IPalettePicker> = (props: any) => {
  const { hsv = { h: 0.7, s: 0.7, v: 0.6 }, onChange } = props;
  const { h, s, v } = hsv;
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { dragInfo, onMouseDown } = useDrag({});

  const rgbMemo = useMemo(() => {
    const instance = tinycolor({ h, s: 100, v: 100 });
    if (instance.isValid()) {
      const { r, g, b } = instance?.toRgb();
      return `rgb(${r},${g},${b})`;
    }
    return '';
  }, [hsv.h]);

  const styleMemo = useMemo(() => {
    if (containerRef?.current && targetRef?.current) {
      const { width, height } = containerRef?.current?.getBoundingClientRect();
      const targetInfo = targetRef?.current?.getBoundingClientRect();
      const left: number = (dragInfo.x / (width + targetInfo.width)) * 100 + '%';
      const top: number = (dragInfo.y / (height + targetInfo.height)) * 100 + '%';
      return { left, top };
    }
    return { left: dragInfo.x, top: dragInfo.x };
  }, [dragInfo]);

  useEffect(() => {}, [dragInfo]);

  return (
    <div ref={containerRef} className="palette-picker" style={{ background: rgbMemo }}>
      <div className="palette-white">
        <div className="palette-black">
          <div ref={targetRef} style={styleMemo} className="color-spot" onMouseDown={onMouseDown} />
        </div>
      </div>
    </div>
  );
};

export default PalettePicker;
