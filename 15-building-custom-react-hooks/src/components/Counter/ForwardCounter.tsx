import Card from "./Card";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter((prevCounter: number) => prevCounter + 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
