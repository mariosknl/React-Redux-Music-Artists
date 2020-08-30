import styled from 'styled-components';
import tw from 'tailwind.macro';

const TopAlbumsStyles = styled.div.attrs({
  className: 'w-full leading-none relative',
})`
  & {
    h2 {
      ${tw`text-5xl underline font-bold mb-8`}
    }
    ul {
      ${tw`w-4/6 h-1/2 flex flex-row items-center flex-wrap -mb-56`}
    }
    li {
      ${tw`w-1/3 h-64 my-2`}
    }
    img {
      ${tw`w-11/12 h-48 rounded`}
    }
    h3 {
      ${tw`text-2xl mb-3`}
    }
    span {
      ${tw`text-xl`}
    }
    & {
      .similarDiv {
        ${tw`w-2/6`}
      }
      .similar {
        ${tw`w-full h-auto flex flex-col items-center justify-center my-2`}
      }
      .similarLi {
        ${tw`h-8 w-full text-center`}
      }
    }
  }
`;

export default TopAlbumsStyles;
