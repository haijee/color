import React, { useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';

import './index.less';

const InputPicker = (props: any) => {
  const { color, type, onChange } = props;
  const [abc, setAbc] = useState<any>({});

  const colorToAbc = (color: any, type: string) => {
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
  const abcToColor = (abc: any, type: string) => {
    const { a = 0, b = 0, c = 0 } = abc;
    if (type === 'RGB') {
      return {
        r: a,
        g: b,
        b: c,
      };
    } else if (type === 'HSV') {
      return {
        h: a,
        s: b / 100,
        v: c / 100,
      };
    } else if (type === 'HSL') {
      return {
        h: a,
        s: b / 100,
        l: c / 100,
      };
    }
    return {};
  };
  const handleChange = (event: any, key: any) => {
    const val = event.target.value;
    const _abc: any = {
      ...abc,
      [key]: val,
    };
    setAbc(_abc);
    const params: any = abcToColor(_abc, type);
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
