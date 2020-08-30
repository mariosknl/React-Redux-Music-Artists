import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistDetailsStyles = styled.div.attrs({
  className: 'w-2/3 h-64 flex flex-col ml-4 mt-1 text-gray-300 text-center',
})`
  & {
    span {
      ${tw`text-gray-400 text-lg`}
    }
    a {
      ${tw`text-lg h-4`}
    }
  }
`;

export default ArtistDetailsStyles;
