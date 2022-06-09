import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  PalettePicker,
  HuePicker,
  AlphaPicker,
  BlockPicker,
  HexPicker,
  InputPicker,
} from 'react-color-lite';
import tinycolor from 'tinycolor2';
import './index.less';

const PalettePickerGroup = ({ defaultColor = '#1AE868', onChangeColor = () => {} }) => {
  const [color, setColor] = useState({});
  const [alpha, setAlpha] = useState(1);
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
    <div className="palette-picker-group">
      <PalettePicker hsv={color?.hsv} onChange={setColor} />

      <div className="wrapper">
        <div className="hue-alpha">
          <HuePicker hsv={color?.hsv} onChange={setColor} />
          <AlphaPicker defaultValue={80} onChange={setAlpha} />
        </div>
        <BlockPicker alpha={alpha} color={color} />
      </div>

      <div className="wrapper">
        <HexPicker color={color} onChange={setColor} />
        <select onChange={onSelect}>
          <option>RGB</option>
          <option>HSV</option>
          <option>HSL</option>
        </select>
        <InputPicker color={color} type={type} onChange={setColor} />
      </div>
    </div>
  );
};

export default PalettePickerGroup;
