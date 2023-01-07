import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonAuth = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgb(249, 104, 1)',
    alignItems: 'center',
    fontSize: '28px',
    // gap: 6,
    color: 'white',
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: '10px 28px',
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'rounded',
  },
});
