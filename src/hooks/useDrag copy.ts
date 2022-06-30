import { useEffect, useRef, useState } from 'react';

export interface DragOptions {
  x?: number;
  y?: number;
  n?: number;
  targetRef?: any;
  containerRef?: any;
  onDrag?: Function;
}

const useDrag = (props: DragOptions) => {
  const { n = 100, x = 0, y = 0, targetRef, containerRef } = props;
  const currentRef: any = useRef();
  const [dragInfo, setDragInfo] = useState({ x, y });

  // 鼠标移动 计算宽高并更新元素style
  const onMouseMove = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    const { clientY, clientX } = event;
    let y = clientY - currentRef.current.y + dragInfo.y;
    let x = clientX - currentRef.current.x + dragInfo.x;
    // 限制拖动范围
    if (targetRef.current && containerRef.current) {
      if (x <= 0) {
        x = 0;
      }
      if (y <= 0) {
        y = 0;
      }
      const { width, height } = targetRef.current.getBoundingClientRect();
      const containerInfo = containerRef.current.getBoundingClientRect();
      if (containerInfo.width - width - x <= 0) {
        x = containerInfo.width - width;
      }
      if (containerInfo.height - height - y <= 0) {
        y = containerInfo.height - height;
      }
    }
    setDragInfo({ x, y });
  };

  // 鼠标按下
  const onMouseDown = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    const { clientY, clientX } = event;
    currentRef.current = { x: clientX, y: clientY };
    bindEvents();
  };

  // 鼠标释放后解绑事件
  const onMouseUp = () => {
    unbindEvents();
  };

  const bindEvents = () => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseUp);
  };
  const unbindEvents = () => {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseleave', onMouseUp);
  };

  useEffect(() => {
    const { width, height } = targetRef.current.getBoundingClientRect();
    const containerInfo = containerRef.current.getBoundingClientRect();
    const newX = (x / n) * (containerInfo.width - width);
    const newY = (y / n) * (containerInfo.height - height);
    setDragInfo({
      x: newX,
      y: newY,
    });
    return () => {
      unbindEvents();
    };
  }, []);

  return { onMouseDown, dragInfo, onDrag: onMouseMove };
};

export default useDrag;
