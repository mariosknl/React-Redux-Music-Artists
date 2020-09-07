import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistDetailsStyles = styled.div.attrs({
  className: 'w-2/3 flex flex-col m-auto text-gray-300 text-center',
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
