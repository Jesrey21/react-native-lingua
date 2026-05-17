export const colors = {
  // Brand
  linguaPurple: '#6C4EF5',
  linguaDeepPurple: '#5B3BF6',
  linguaBlue: '#4D8BFF',
  linguaGreen: '#21C16B',

  // Semantic
  success: '#21C16B',
  warning: '#FFC800',
  streak: '#FF8A00',
  error: '#FF4D4F',
  info: '#4D8BFF',

  // Neutrals
  foreground: '#0D132B',
  muted: '#6B7280',
  border: '#E5E7EB',
  surface: '#F6F7FB',
  background: '#FFFFFF',
} as const;

export type ColorKey = keyof typeof colors;
