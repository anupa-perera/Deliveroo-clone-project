import { Button, Container, TextField, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectButtonDisabled, selectEmail } from '../../selector/selectors';
import { setEmail } from '../../features/authSlice';

interface EmailLoginProps {
  onContinueClick: (email: string) => void;
}

const Emaillogin = ({ onContinueClick }: EmailLoginProps) => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const isButtonDisabled = useSelector(selectButtonDisabled);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onContinueClick(email);
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
              fontSize: '22px',
              textAlign: 'left',
              fontWeight: 700,
              fontFamily: 'IBM Plex Sans, sans-serif',
              marginTop: '50px',
            }}
          >
            Email log in
          </Typography>
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
            id="email"
            placeholder="e.g. name@example.com"
            inputProps={{
              style: { fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif' },
            }}
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
            disabled={isButtonDisabled}
            sx={{
              color: 'white',
              height: '48px',
              boxShadow: 'none',
              border: '1px rgb(226, 229, 229) ',
              cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
              background: isButtonDisabled
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
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Emaillogin;
