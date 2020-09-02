/* eslint-disable no-useless-escape */
import styled from 'styled-components';
import tw from 'tailwind.macro';

const AppStyles = styled.div.attrs({
  className:
    'w-full h-screen xxs:h-1 flex flex-col items-center overflow-x-hidden',
})`
  & {
    h1 {
      ${tw`font-mono text-5xl text-center text-gray-100  mt-5`}
    }
    p {
      ${tw`underline text-2xl text-bold text-center tracking-widest subpixel-antialiased font-mono md:text-xl md:mb-2`}
    }
  }
`;

export default AppStyles;
