import { Box } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RestaurantInfoCard from '../../components/Cards/RestaurantInfoCart';
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar';
import Menu from '../../components/Menu/Menu';
import { useEffect } from 'react';
import { updateTitle } from '../../utils/utils';
const HomePage = () => {
  useEffect(() => {
    updateTitle(
      "Tossed - St Martin's Lane delivery from Covent Garden - Order with Deliveroo"
    );
  }, []);

  return (
    <Box>
      <Header />
      <RestaurantInfoCard />
      <MenuNavBar />
      <Menu />
      <Footer />
    </Box>
  );
};

export default HomePage;
