import { Container, Grid, Link, Typography } from '@mui/material';
import Apple from '../../assets/images/Apple.jpg';
import Google from '../../assets/images/googleStoreBadge.png';

const IconCard = () => {
  return (
    <Container
      sx={{
        color: 'white',
        backgroundColor: '#414847',
        padding: '15px',
        height: '400px',
        borderRadius: '5px',
      }}
    >
      <Typography
        sx={{
          marginTop: '5px',
          fontFamily: 'plex-sans,sans-serif',
          fontWeight: 'bold',
          fontSize: '18px',
          marginBottom: '10px',
        }}
      >
        Take Deliveroo with you
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ display: 'flex', flexGrow: 1 }}
      >
        <Link href="your-link-for-png-image" sx={{ marginBottom: '10px' }}>
          <img
            src={Apple}
            alt="Logo PNG"
            style={{ width: '160px', height: '50px' }}
          />
        </Link>
        <Link href="your-link-for-png-image">
          <img
            src={Google}
            alt="Logo PNG"
            style={{ width: '160px', height: '50px' }}
          />
        </Link>
      </Grid>
    </Container>
  );
};

export default IconCard;
