import styled from 'styled-components';
import tw from 'tailwind.macro';

const ArtistImageStyles = styled.div.attrs({
  className: 'w-1/2 h-auto',
})`
  & {
    img {
      ${tw`w-full h-full xss:max-w-xxxs`}
    }
  }
`;

export default ArtistImageStyles;
