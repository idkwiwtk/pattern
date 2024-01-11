import { useFormContext } from "react-hook-form";

const useFormHookProps = ({ name }) => {
  const { register, handleSubmit } = useFormContext();

  return { ...register(name), handleSubmit };
};

export default useFormHookProps;
