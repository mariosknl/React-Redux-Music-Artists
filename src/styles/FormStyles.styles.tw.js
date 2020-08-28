import styled from 'styled-components';
import tw from 'tailwind.macro';

const FormStyles = styled.form.attr({
  className: 'w-75 max-w-sm',
})`
  & {
    .containerForm {
      ${tw`flex items-center border-b border-teal-500 py-2`}
    }
    input {
      ${tw`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight`}
    }
    input:focus {
      ${tw`outline-none`}
    }
    button {
      ${tw`flex-shrink-0 bg-teal-500`}
    }
    button:hover {
      ${tw`bg-teal-700 border-teal-500`}
    }
    button:hover {
      ${tw`bg-teal-700 text-sm border-4 text-white py-1 px-2 rounded`}
    }
    }
  }
`;

export default FormStyles;
