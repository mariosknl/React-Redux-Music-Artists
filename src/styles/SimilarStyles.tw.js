import styled from 'styled-components';
import tw from 'tailwind.macro';

const SimilarStyles = styled.div.attrs({
  className: 'similarDiv absolute top-0 right-0 pr-16 pt-3',
})`
  & {
    h4 {
      ${tw`font-mono text-gray-700 text-center text-3xl sm:text-base sm:mt-4`}
    }
    a {
      ${tw`font-mono text-xl text-gray-300 sm:text-base`}
    }
  }
`;

export default SimilarStyles;
