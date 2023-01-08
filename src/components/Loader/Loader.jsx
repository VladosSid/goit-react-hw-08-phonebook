import { createPortal } from 'react-dom';
import { Spinner } from '@chakra-ui/react';

export const loaderBox = document.querySelector('#loader');
loaderBox.style.display = 'flex';
loaderBox.style.alignItems = 'center';
loaderBox.style.justifyContent = 'center';
loaderBox.style.width = '100vw';
// loaderBox.style.display = 'flex';

const Loader = () => {
  return createPortal(
    <Spinner size="xl" color="rgb(106, 17, 145)" />,

    loaderBox
  );
};
export default Loader;
