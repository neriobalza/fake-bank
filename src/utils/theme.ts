const palette = {
  darkBlue: '#08080E',
  softWhite: '#f0f0f0',
  fadedDarkBlue: 'rgba(8, 8, 14, 0.5)',
  fadedSoftWhite: 'rgba(240,240,240, 0.5)',
  gray: '#1E1E29',
  white: '#ffffff',
  black: '#000000',
  orange: '#FF521C',
  purple: '#1E1226',
  red: '#C5626E',
  green: '#439E41',
  blue: '#5D70A1',
};

export const theme = {
  color: {
    background: palette.softWhite,
    foreground: palette.white,
    white: palette.white,
    black: palette.black,
    purple: palette.purple,
    text: palette.darkBlue,
    fadedText: palette.fadedDarkBlue,
    blue: palette.blue,
    button: palette.orange,
    circleButton: palette.white,
  },
  statusBar: {
    background: palette.white,
    dark: false,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};

export const darkTheme = {
  ...theme,
  color: {
    ...theme.color,
    background: palette.darkBlue,
    foreground: palette.gray,
    text: palette.white,
    fadedText: palette.fadedSoftWhite,
    circleButton: palette.gray,
  },
  statusBar: {
    background: palette.gray,
    dark: true,
  },
};
