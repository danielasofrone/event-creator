import { useState } from "react";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

const CreateEventForm = ({}) => {
  const [inputFields] = useState({
    title: {
      label: "Title",
      type: "text",
      placeholder: "Title",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required", "email"],
    },
    description: {
      label: "Description",
      type: "text",
      placeholder: "Description",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required"],
    },
    date: {
      label: "Date",
      type: "date",
      placeholder: "Date",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required"],
    },
    time: {
      label: "Time",
      type: "time",
      placeholder: "Time",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required"],
    },
    capacity: {
      label: "Capacity",
      type: "number",
      placeholder: "Capacity",
      error: false,
      errorMessage: "",
      value: "",
      validations: ["required"],
    },
  });

  const onSubmit = () => {};
  const onChange = () => {};
  const onBlur = () => {};

  return (
    <>
      <Heading title={"Create new event"} text={"Enter event details"} />
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
        <br />
        <Button type="submit">Create new event</Button>
      </form>
    </>
  );
};

export default CreateEventForm;
