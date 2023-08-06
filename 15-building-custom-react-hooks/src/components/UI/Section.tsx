import classes from "./Section.module.css";
import React from "react";

const Section = (props: { children: React.ReactNode }) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
