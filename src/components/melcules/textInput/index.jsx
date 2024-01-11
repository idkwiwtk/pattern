import useFormHookProps from "../../../hook/useFormHookProps";
import Input from "../../atoms/input";
import { forwardRef } from "react";

const TextInputView = forwardRef((props, ref) => {
  return (
    <Input
      ref={ref}
      style={{ border: "solid 1px black", borderRadius: 12 }}
      {...props}
    />
  );
});

const TextInput = ({ name }) => {
  const formHookProps = useFormHookProps({ name });

  const textInputProps = { ...formHookProps };

  return <TextInputView {...textInputProps} />;
};

export default TextInput;
