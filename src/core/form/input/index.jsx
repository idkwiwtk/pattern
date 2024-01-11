import { cloneElement } from "react";
import useFormHookProps from "../../../hook/useFormHookProps";

// logic 추가
const FormInput = ({ name, children }) => {
  const formHookProps = useFormHookProps({ name });

  const inputProps = { ...formHookProps };

  return cloneElement(children, { ...inputProps });
};

export default FormInput;
