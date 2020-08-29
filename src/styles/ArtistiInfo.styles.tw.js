import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistInfoStyles = styled.div.attrs({
  className: 'w-2/3 h-auto text-center',
})`
  & {
    h2 {
      ${tw`font-mono font-bold text-gray-400 text-2xl`}
    }
    p {
      ${tw`font-mono text-base`}
    }
  }
`;
