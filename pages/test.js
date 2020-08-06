import Axios from "axios";
import { useEffect } from "react";

const test = () => {
  const displayName = (name) => name;
  return <h1>hallo</h1>;
};
export default test;

const fetschAircrafts = () => {
  Axios.get("/AircraftModels_Listof").then(({ data: { result } }) => {
    console.log(result);
  });
};

useEffect(() => {
  fetschAircrafts();
});
