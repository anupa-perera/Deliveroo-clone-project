import { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import axios from 'axios';
import { Link as ScrollLink } from 'react-scroll';

interface MenuItem {
  id: number;
  title: string;
}

const MenuNavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>('');
  const [labels, setButtonLabels] = useState<{ [key: string]: string }>({});

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };

  useEffect(() => {
    async function fetchTitles() {
      try {
        const response = await axios.post<MenuItem[]>(
          'https://qaconsumerapi.eatmeglobal.org/api/v1/restaurantDetails/getMenuV2?countryCode=SG',
          {
            uuid: 'e9a92fa0-82af-479b-9450-07d7de46c26a',
            restModule: 'PickUp',
          },
          {
            headers: {
              Authorization: import.meta.env.VITE_TOKEN,
            },
          }
        );

        const updatedLabels: { [key: string]: string } = {};

        response.data.forEach((item) => {
          const key = item.id.toString();
          if (item.id === 5913) {
            updatedLabels[key] = 'Burgers';
          } else {
            updatedLabels[key] = item.title;
          }
        });

        const firstKey = Object.keys(updatedLabels)[0];
        setActiveNavItem(firstKey);

        setButtonLabels(updatedLabels);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTitles();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(labels).map((key) =>
        document.getElementById(key)
      );
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY + 150) {
          setActiveNavItem(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [labels]);

  return (
    <Box sx={{ position: 'sticky', top: '70px', bottom: '20px', zIndex: 1000 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', overflowX: 'auto' }}>
          {Object.entries(labels).map(([key, value]) => (
            <ScrollLink
              key={key}
              to={key}
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              <Button
                onClick={() => handleNavItemClick(key)}
                sx={{
                  backgroundColor: activeNavItem === key ? '#00CCBC' : 'none',
                  color: activeNavItem === key ? 'white' : '#00CCBC',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'none',
                  fontSize: '14px',
                  marginRight: '1rem',
                  borderRadius: '0.8rem',
                  maxHeight: '25px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: activeNavItem === key ? 'bold' : 'normal',
                  '&:hover': {
                    backgroundColor: activeNavItem === key ? '#00CCBC' : 'none',
                  },
                  '@media (max-width: 600px)': {
                    marginRight: '0.5rem',
                    fontSize: '12px',
                    maxWidth: '80px',
                  },
                }}
              >
                {value}
              </Button>
            </ScrollLink>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuNavBar;
