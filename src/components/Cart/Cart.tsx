import { AppBar, Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Cart = () => {
    const cartRef = useRef(null);

    return (
        <AppBar
            position="sticky"
            sx={{ background: 'none', boxShadow: 'none', marginTop:'40px' }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: '90%',
                    height: '220px',
                    background: 'white',
                    border: 1,
                    borderColor: 'rgb(239, 240, 240)',
                }}
                ref={cartRef}
            >
                <AddShoppingCartIcon
                    sx={{ color: 'rgb(171, 173, 173)', marginTop: '30px', fontSize: '50px' }}
                />
                <Typography sx={{
                    color: 'rgb(171, 173, 173)', fontSize: '16px', 
                    marginBottom: '40px'
                }}>
                    Your basket is empty
                </Typography>
                <Button
                    sx={{
                        color: 'rgb(171, 173, 173)',
                        fontSize: '17px',
                        width: '90%',
                        marginLeft: '5px',
                        marginRight: '5px',
                        fontWeight: 'bold',
                        background: 'rgb(226, 229, 229)',
                        textTransform: 'none',
                        height:'50px',
                    }}
                >
                    Go to checkout
                </Button>
            </Box>
        </AppBar>
    );
}

export default Cart;