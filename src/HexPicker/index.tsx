import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { IHexPicker } from './interface';

const HexPicker: React.FC<IHexPicker> = (props) => {
  const { color, onChange } = props;
  const handleChange = (event) => {
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

  return <input type="text" value={color?.hex} onChange={handleChange} />;
};

export default HexPicker;
