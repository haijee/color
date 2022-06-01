import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';

const HexPicker = ({ hex, onChange = () => {} }) => {
  const [val, setVal] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setVal(value);
    const instance = tinycolor(value);
    if (instance.isValid()) {
      onChange({
        hex: value,
        hsv: instance.toHsv(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    }
  };
  useEffect(() => {
    setVal(hex);
  }, [hex]);
  return <input type="text" value={val} onChange={handleChange} />;
};

export default HexPicker;
