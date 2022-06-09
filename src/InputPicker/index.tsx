import React, { useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';

import './index.less';

const InputPicker = (props) => {
  const { color, type, onChange } = props;
  const [abc, setAbc] = useState({});

  const colorToAbc = (color, type) => {
    if (type === 'RGB') {
      const rgb = color?.rgb;
      return {
        a: rgb?.r,
        b: rgb?.g,
        c: rgb?.b,
      };
    } else if (type === 'HSV') {
      const hsv = color?.hsv;
      return {
        a: hsv?.h.toFixed(),
        b: (hsv?.s * 100).toFixed(),
        c: (hsv?.v * 100).toFixed(),
      };
    } else if (type === 'HSL') {
      const hsl = color?.hsl;
      return {
        a: hsl?.h.toFixed(),
        b: (hsl?.s * 100).toFixed(),
        c: (hsl?.l * 100).toFixed(),
      };
    }
    return {};
  };
  const abcToColor = (abc, type) => {
    if (type === 'RGB') {
      return {
        r: abc.a,
        g: abc.b,
        b: abc.c,
      };
    } else if (type === 'HSV') {
      return {
        h: abc.a,
        s: abc.b / 100,
        v: abc.c / 100,
      };
    } else if (type === 'HSL') {
      return {
        h: abc.a,
        s: abc.b / 100,
        l: abc.c / 100,
      };
    }
    return {};
  };
  const handleChange = (event, key) => {
    const val = event.target.value;
    const _abc = {
      ...abc,
      [key]: val,
    };
    setAbc(_abc);
    const params = abcToColor(_abc, type);
    const instance = tinycolor(params);
    if (instance.isValid()) {
      onChange({
        hex: instance.toHex(),
        hsv: instance.toHsv(),
        hsl: instance.toHsl(),
        rgb: instance.toRgb(),
      });
    }
  };

  useEffect(() => {
    const result = colorToAbc(color, type);
    setAbc(result);
  }, [color, type]);

  return (
    <div className="input-picker">
      <input type="text" onChange={(e) => handleChange(e, 'a')} value={abc.a} />
      <input type="text" onChange={(e) => handleChange(e, 'b')} value={abc.b} />
      <input type="text" onChange={(e) => handleChange(e, 'c')} value={abc.c} />
    </div>
  );
};

export default InputPicker;
