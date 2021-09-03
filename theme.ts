import { createCss } from '@stitches/react'

export const Colors = {
  highContrast: 'white',
  mediumContrast: '#8e8e8e',
  lowContrast: 'black',
  background: '#1A1A1A',

  selectionRed: '#E25555',
}

export const { styled, css, getCssString, global } = createCss({
  theme: {
    colors: Colors,
    fontSizes: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      regular: '18px',
      md: '22px',
      lg: '24px',
      xl: '36px',
    },
    fonts: {
      serif: `'EB Garamond', serif`,
    },
    fontWeights: {
      // following lootproject.com
      regular: 400,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    // Abbreviated margin properties
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

export const globalStyles = global({
  html: {
    'color-scheme': 'dark',
    backgroundColor: '$background',
  },
  body: {
    backgroundColor: '$background',
    margin: 0,
    minHeight: '100vh',
    maxWidth: '100vw',
  },
  '*': {
    fontFamily: '$serif',
    // '-webkit-font-smoothing': 'antialiased',
    // '-moz-osx-font-smoothing': 'grayscale',
    boxShadow: 'none',
    border: 'none',
    boxSizing: 'border-box',
  },
  '*:focus': {
    outline: 'none',
  },
  // '::selection': {
  //   backgroundColor: '$selection',
  // },
  a: {
    textDecoration: 'none',
  },
})
