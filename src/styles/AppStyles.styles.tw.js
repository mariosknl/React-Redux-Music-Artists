/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'tailwind.macro';

const AppStyles = styled.div.attrs({
  className: 'w-full h-screen flex flex-col items-center justify-center',
})`
  & {
    h1 {
      ${tw`font-sans text-6xl text-center font-hairlinw text-6xl text-teal-500`}
    }
    .container {
      ${tw`w-full h-screen bg-gray-300`}
    }
  }
`;

export default AppStyles;
