import Button from "../../atoms/button";

const CancelButtonView = ({ text, onclick }) => {
  return (
    <Button
      onClick={onclick}
      style={{
        padding: "6px 12px",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 12,
        color: "white",
        background: "red",
      }}
    >
      {text}
    </Button>
  );
};

const CancelButton = ({ message, text, cancelFn }) => {
  const confirmFn = () => {
    if (window.confirm(message)) {
      cancelFn();
    }
  };

  const cancelButtonProps = {
    text,
    onclick: confirmFn,
  };

  return <CancelButtonView {...cancelButtonProps} />;
};

export default CancelButton;
