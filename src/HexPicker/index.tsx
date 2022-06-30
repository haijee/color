import React from 'react';
import tinycolor from 'tinycolor2';

import { IHexPicker } from './interface';

const HexPicker: React.FC<IHexPicker> = (props: any) => {
  const { color = {}, onChange } = props;
  const { hex } = color;
  const handleChange = (event: any) => {
    const value = event.target.value;
    const instance = tinycolor(value);
    if (instance.isValid()) {
      onChange({
        hex: value,
        hsv: instance.toHsv(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    } else {
      onChange({
        ...color,
        hex: value,
      });
    }
  };

  return <input type="text" value={hex} onChange={handleChange} />;
};

export default HexPicker;
