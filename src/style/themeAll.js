import { extendTheme } from '@chakra-ui/react';

import { LinkNav } from './NavLinks/NavLink';
import { ButtonAuth } from './Button/Button';

export const theme = extendTheme({
  components: {
    ButtonAuth,
    LinkNav,
  },
});

export default theme;
