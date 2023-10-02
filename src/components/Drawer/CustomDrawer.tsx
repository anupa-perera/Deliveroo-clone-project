import Drawer from '@mui/material/Drawer';
import { Button, Container, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Box from '@mui/material/Box';

type Anchor = 'right';

interface DrawerProps {
  anchor: Anchor;
  open: boolean;
  onClose: () => void;
}

const CustomDrawer = ({ anchor, open, onClose }: DrawerProps) => {
  const signupClickHandler = () => {
    window.location.href = '/login';
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{ style: { background: 'white', width: '400px' } }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'rgb(235, 235, 235)',
          height: '74px',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginRight: '50px',
          }}
        >
          <Box>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo.png"
              style={{
                height: '66px',
                marginRight: '100px',
                paddingRight: '100px',
                paddingLeft: '10px',
              }}
              alt="logo"
            />
            <CloseIcon
              sx={{
                width: '24px',
                height: '24px',
                marginBottom: '20px',
                color: '#00ccbc',
                cursor: 'pointer',
              }}
              onClick={onClose}
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: 'plex-sans, sans-serif',
              textTransform: 'none',
              width: '100%',
              backgroundColor: '#00ccbc',
              '&:hover': {
                backgroundColor: '#00ccbc',
              },
              border: '1px solid #00ccbc',
              marginTop: '30px',
              marginBottom: '20px',
            }}
            onClick={signupClickHandler}
          >
            Sign up or log in
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpOutlineIcon
              sx={{ fontSize: '25px', marginRight: '12px', color: '#BBBBBB' }}
            />
            <Typography sx={{ fontSize: '15px' }}>FAQs</Typography>
          </Box>
        </Container>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
