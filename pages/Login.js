import { useState } from "react";
import Router from "next/router";
import PublicLayout from "../components/Layouts/PublicLayout/PublicLayout";
import Heading from "../components/Heading/Heading";
import Input from "../components/Form/Input/Input";
import { validateInput } from "../utils/validations";
import axios from "../lib/axios";
import Button from "../components/Button/Button";

const Login = () => {
  const [generalErrorMessage, setGeneralErrorMessage] = useState(null);
  const [inputFields, setInputFields] = useState({
    email: {
      label: "E-mail",
      type: "text",
      placeholder: "E-mail",
      error: false,
      errorMessage: "",
      value: "brucebanner@strv.com",
      validations: ["required", "email"],
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Password",
      error: false,
      errorMessage: "",
      value: "kill3r",
      validations: ["required"],
    },
  });

  const doLogin = ({ password, email }) => {
    const params = { password, email };

    axios
      .post("./auth/native", params)
      .then((result) => {
        localStorage.setItem("token", result.headers.authorization);
        Router.push("/dashboard");
      })
      .catch((error) => {
        setGeneralErrorMessage("Something went wrong. Try again!");
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let errors = false;

    Object.keys(inputFields).forEach((key) => {
      const { validations, value } = inputFields[key];
      const { error, errorMessage } = validateInput({ value, validations });

      setInputFields((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          error,
          errorMessage,
        },
      }));

      if (error) {
        errors = true;
      }
    });

    if (errors === false) {
      const { email, password } = inputFields;

      doLogin({ email: email.value, password: password.value });
    } else {
      console.log("Go away!");
    }
  };

  const onChange = ({ target: { value, name } }) => {
    setInputFields({
      ...inputFields,
      [name]: {
        ...inputFields[name],
        value,
        error: false,
        errorMessage: "",
      },
    });
  };

  const onBlur = ({ target: { value, name } }) => {
    const { validations } = inputFields[name];
    const { error, errorMessage } = validateInput({ value, validations });

    setInputFields({
      ...inputFields,
      [name]: {
        ...inputFields[name],
        error,
        errorMessage,
      },
    });
  };

  return (
    <PublicLayout>
      <Heading
        title={"Sign in to Eventio."}
        text={"Enter your details below."}
      />
      {generalErrorMessage && <div>{generalErrorMessage}</div>}
      <form onSubmit={onSubmit}>
        {Object.keys(inputFields).map((key) => (
          <Input
            onChange={onChange}
            onBlur={onBlur}
            key={key}
            name={key}
            label={inputFields[key].label}
            type={inputFields[key].type}
            placeholder={inputFields[key].placeholder}
            error={inputFields[key].error}
            errorMessage={inputFields[key].errorMessage}
            value={inputFields[key].value}
          />
        ))}
        <Button type="submit">Login</Button>
      </form>
    </PublicLayout>
  );
};

export default Login;
