import { Box, useStyleConfig } from '@chakra-ui/react';

export function ButtonAuth(props) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('ButtonAuth', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
}

export default ButtonAuth;
