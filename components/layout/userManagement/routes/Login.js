import Form from '../Form';
import { WelcomeBtn } from './FormBtn';
import { WelcomeInput } from './FormInput';

const Login = () => {
  return (
    <Form
      heading={'Eminence Welcomes You!'}
      paragraph={
        'Please enter your password to unlock and access Eminence securely.'
      }
    >
      <WelcomeInput />
      <WelcomeBtn />
    </Form>
  );
};

export default Login;
