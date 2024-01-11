import { useFormContext } from "react-hook-form";

const useInputProps = ({ name }) => {
  const { register } = useFormContext();

  return { ...register(name) };
};

export default useInputProps;
