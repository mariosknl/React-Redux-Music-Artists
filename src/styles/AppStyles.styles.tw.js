import styled from 'styled-components';
import tw from 'tailwind.macro';

const AppStyles = styled.div.attrs({
  className: 'w-full h-screen flex flex-col items-center bg-gray-600',
})`
  & {
    h1 {
      ${tw`font-mono text-5xl text-center text-gray-100  mt-5`}
    }
    .container {
      ${tw``}
    }
    p {
      ${tw`underline text-2xl text-bold text-center tracking-widest subpixel-antialiased font-mono`}
    }
  }
`;

export default AppStyles;
