import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'w-screen h-auto grid grid-cols-2 gap-4',
})`
  & {
    h2 {
      ${tw`font-mono text-4xl text-center underline font-bold text-gray-400`}
    }

    .bio {
      ${tw`font-mono text-2xl mt-4 no-underline`}
    }
    & {
      img {
        ${tw`w-2/3 ml-4 mt-4`}
      }
    }
    & {
      span {
        ${tw`object-right-bottom`}
      }
    }
  }
`;

export default ArtistInfoStyles;
