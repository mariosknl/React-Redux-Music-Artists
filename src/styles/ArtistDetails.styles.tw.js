import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistDetailsStyles = styled.div.attrs({
  className:
    'w-1/4 h-32 flex flex-col border text-gray-300 text-center text-2xl',
})`
  & {
    span {
      ${tw`text-gray-400`}
    }
  }
`;

export default ArtistDetailsStyles;
