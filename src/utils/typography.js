import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Proxima Nova',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Proxima Nova', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    'p': {
      fontSize: '16px'
    }
  }),
})

export default typography