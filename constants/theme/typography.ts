export const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 1.2,
  h2: 1.3,
  h3: 1.3,
  h4: 1.4,
  body: 1.6,
  caption: 1.4,
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,

  // Pre-composed text style presets for StyleSheet use
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    lineHeight: fontSize.h1 * lineHeight.h1,
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h2,
    lineHeight: fontSize.h2 * lineHeight.h2,
    fontWeight: fontWeight.semiBold,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    lineHeight: fontSize.h3 * lineHeight.h3,
    fontWeight: fontWeight.semiBold,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    lineHeight: fontSize.h4 * lineHeight.h4,
    fontWeight: fontWeight.medium,
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLg,
    lineHeight: fontSize.bodyLg * lineHeight.body,
    fontWeight: fontWeight.regular,
  },
  bodyMd: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMd,
    lineHeight: fontSize.bodyMd * lineHeight.body,
    fontWeight: fontWeight.regular,
  },
  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySm,
    lineHeight: fontSize.bodySm * lineHeight.body,
    fontWeight: fontWeight.regular,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    lineHeight: fontSize.caption * lineHeight.caption,
    fontWeight: fontWeight.regular,
  },
} as const;
