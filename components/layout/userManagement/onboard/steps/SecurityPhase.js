import Mnemonic from '../../Mnemonic';
import Form from '../../Form';
import { SecurityPhaseBtn } from '../FormBtn';

const SecurityPhase = () => {
  return (
    <Form
      heading={'Save Security Phase'}
      paragraph={
        "Security phrase are automatically generated as you start your journey. Simply save it securely. It's your key to protecting your assets."
      }
    >
      <div className="mb-8 w-full">
        <Mnemonic />
      </div>

      <SecurityPhaseBtn />
    </Form>
  );
};

export default SecurityPhase;
