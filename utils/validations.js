/* eslint-disable no-useless-escape */
/* eslint-disable require-unicode-regexp */
const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateInput = ({value, validations}) => {
  let error = false;
  let errorMessage = "";

  if (validations.includes("required") && value === "") {
    error = true;
    errorMessage = "This field can't be empty";
  } else if (validations.includes("email") && !validateEmail(value)) {
    error = true;
    errorMessage = "Type a valid email";
  }
  return {
    error,
    errorMessage,
  };
};
