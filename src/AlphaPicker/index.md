---
title: AlphaPicker 透明度
nav:
  path: /components
group:
  title: AlphaPicker 透明度
---

# AlphaPicker 透明度

---

## 描述

这是一个横向的滑动器，通过拖动代表透明度 0 ～ 1 的值。

---

## 示例:

```tsx
import React, { useState } from 'react';
import { AlphaPicker } from 'react-color-lite';

export default () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <AlphaPicker onChange={(val) => setVal(val)} />
      <div style={{ textAlgin: 'center', margin: '20px 0' }}>透明度：{val}</div>
    </div>
  );
};
```

## 属性：

<API hideTitle></API>
