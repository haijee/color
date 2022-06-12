---
title: InputPicker 颜色输入
nav:
  path: /components
group:
  title: InputPicker 颜色输入
---

## InputPicker

---

## 描述

该组件用于手动输入 HSV，HSL，RGB 色值

---

## 示例:

```tsx
import React, { useState, useEffect } from 'react';
import { InputPicker } from 'react-color-lite';
import tinycolor from 'tinycolor2';

export default (props) => {
  const { defaultColor = '#1AE868' } = props;
  const [color, setColor] = useState({});
  const [type, setType] = useState('RGB');
  const onSelect = (event) => {
    const val = event.target.value;
    setType(val);
  };
  useEffect(() => {
    const instance = tinycolor(defaultColor);
    if (instance.isValid()) {
      const result = {
        hex: instance.toHex(),
        hsv: instance.toHsv(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      };
      setColor(result);
    }
  }, [defaultColor]);
  return (
    <div className="wrapper">
      <select onChange={onSelect}>
        <option>RGB</option>
        <option>HSV</option>
        <option>HSL</option>
      </select>
      <InputPicker color={color} type={type} onChange={setColor} />
    </div>
  );
};
```

## 属性：

<API hideTitle></API>
