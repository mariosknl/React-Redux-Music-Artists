import styled from 'styled-components';
import tw from 'tailwind.macro';

const SimilarStyles = styled.div.attrs({
  className: 'similarDiv absolute inset-y-1 top-0 right-0',
})`
  & {
    h4 {
      ${tw`font-mono text-gray-100 text-center text-3xl`}
    }
    li {
      ${tw`font-mono text-xl text-gray-300`}
    }
  }
`;

export default SimilarStyles;
