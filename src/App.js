import {
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import AssertButton from "./components/melcules/assertButton";
import CancelButton from "./components/melcules/cancelButton";
import SubmitButton from "./components/melcules/submitButton";
import TextInput from "./components/melcules/textInput";

const AppView = ({
  userAssertFn,
  moveTo,

  cancelButtonText,
  cancelFn,
  cancelMessage,

  submitMessage,
  submitButtonText,
  submitFn,
}) => {
  return (
    <div
      style={{
        width: 680,
        margin: "0 auto",
        padding: "120px 0",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <TextInput name={"id"} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <AssertButton
          text={"확인"}
          assertFn={userAssertFn}
          progressFn={() => moveTo("home")}
        />
        <CancelButton
          message={cancelMessage}
          text={cancelButtonText}
          cancelFn={cancelFn}
        />
        <SubmitButton
          message={submitMessage}
          text={submitButtonText}
          submitFn={submitFn}
          values={["id"]}
        />
      </div>
    </div>
  );
};

const useAssertUser = () => {
  const userAssertFn = () => {
    if (window.confirm("확인하시겠습니까?")) {
      return true;
    }
    return false;
  };
  const moveTo = () => {
    console.log("move to home");
    alert("move to home");
  };

  return {
    userAssertFn,
    moveTo,
  };
};

const useCancelUser = () => {
  const cancelMessage = "취소하시겠습니까?";
  const cancelButtonText = "취소";
  const cancelFn = () => {
    alert("취소 완료");
  };

  return {
    cancelButtonText,
    cancelMessage,
    cancelFn,
  };
};

const useSubmitUser = () => {
  const submitMessage = "제출하시겠습니까?";
  const submitButtonText = "제출";
  const submitFn = (data) => {
    alert("제출 완료", data);
  };

  return {
    submitMessage,
    submitButtonText,
    submitFn,
  };
};

const App = () => {
  const form = useForm({ mode: "onChange" });

  const appProps = {
    ...useAssertUser(),
    ...useCancelUser(),
    ...useSubmitUser(),
  };

  return (
    <FormProvider {...form}>
      <AppView {...appProps} />
    </FormProvider>
  );
};

export default App;
