import {
  Box,
  Container,
  Button,
  Grid,
  Divider,
  Typography,
  Link,
} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '../../components/CustomIcons/GoogleIcon';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface LoginProps {
  onEmailClick: () => void;
}

const Login = ({ onEmailClick }: LoginProps) => {
  return (
    <>
      <Header />
      <Container
        style={{ maxWidth: '450px' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: '50vh',
        }}
      >
        <Typography
          sx={{
            fontSize: '22px',
            textAlign: 'left',
            fontWeight: 'bold',
            fontFamily: 'plex-sans,sans-serif',
            lineHeight: '28px',
            marginTop: '50px',
            marginBottom: '20px',
          }}
        >
          Sign up or log in
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<FacebookRoundedIcon />}
              size="large"
              sx={{
                fontFamily: 'plex-sans, sans-serif',
                textTransform: 'none',
                boxShadow: 'none',
                width: '100%',
                backgroundColor: '#3b5998',
                '&:hover': {
                  backgroundColor: '#3b59999',
                  boxShadow: 'none',
                },
                border: '1px solid #3b5998',
              }}
            >
              Continue With FaceBook
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              size="large"
              sx={{
                fontFamily: 'plex-sans, sans-serif',
                textTransform: 'none',
                boxShadow: 'none',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'white',
                  border: '1px solid #D1D4D4',
                  boxShadow: 'none',
                },
                border: '1px solid #D1D4D4',
              }}
            >
              Continue With Google
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<AppleIcon />}
              size="large"
              sx={{
                fontFamily: 'plex-sans, sans-serif',
                boxShadow: 'none',
                textTransform: 'none',
                width: '100%',
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  boxShadow: 'none',
                },
              }}
            >
              Continue With Apple
            </Button>
          </Grid>
          <Grid item>
            <Divider component="div" role="presentation" sx={{ marginTop: 2 }}>
              {' '}
              or{' '}
            </Divider>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              size="large"
              sx={{
                fontFamily: 'plex-sans, sans-serif',
                boxShadow: 'none',
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#00ccbc',
                '&:hover': {
                  backgroundColor: '#00C2B3',
                  boxShadow: 'none',
                },
                border: '1px solid #00ccbc',
              }}
              onClick={onEmailClick}
            >
              Continue With email
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 5,
            color: '#585c5c',
            fontFamily: 'plex-sans,sans-serif',
            fontSize: '14px',
            lineHeight: '19px',
          }}
        >
          By continuing you agree to our{' '}
          <Link href="" color="#00ccbc">
            T&Cs.
          </Link>
          . Please also check out our{' '}
          <Link href="" color="#00ccbc">
            Privacy Policy
          </Link>
          . We use your data to offer you a personalized experience and to
          better understand and improve our services.
          <Link href="" color="#00ccbc">
            For more information see here
          </Link>
          .
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
