import React, { cloneElement } from "react";
import { useFormContext } from "react-hook-form";

const Props = ({ children, name }) => {
  const { register } = useFormContext();

  return cloneElement(children, { ...register(name) });
};

export default Props;
