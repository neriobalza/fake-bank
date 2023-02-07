const palette = {
  darkBlue: '#08080E',
  orange: '#FF521C',
  purple: '#1E1226',
  gray: '#1E1E29',
  white: '#f0f0f0',
};

export const theme = {
  color: {
    background: palette.white,
    foreground: palette.purple,
    section: palette.gray,
    text: palette.darkBlue,
    button: palette.orange,
    circleButton: palette.white,
    white: palette.white,
    fadedText: 'rgba(8, 8, 14, 0.5)',
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
    text: palette.white,
    fadedText: 'rgba(240,240,240, 0.5)',
  },
  statusBar: {
    background: palette.darkBlue,
    dark: true,
  },
};
