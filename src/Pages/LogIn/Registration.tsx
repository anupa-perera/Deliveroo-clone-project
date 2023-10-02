import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from '../../selector/selectors';
import { setEmail } from '../../features/authSlice';
import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth, db } from '../../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirstName(e.target.value);
  };

  const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlastName(e.target.value);
  };

  const mobileNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmobileNumber(e.target.value);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmedPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(e.target.value);
  };

  useEffect(() => {
    setPasswordsMatch(password === confirmedPassword);
  }, [password, confirmedPassword]);

  const allowContinue = () => {
    return (
      firstName &&
      lastName &&
      email &&
      mobileNumber &&
      password &&
      confirmedPassword &&
      passwordsMatch
    );
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Checking if email is already registered...');
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods && signInMethods.length > 0) {
        console.error('Email is already registered.');
        return false;
      }

      console.log('Creating user account...');
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userId = user.uid;

      console.log('Storing user information...');
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, {
        firstName,
        lastName,
        mobileNumber,
        email,
      });

      setRegistrationSuccess(true);

      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error) {
      console.error('Error ', (error as Error).message);
      return false;
    }
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10px',
          paddingBottom: '40px',
          minHeight: '47vh',
        }}
      >
        <form style={{ maxWidth: '100%' }} onSubmit={registerUser}>
          <Typography
            sx={{
              fontSize: '22px',
              textAlign: 'left',
              fontWeight: 700,
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginTop: '5px',
              marginBottom: '5px',
            }}
          >
            Email log in
          </Typography>

          {!passwordsMatch && (
            <Typography
              sx={{
                color: 'red',
                textAlign: 'left',
                fontSize: '16px',
                fontFamily: 'Plex Sans, sans-serif',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Passwords do not match.
            </Typography>
          )}
          {registrationSuccess && (
            <Typography
              sx={{
                color: 'Green',
                textAlign: 'left',
                fontSize: '16px',
                fontFamily: 'Plex Sans, sans-serif',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Registration Succesful Your are being redirected...
              <CircularProgress color="success" size={16} />
            </Typography>
          )}
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'Plex Sans, sans-serif',
              marginTop: '25px',
              marginBottom: '10px',
            }}
          >
            First Name
          </Typography>
          <TextField
            required
            value={firstName}
            onChange={firstNameHandler}
            type="text"
            variant="outlined"
            fullWidth
            id="firstname"
            placeholder="e.g. John"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
          />
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'Plex Sans, sans-serif',
              marginTop: '25px',
              marginBottom: '10px',
            }}
          >
            Last Name
          </Typography>
          <TextField
            required
            value={lastName}
            onChange={lastNameHandler}
            type="text"
            variant="outlined"
            fullWidth
            id="lastname"
            placeholder="e.g. Doe"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
          />
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'Plex Sans, sans-serif',
              marginTop: '25px',
              marginBottom: '10px',
            }}
          >
            Mobile Number
          </Typography>
          <TextField
            required
            value={mobileNumber}
            onChange={mobileNumberHandler}
            type="text"
            variant="outlined"
            fullWidth
            id="mobile"
            placeholder="e.g. 07*******"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
          />
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'Plex Sans, sans-serif',
              marginTop: '25px',
              marginBottom: '10px',
            }}
          >
            Email address
          </Typography>
          <TextField
            required
            type="email"
            value={email}
            onChange={emailHandler}
            variant="outlined"
            fullWidth
            id="password"
            placeholder="e.g. name@example.com"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
          />

          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            Password
          </Typography>
          <TextField
            required
            type="Password"
            value={password}
            onChange={passwordHandler}
            variant="outlined"
            fullWidth
            id="confirmpassword"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
            placeholder="**************"
          />
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            Confirm Passowrd
          </Typography>
          <TextField
            required
            type="Password"
            value={confirmedPassword}
            onChange={confirmedPasswordHandler}
            variant="outlined"
            fullWidth
            id="Password"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
            placeholder="**************"
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!allowContinue()}
            sx={{
              color: 'white',
              height: '48px',
              boxShadow: 'none',
              border: '1px rgb(226, 229, 229) ',
              cursor: !allowContinue() ? 'not-allowed' : 'pointer',
              background: !allowContinue()
                ? 'rgb(226, 229, 229)'
                : 'rgb(0, 211, 195)',
              '&:hover': {
                background: 'rgb(0, 211, 195)',
                boxShadow: 'none',
              },
              fontSize: '16px',
              width: '100%',
              fontWeight: 'bold',
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginBottom: '5px',
              marginTop: '15px',
              textTransform: 'none',
            }}
          >
            Continue
          </Button>
          <br />
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Registration;
