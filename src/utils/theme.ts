const palette = {
  darkBlue: '#08080E',
  orange: '#FF521C',
  purple: '#1E1226',
  gray: '#1E1E29',
  white: '#FFFFFF',
  softWhite: '#FFEEED',
};

export const theme = {
  color: {
    background: palette.darkBlue,
    foreground: palette.purple,
    section: palette.gray,
    text: palette.white,
    button: palette.orange,
    circleButton: palette.white,
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
};
