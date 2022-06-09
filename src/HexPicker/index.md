---
title: HexPicker 色值
nav:
  path: /components
group:
  title: HexPicker 色值
---

# HexPicker 色值

---

## 描述

这是一个 HEX（16 进制）颜色值的输入框组件

---

## 示例:

```tsx
import React, { useState } from 'react';
import { HexPicker } from 'react-color-lite';

export default () => {
  const [color, setColor] = useState({ hex: '199222' });
  return <HexPicker color={color} onChange={setColor} />;
};
```

## 属性：

<API hideTitle></API>
