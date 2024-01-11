import { useFormContext } from "react-hook-form";
import Button from "../../atoms/button";

const SubmitButtonView = ({ text, onClick, disable }) => {
  return (
    <Button
      disabled={disable}
      onClick={onClick}
      style={{
        padding: "6px 12px",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 12,
        color: disable ? "red" : "white",
        background: disable ? "gray" : "blue",
        cursor: disable ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </Button>
  );
};

const useFormHokCheckProps = ({ values, onClick }) => {
  const {
    watch,
    getValues,
    formState: { errors },
  } = useFormContext();

  const data = watch(values);

  const getValid = () => {
    let isValid = true;
    values.forEach((name) => {
      if (errors[name]) {
        isValid = false;
      }
    });

    data.forEach((value) => {
      if (!value) {
        isValid = false;
      }
    });

    return isValid;
  };

  const getMessage = () => {
    let message = "";
    values.forEach((name) => {
      if (errors[name] && !message) {
        message = errors[name].message;
      }
    });

    return message;
  };

  const handleSubmitValid = (callback) => {
    callback(getValues(), getValid());
  };

  return {
    disable: !getValid(),
    active: getValid(),
    status: getValid() ? "active" : "disable",
    message: getMessage(),
    onClick: () => handleSubmitValid(onClick),
  };
};

const SubmitButton = ({ message, text, submitFn, values }) => {
  const { handleSubmit } = useFormContext();

  const checkFormProps = useFormHokCheckProps({
    values,
    onClick: handleSubmit(submitFn),
  });

  const submitButtonProps = {
    message,
    text,
    ...checkFormProps,
  };

  return <SubmitButtonView {...submitButtonProps} />;
};

export default SubmitButton;
