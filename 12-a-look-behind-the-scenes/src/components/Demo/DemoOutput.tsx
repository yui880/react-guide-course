import React from "react";
const DemoOutput = (props: { show: boolean }) => {
  console.log("DemoOutput Running");
  return <p>{props.show && "This is New!"}</p>;
};

export default React.memo(DemoOutput);
