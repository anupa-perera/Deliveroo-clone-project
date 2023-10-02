import { useEffect, useState } from 'react';
import Login from './Login';
import Emaillogin from './EmailLogin';
import PasswordLogin from './EnterPassword';
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../features/authSlice';
import { updateTitle } from '../../utils/utils';
const LoginContainer = () => {
  const dispatch = useDispatch();
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const emailClickHandler = (): void => {
    setShowEmailLogin(true);
  };

  useEffect(() => {
    updateTitle('Deliveroo - Food delivery');
  }, []);

  const continueToPasswordHandler = async (email: string) => {
    try {
      console.log('Firebase auth object:', auth);

      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      console.log('Sign-in methods for email:', signInMethods);

      if (signInMethods.length > 0) {
        setShowEmailLogin(false);
        setShowPasswordLogin(true);

        console.log('Success: Email exists');
      } else {
        console.log('No email exists');
        navigate('/registration');
      }
    } catch (error) {
      console.error('Error checking email:', (error as Error).message);
    }
  };

  const continueToHomeHandler = async (email: string, password: string) => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);

      await signInWithEmailAndPassword(auth, email, password);

      console.log('Successful Login');
      dispatch(setLoggedIn(true));
      navigate('/');
    } catch (error) {
      console.error('Error:', (error as Error).message);
      setErrorMessage('Invalid password! Please try again.');
    }
  };

  return (
    <>
      {showEmailLogin && !showPasswordLogin && (
        <Emaillogin onContinueClick={continueToPasswordHandler} />
      )}
      {showPasswordLogin && (
        <PasswordLogin onLogin={continueToHomeHandler} error={errorMessage} />
      )}
      {!showEmailLogin && !showPasswordLogin && (
        <Login onEmailClick={emailClickHandler} />
      )}
    </>
  );
};

export default LoginContainer;
