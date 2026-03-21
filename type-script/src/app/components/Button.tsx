import React from "react";

type buttonProps = {
  data: string;
  action: () => void;
};

//simple function
// function Button({ data, action }: buttonProps) {
//   return (
//     <>
//       <button
//         onClick={action}
//         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
//       >
//         {data}
//       </button>
//     </>
//   );
// }

// const Button = ({ data, action }: buttonProps) => {
//   return (
//     <>
//       <button
//         onClick={action}
//         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
//       >
//         {data}
//       </button>
//     </>
//   );
// };

//arrow function
const Button: React.FC<buttonProps> = ({ data, action }) => {
  return (
    <>
      <button
        onClick={action}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
      >
        {data}
      </button>
    </>
  );
};

export default Button;
