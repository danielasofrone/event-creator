import {useState} from "react";
import PublicLayout from "../components/Layouts/PublicLayout/PublicLayout";
import Heading from "../components/Heading";
import Input from "../components/Form/Input/Input";
import {validateInput} from "../utils/validations";

const Login = () => {
  const [inputFields, setInputFields] = useState({
    email: {
      label: "E-mail",
      type: "type",
      placeholder: "E-mail",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required", "email"],
    },
    password: {
      label: "Password",
      type: "type",
      placeholder: "Password",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required"],
    },
  });
  const onSubmit = evt => {
    evt.preventDefault();

    let errors = false;

    Object.keys(inputFields).forEach(key => {
      const {validations, value} = inputFields[key];
      const {error, errorMessage} = validateInput({value, validations});

      setInputFields(prevState => ({
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
      console.log("Submitted");
    } else {
      console.log("Unsubmitted");
    }
  };

  const onChange = ({target: {value, name}}) => {
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

  const onBlur = ({target: {value, name}}) => {
    const {validations} = inputFields[name];
    const {error, errorMessage} = validateInput({value, validations});
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
      <form onSubmit={onSubmit}>
        {Object.keys(inputFields).map(key => (
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
        <button type='submit'>Login</button>
      </form>
    </PublicLayout>
  );
};

export default Login;
