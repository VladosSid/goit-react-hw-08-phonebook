import { defineStyleConfig } from '@chakra-ui/react';

export const LinkNav = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'block',
    flexDirection: 'column',
    bg: 'rgb(106, 17, 145)',
    alignItems: 'center',
    gap: 6,
    fontSize: '28px',
    color: ' white',
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 2,
      borderRadius: '7px',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      border: ' 1px solid red',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'rounded',
  },
});
