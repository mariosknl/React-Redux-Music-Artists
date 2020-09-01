import styled from 'styled-components';
import tw from 'tailwind.macro';

const FormStyles = styled.div.attrs({
  className: 'w-6/12 mx-auto text-center rounded',
})`
  & {
    .containerForm {
      ${tw`w-full py-2`}
    }
    form {
      ${tw`bg-white rounded py-3`}
    }
    & .artistForm {
      ${tw`font-mono text-lg xxs:text-sm text-gray-800 font-bold`}
    }
    input {
      ${tw`w-64 appearance-none bg-gray-600 border-transparent text-gray-600 mr-3 py-1 px-2 leading-tight xxs:w-12`}
    }
    input:focus {
      ${tw`outline-none bg-white border-gray-800 text-gray-800`}
    }
    button {
      ${tw`w-20 flex-shrink-0 bg-teal-500 rounded self-end`}
    }
    button:hover {
      ${tw`bg-teal-700 border-teal-500`}
    }
    button:hover {
      ${tw`bg-teal-700 text-sm border-4 text-white px-2 rounded`}
    }
  }
`;

export default FormStyles;
