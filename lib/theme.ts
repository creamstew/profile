import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  // デフォルト
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
  // 拡張
});

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "'Fira Mono', monospace",
    body: "'Fira Mono', monospace",
    mono: "'Fira Mono', monospace",
  },
});
