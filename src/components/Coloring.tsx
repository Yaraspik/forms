import { useState } from "react";

const convertToRGB = function (hex: string) {
  if (hex.length !== 7) return "";
  hex = hex.replace("#", "");
  const aRgbHex = hex.match(/.{1,2}/g);

  if (aRgbHex) {
    const aRgb = {
      r: parseInt(aRgbHex[0], 16),
      g: parseInt(aRgbHex[1], 16),
      b: parseInt(aRgbHex[2], 16),
    };
    return `rgb(${aRgb.r}, ${aRgb.g}, ${aRgb.b})`;
  }

  return '';
};

const getHexadecimalColors = (str: string) => {
  const hexColor = /#([a-f0-9]{6})\b/gi;
  return str.match(hexColor);
};

const Coloring = (): JSX.Element => {
  const [color, setColor] = useState({
    hex: "#",
    rgb: "",
  });

  const onChange = ({ target: { name, value } }: {target: {name: string, value: string}}): void => {
    if (value.length > 7) return;
    let rgb = convertToRGB(value);

    if (value.length === 7) {
      const valide = getHexadecimalColors(value);
      if (!valide) {
        rgb = "Ошибка!";
      }
    }

    setColor({
      ...color,
      [name]: "#" + value.replace("#", ""),
      rgb,
    });
  };

  return (
    <>
      <div className="coloring" style={{ backgroundColor: color.rgb }}>
        <input value={color.hex} id="hex" name="hex" onChange={onChange} />
        <p id="rgb">{color.rgb}</p>
      </div>
    </>
  );
};

export default Coloring;
