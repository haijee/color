import React, { useEffect, useMemo, useRef } from 'react';
import useDrag from '../hooks/useDrag';
import { IAlphaPicker } from './interface';

import './index.less';

const AlphaPicker: React.FC<IAlphaPicker> = (props) => {
  const { defaultValue = 100, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const x: any = defaultValue;
  const { dragInfo, onMouseDown } = useDrag({ x, targetRef, containerRef });

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
    const result: number = dragInfo.x / (width - targetInfo.width);
    onChange(result.toFixed(2));
  }, [dragInfo]);

  return (
    <div ref={containerRef} className="alpha-picker">
      <div ref={targetRef} style={memoStyle} onMouseDown={onMouseDown} className="color-spot" />
    </div>
  );
};

export default AlphaPicker;
