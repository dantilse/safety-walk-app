// h1 | h2 | h3 | h4 | Lead | text | small

// ----------------------------------------------------------------------
// Documentation: https://facebook.github.io/react-native/docs/improvingux
// ----------------------------------------------------------------------
// color: color
// fontFamily: string
// fontSize: number
// fontStyle: enum('normal', 'italic')
// fontVariant: array of enum('small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums') (iOS)
// fontWeight: enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
// includeFontPadding: bool (Android)
// letterSpacing: number
// lineHeight: number
// textAlign: enum('auto', 'left', 'right', 'center', 'justify: iOS only')
// textAlignVertical: enum('auto', 'top', 'bottom', 'center') (Android)
// textDecorationColor: color (iOS)
// textDecorationLine: enum('none', 'underline', 'line-through', 'underline line-through')
// textDecorationStyle: enum('solid', 'double', 'dotted', 'dashed') (iOS)
// textShadowColor: color
// textShadowOffset: object: {width: number,height: number}
// textShadowRadius: number
// textTransform: enum('none', 'uppercase', 'lowercase', 'capitalize')
// writingDirection: enum('auto', 'ltr', 'rtl') (iOS)

const type = {
  h1: {
    fontSize: 50,
    fontWeight: '900'
  },
  h2: {
    fontSize: 35,
    fontWeight: '700'
  },
  h3: {
    fontSize: 28,
    fontWeight: '700'
  },
  h4: {
    fontSize: 24,
    fontWeight: '400'
  },
  lead: {
    fontSize: 20,
    fontWeight: '400'
  },
  text: {
    fontSize: 16,
    fontWeight: '400'
  },
  small: {
    fontSize: 14,
    fontWeight: '400'
  }
};

export default type;
