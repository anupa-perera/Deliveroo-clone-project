/* eslint-disable prettier/prettier */
import { Grid, Container, Link, Typography } from '@mui/material';

interface FooterCardProps {
  title: string;
  options: {
    label: string;
    link: string;
  }[];
}

const FooterCard = ({ title, options }: FooterCardProps) => {
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
          marginBottom: '8px',
        }}
      >
        {title}
      </Typography>
      <Grid container direction="column" sx={{ display: 'flex', flexGrow: 1 }}>
        {options.map((option) => (
          <Grid item key={option.label} sx={{ marginBottom: '10px' }}>
            <Link
              href={option.link}
              underline="none"
              sx={{
                color: 'white',
                display: 'flex',
                fontFamily: 'plex-sans,sans-serif',
                fontSize: '14px',
                marginBottom: '5px',
              }}
            >
              {option.label}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FooterCard;
