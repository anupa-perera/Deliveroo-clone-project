import { useEffect, useState } from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import MenuItemCard from '../Cards/MenuItemCard';
import Cart from '../Cart/Cart';

interface MenuItem {
  id: number;
  title: string;
  data: {
    dishId: number;
    dishName: string;
    description: string;
    imageUrl: string;
    currency: string;
    mrp: number;
  }[];
}

const Menu = () => {
  const mobile = useMediaQuery('(max-width: 600px)');

  const [labels, setLabels] = useState<{ [key: string]: string }>({});
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post<MenuItem[]>(
          'https://qaconsumerapi.eatmeglobal.org/api/v1/restaurantDetails/getMenuItemsWebApp?countryCode=SG',
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

        setLabels(updatedLabels);
        setMenuItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Box sx={{ marginLeft: mobile ? '10px' : '20px' }}>
            <Typography
              sx={{
                fontSize: mobile ? '12px' : '14px',
                fontFamily: 'IBM Plex Sans, sans-serif',
                paddingTop: mobile ? '15px' : '30px',
                color: '#585c5c',
                '@media (max-width: 1200px)': {
                  paddingLeft: mobile ? '10px' : '20px',
                },
              }}
            >
              Adults need around 2000 kcal a day
            </Typography>
            {Object.entries(labels).map(([key, value]) => (
              <div id={key} key={key} style={{ marginBottom: '30px' }}>
                <Typography
                  sx={{
                    fontSize: '22px',
                    lineHeight: '28px',
                    fontWeight: '700',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  {value}
                </Typography>
                <Grid container spacing={2}>
                  {menuItems
                    .filter((menuItem) => menuItem.id.toString() === key)
                    .map((filteredMenuItem) =>
                      filteredMenuItem.data.map((item) => (
                        <Grid key={item.dishId} item xs={12} sm={4}>
                          <MenuItemCard
                            dishName={item.dishName}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            currency={item.currency}
                            mrp={item.mrp}
                          />
                        </Grid>
                      ))
                    )}
                </Grid>
              </div>
            ))}
          </Box>
        </Grid>
        {!mobile && (
          <Grid item xs={12} sm={3}>
            <div style={{ position: 'sticky', top: '160px', padding: '0' }}>
              <Cart />
            </div>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Menu;
