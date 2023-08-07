import React, { useReducer, useState } from "react";

// const initialInputState = {
//   value: "",
//   isTouched: false,
// };
//
// const inputStateReducer = (state: any, action: any) => {
//   if (action.type === "INPUT") {
//     return { value: action.value, isTouched: state.isTouched };
//   }
//   if (action.type === "BLUR") {
//     return { isTouched: true, value: state.value };
//   }
//   if (action.type === "RESET") {
//     return { isTouched: false, value: "" };
//   }
// };
//
// const useInput = (validatedValue: (val: string) => boolean) => {
//   const [inputState, dispatch] = useReducer(
//     inputStateReducer,
//     initialInputState,
//   );
//
//   const valueIsValid = validatedValue(inputState!.value);
//   const hasError = !valueIsValid && inputState!.isTouched;
//
//   const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({ type: "INPUT", value: event.target.value });
//   };
//   const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({ type: "BLUR", value: event.target.value });
//   };
//
//   const reset = () => {
//     dispatch({ type: "RESET" });
//   };
//
//   return {
//     value: inputState!.value,
//     isValid: valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

const useInput = (validatedValue: (val: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validatedValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
