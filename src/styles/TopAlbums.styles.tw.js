import styled from 'styled-components';
import tw from 'tailwind.macro';

const TopAlbumsStyles = styled.div.attrs({
  className: 'w-full leading-none relative mt-20 px-16',
})`
  & {
    h2 {
      ${tw`text-5xl underline font-bold mb-8`}
    }
    ul {
      ${tw`w-4/6 h-1/2 flex flex-row items-center flex-wrap -mb-56`}
    }
    li {
      ${tw`w-1/3 h-64 my-5`}
    }
    img {
      ${tw`sm:h-24 w-11/12 md:h-48  rounded sm:m-1`}
    }
    a {
      ${tw`sm:text-xs md:font-bold`}
    }
    h3 {
      ${tw`text-2xl mb-3 underline sm:text-xs sm:pl-2 md:text-sm`}
    }
    span {
      ${tw`text-base sm:text-xs`}
    }
    button {
      ${tw`bg-gray-300 text-black font-bold py-2 px-2 my-1 rounded-full mr-1 sm:py-1 sm:px-1`}
    }
    button:hover {
      ${tw`bg-gray-600 text-white`}
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
