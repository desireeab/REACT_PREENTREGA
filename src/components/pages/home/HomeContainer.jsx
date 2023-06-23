import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ name }) => {
  const [counter, setCounter] = useState(0);

  return <Home name={name} counter={counter} setCounter={setCounter} />;
};

export default HomeContainer;
