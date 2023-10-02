/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

interface MenuItemProps {
  dishName: string;
  description: string;
  imageUrl: string;
  currency: string;
  mrp: number;
}

const MenuItemCard = ({
  dishName,
  description,
  imageUrl,
  currency,
  mrp,
}: MenuItemProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const mobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            boxShadow: '0px 10px 10px -5px rgba(0,0,0,0.16)',
            backgroundColor: '#ffffff',
          },
        }}
        onClick={handleClickOpen}
      >
        <CardActionArea disableRipple>
          <div style={{ display: 'flex', height: '140px' }}>
            <div style={{ flex: 1, maxWidth: '70%' }}>
              <CardContent sx={{ padding: '5' }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontWeight: '700',
                    overflow: 'hidden',
                    maxHeight: '3em',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                  }}
                  gutterBottom
                >
                  {dishName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#585c5c',
                    overflow: 'hidden',
                    maxHeight: '3em',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: '#585c5c',
                    marginTop: '5px',
                  }}
                >
                  {currency}
                  {mrp}
                </Typography>
              </CardContent>
            </div>
            <div style={{ maxWidth: '40%' }}>
              <CardMedia
                style={{
                  flex: 1,
                  width: '120px',
                  marginTop: '18px',
                  marginLeft: '10px',
                  marginRight: '10px',
                }}
                component="img"
                height="110px"
                image={imageUrl || '/src/assets/images/Dishpic.jpg'}
                alt="dish"
              />
            </div>
          </div>
        </CardActionArea>
      </Card>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        sx={{ margin: 'auto', maxWidth: !mobile ? '40%' : 'none' }}
      >
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: 'white',
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ color: '#00ccbc' }} />
        </IconButton>
        <DialogContent sx={{ padding: '0' }}>
          <CardMedia
            component="img"
            sx={{ width: '100%' }}
            height={mobile ? '300px' : '400px'}
            image={imageUrl || '/src/assets/images/Dishpic.jpg'}
            alt="dish"
          />
          <Box sx={{ marginLeft: '10px' }}>
            <Typography
              sx={{
                color: '#2e3333',
                fontFamily: 'plex-sans,sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {dishName}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', lineHeight: '1.5', color: '#2e3333' }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              borderTop: '1px solid rgba(0, 0, 0, .08)',
              borderBottom: '1px solid rgba(0, 0, 0, .08)',
              marginLeft: '10px',
              marginTop: '15px',
              marginRight: '10px',
            }}
          >
            <Typography
              sx={{
                marginTop: '10px',
                color: '#585c5c',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {' '}
              Contains celery, gluten, nuts, sesame, soybeans, sulphur
              dioxide/sulphites
            </Typography>
            <Typography
              sx={{
                color: '#585c5c',
                fontSize: '14px',
                fontWeight: '400',
              }}
            >
              {' '}
              Questions about allergens, ingredients or cooking methods?
            </Typography>
            <Typography
              sx={{
                marginBottom: '10px',
                color: '#00b8a9',
                fontSize: '14px',
                fontWeight: '400',
              }}
            >
              {' '}
              Please contact the restaurant.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#d5d6d6',
            }}
          >
            <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: '24px' }} />
            <Typography
              sx={{
                marginLeft: '50px',
                marginRight: '50px',
                fontSize: '24px',
                color: '#abadad',
              }}
            >
              1
            </Typography>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: '24px' }} />
          </Box>
          <Button
            disableRipple
            sx={{
              color: 'rgb(171, 173, 173)',
              fontSize: '17px',
              width: '90%',
              fontWeight: 'bold',
              background: 'rgb(226, 229, 229)',
              textTransform: 'none',
              height: '50px',
              '&:hover': {
                background: 'rgb(226, 229, 229)',
                cursor: 'not-allowed',
              },
            }}
          >
            Add for {currency}
            {mrp}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MenuItemCard;
