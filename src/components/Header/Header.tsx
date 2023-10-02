<<<<<<< Updated upstream
=======
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { Box, Grid, IconButton, InputBase } from '@mui/material';
import CustomDrawer from '../Drawer/CustomDrawer';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../selector/selectors';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 950);
  const isLoggedin = useSelector(selectisLoggedIn);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawer(open);
  };

  const logoClickHandler = () => {
    if (isLoggedin) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const signupClickHandler = () => {
    window.location.href = '/login';
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 950);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: location.pathname === '/' ? 0 : 'none',
        background: '#fff',
        borderBottom: '1px solid rgba(0, 0, 0, .08)',
        marginTop: '10px',
        zIndex: 1000,
        height: '70px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          paddingLeft: 0,
          fontStyle: 'Helvetica Neue',
          maxWidth:
            (location.pathname === '/login' ||
              location.pathname === '/registration') &&
            !isMobileView
              ? '60%'
              : '95%',
          margin: '0 auto',
          marginBottom: '15px',
          height: '100%',
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: '10px', marginBottom: '20px' }}
        >
          <Grid item className="logo">
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              onClick={logoClickHandler}
            >
              <img
                src="src/assets/images/deliveroo-logo.svg"
                alt="Deliveroo Logo"
                width="121"
                height="32"
              />
            </Link>
          </Grid>
          {location.pathname === '/' && (
            <Grid item className="searchbar">
              {isMobileView ? (
                <IconButton
                  style={{
                    border: '1px solid #D1D4D4',
                    borderRadius: '4px',
                  }}
                >
                  <SearchIcon style={{ color: '#00CCBC' }} />
                </IconButton>
              ) : (
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: searchFocused ? 'white' : '#F2F3F5',
                    border: searchFocused
                      ? '2px solid black'
                      : '1px solid transparent',
                    borderRadius: '5px',
                    height: '45px',
                  }}
                >
                  <InputBase
                    placeholder="Search Tossed - St Martin's Lane"
                    sx={{
                      width: isMobileView ? '100%' : '600px',
                      border: 'none',
                      outline: 'none',
                      '&:focus': {
                        border: 'none',
                      },
                    }}
                    startAdornment={
                      <IconButton size="small">
                        <SearchIcon style={{ color: 'rgb(171, 173, 173)' }} />
                      </IconButton>
                    }
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                  />
                </Grid>
              )}
            </Grid>
          )}

          <Grid item className="buttons">
            {(location.pathname === '/login' ||
              location.pathname === '/registration') &&
              !isMobileView && (
                <Button
                  variant="outlined"
                  size="medium"
                  startIcon={<HouseOutlinedIcon style={{ color: '#00ccbc' }} />}
                  sx={{
                    color: '#2e3333',
                    fontFamily: 'plex-sans, sans-serif',
                    textTransform: 'none',
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'white',
                      border: '1px solid #D1D4D4',
                    },
                    border: '1px solid #D1D4D4',
                    marginRight: 1,
                  }}
                  onClick={signupClickHandler}
                >
                  Sign up or log in
                </Button>
              )}
            <Button
              variant="outlined"
              startIcon={
                <PersonOutlineOutlinedIcon style={{ color: '#00ccbc' }} />
              }
              sx={{
                color: '#2e3333',
                fontFamily: 'plex-sans, sans-serif',
                textTransform: 'none',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  border: '1px solid #D1D4D4',
                },
                border: '1px solid #D1D4D4',
              }}
              onClick={toggleDrawer(true)}
            >
              Account
            </Button>
            <CustomDrawer
              anchor="right"
              open={drawer}
              onClose={toggleDrawer(false)}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
>>>>>>> Stashed changes
