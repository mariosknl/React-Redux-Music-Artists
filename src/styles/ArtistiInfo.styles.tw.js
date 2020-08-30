import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'w-screen h-auto grid grid-cols-2 gap-6',
})`
  & {
    h2 {
      ${tw`font-mono text-4xl text-center underline font-bold text-gray-400`}
    }
    & {
      p {
        ${tw`font-mono mt-4 text-base no-underline`}
      }
    }
    & {
      img {
        ${tw`w-2/3 ml-4 mt-4`}
      }
    }
  }
`;

export default ArtistInfoStyles;
