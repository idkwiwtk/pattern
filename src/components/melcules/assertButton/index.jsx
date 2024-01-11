import Button from "../../atoms/button";

const AssertButtonView = ({ text, onclick }) => {
  return (
    <Button
      onClick={onclick}
      style={{
        padding: "6px 12px",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 12,
      }}
    >
      {text}
    </Button>
  );
};

const AssertButton = ({ text, assertFn, progressFn }) => {
  const onClickAssertButton = () => {
    if (assertFn()) {
      progressFn();
    }
  };

  const assertButtonProps = {
    text,
    onclick: onClickAssertButton,
  };

  return <AssertButtonView {...assertButtonProps} />;
};

export default AssertButton;
