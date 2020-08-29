import styled from 'styled-components';
import tw from 'tailwind.macro';

const SimilarStyles = styled.div.attrs({
  className: 'w-1/3 h-auto flex flex-col items-center justify-center my-2',
})`
  & {
    h1 {
      ${tw`font-mono text-center text-gray-100 my-8`}
    }
    li {
      ${tw`font-mono text-2xl text-center text-gray-300`}
    }
  }
`;

export default SimilarStyles;
