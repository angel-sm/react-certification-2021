const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobile_small: `(min-width: ${size.mobileS})`,
  mobile_middle: `(min-width: ${size.mobileM})`,
  mobile_large: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptop_large: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktop_large: `(min-width: ${size.desktop})`,
};
