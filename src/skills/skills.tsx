import React from "react";
import { skillProps } from "./skills.types";

const skills = (props: skillProps) => {
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default skills;
