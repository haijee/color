import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PalettePicker, HuePicker, AlphaPicker, BlockPicker } from 'react-color-lite';
import tinycolor from 'tinycolor2';
import './index.less';

const PalettePickerGroup = ({ defaultColor = '#1AE868', onChangeColor = () => {} }) => {
  const [color, setColor] = useState({});
  const [alpha, setAlpha] = useState(1);
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
      console.log('---isValid---', result);
      // onChange(result)
    }
  }, [defaultColor]);

  return (
    <div className="palette-picker-group">
      <PalettePicker hsv={color?.hsv} onChange={setColor} />
      <HuePicker hsv={color?.hsv} onChange={setColor} />
      <AlphaPicker defaultValue={80} onChange={setAlpha} />
      <BlockPicker alpha={alpha} hsv={color?.hsv} />
    </div>
  );
};

export default PalettePickerGroup;
