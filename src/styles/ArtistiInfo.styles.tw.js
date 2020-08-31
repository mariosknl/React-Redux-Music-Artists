import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'w-full h-auto grid grid-cols-2 gap-4 px-16',
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
        ${tw`w-3/4 ml-4 m-auto mt-20`}
      }
    }
    & {
      span {
        ${tw`m-auto`}
      }
    }
  }
`;

export default ArtistInfoStyles;
