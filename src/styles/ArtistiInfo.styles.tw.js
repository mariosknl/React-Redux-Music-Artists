import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'info',
})`
   ${'w-full h-auto grid grid-cols-2 gap-4 px-16 xxs:grid-cols-1 xxs:px-6'} 
    & {
      h5 {
        ${tw`font-mono text-4xl text-center underline font-bold text-gray-400`}
      }
      .bio {
        ${tw`font-mono text-xl mt-4 no-underline`}
      }
      & img {
        ${tw`w-3/4 ml-4 m-auto mt-20`}
      }
    }
  }
`;

export default ArtistInfoStyles;
