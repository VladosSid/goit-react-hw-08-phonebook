import { Box, useStyleConfig } from '@chakra-ui/react';

export function LinkNav(props) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('LinkNav', { variant });

  return <Box __css={styles} {...rest} />;
}
export default LinkNav;
