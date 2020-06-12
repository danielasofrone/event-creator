/* eslint-disable id-length */
import { css } from "styled-components";

export const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const colors = {
  button: "#21cf83"
};

export const fonts = {
  primary: " 'Hind', sans-serif;"
};

export const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/iu.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "";
};

export const px2rem = pxl => `${pxl / 16}rem`;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const theme = {
  name: "Eventio",
  sizes,
  colors,
  media,
  mediaMax,
  fonts,
  px2rem,
  hexToRgb
};
