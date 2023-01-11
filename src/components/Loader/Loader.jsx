import { createPortal } from 'react-dom';
import { Spinner } from '@chakra-ui/react';

export const loaderBox = document.querySelector('#loader');

const Loader = () => {
  return createPortal(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        position: 'absolute',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <Spinner size="xl" color="rgb(106, 17, 145)" />
    </div>,
    loaderBox
  );
};
export default Loader;
