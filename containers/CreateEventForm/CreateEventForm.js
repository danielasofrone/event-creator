import { useState } from "react";
import axios from "../../lib/axios";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

const CreateEventForm = ({}) => {
  const [inputFields, setInputFields] = useState({
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

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "./events",
        {
          title: "Awesome event in Vienna",
          description: "A bunch of people doing awesome stuff in Vienna",
          startsAt: "2020-12-08T10:46:33.901Z",
          capacity: 5,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        setEvents({
          status: "done",
          data: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = ({ target: { value, name } }) =>
    setInputFields((prevState) => ({
      ...prevSate,
      [name]: {
        ...prevState[name],
        error: false,
        errorMessage: "",
      },
    }));

  const onBlur = () => {};

  return (
    <>
      <Heading title={"Create new event"} text={"Enter event details"} />
      <form onSubmit={onSubmit}>
        <div>
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
        </div>
        <Button center type="submit">
          Create new event
        </Button>
      </form>
    </>
  );
};

export default CreateEventForm;
