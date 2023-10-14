import Mnemonic from "../../Mnemonic";
import Form from "../../Form";
import { SecurityPhaseBtn } from "../FormBtn";
import Webcam from "react-webcam";
import CameraInterface from "../CameraInterface";

const SecurityPhase = () => {
  return (
    <Form
      heading={"Save Security Phase"}
      paragraph={
        "Security phrase are automatically generated as you start your journey. Simply save it securely. It's your key to protecting your assets."
      }
    >
      <div className="mb-8 w-full">
        <CameraInterface />
      </div>

      <SecurityPhaseBtn />
    </Form>
  );
};

export default SecurityPhase;
