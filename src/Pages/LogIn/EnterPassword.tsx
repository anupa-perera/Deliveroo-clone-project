import { Button, Container, TextField, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectEmail } from '../../selector/selectors';
import { useState } from 'react';

interface PasswordLoginProps {
  onLogin: (email: string, password: string) => void;
  error: string;
}
const PasswordLogin = ({ onLogin, error }: PasswordLoginProps) => {
  const email = useSelector(selectEmail);
  const [password, setPassword] = useState('');
  const isButtonDisabled = () => {
    return password.length < 6;
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
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
        <form style={{ maxWidth: '100%' }} onSubmit={submitHandler}>
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            Enter Password
          </Typography>
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                fontSize: '14px',
                marginTop: '5px',
                marginBottom: '10px',
                display: password ? 'block' : 'none',
              }}
            >
              {error}
            </Typography>
          )}
          <TextField
            required
            type="Password"
            value={password}
            onChange={passwordHandler}
            variant="outlined"
            fullWidth
            id="Password"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
            placeholder="**************"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isButtonDisabled()}
            sx={{
              color: 'white',
              height: '48px',
              boxShadow: 'none',
              border: '1px rgb(226, 229, 229) ',
              cursor: isButtonDisabled() ? 'not-allowed' : 'pointer',
              background: isButtonDisabled()
                ? 'rgb(226, 229, 229)'
                : 'rgb(0, 211, 195)',
              '&:hover': {
                backgroundColor: '#00C2B3',
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
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              background: 'white',
              boxShadow: 'none',
              border: 1,
              borderColor: 'rgb(209, 212, 212)',
              height: '48px',
              color: 'rgb(0, 194, 179)',
              fontSize: '16px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              width: '100%',
              '&:hover': {
                background: 'white',
                boxShadow: 'none',
              },
            }}
          >
            Forgot Password?
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default PasswordLogin;
