<<<<<<< Updated upstream
=======
import FooterCard from "../FooterCard/FooterCard";
import { Box, Grid, Container, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconCard from "../FooterCard/IconCard";



const Footer = () => {
    const discoverOptions = [
        { label: 'Investors', link: 'Investors' },
        { label: 'About Us', link: 'About Us' },
        { label: 'Takeaway', link: 'Takeaway' },
        { label: 'More', link: 'More' },
        { label: 'Newsroom', link: 'Newsroom' },
        { label: 'Engineering blog', link: 'Engineering blog' },
        { label: 'Design blog', link: 'Design blog' },
        { label: 'Gift Cards', link: 'Gift Cards' },
        { label: 'Careers', link: 'Careers' },
        { label: 'Restaurant signup', link: 'Restaurant signup' },
        { label: 'Become a rider', link: 'Become a rider' },
];

    const legalOptions = [
        { label: 'Terms and Conditions', link: 'Terms and Conditions' },
        { label: 'Cookies', link: 'Cookies' },
        { label: 'Modern Slavery Statement', link: 'Modern Slavery Statement' },
        { label: 'Tax Strategy', link: 'Tax Strategy' },
        { label: 'Section 172 Statement', link: 'Section 172 Statement' },
    ];
    const helpOptions = [
        { label: 'Contacts', link: 'Contacts' },
        { label: 'FAQs', link: 'FAQs' },
        { label: 'Cuisines', link: 'Cuisines' },
        { label: 'Brands', link: 'Brands' },];
        
    return (
        <Box sx={{ backgroundColor: '#2E3333' }}>
            <Container sx={{padding:'12px'}}>
                <Grid container spacing={2} sx={{padding:'10px' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterCard title='Discover Deliveroo' options={discoverOptions} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterCard title='Legal' options={legalOptions} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterCard title='Help' options={helpOptions} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <IconCard />
                    </Grid>
                </Grid>
                <Grid container spacing={1} direction="row" alignItems="center" sx={{ marginBottom: '20px', padding:'10px' }}>
                    <Grid item xs={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FacebookRoundedIcon sx={{ color: 'white', marginRight: '10px' }} />
                            <TwitterIcon sx={{ color: 'white', marginRight: '10px' }} />
                            <InstagramIcon sx={{ color: 'white', marginRight: '10px' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            sx={{
                                color: 'rgb(62, 72, 63)',
                                fontSize: '14px',
                                fontFamily: 'Plex Sans, sans-serif',
                                lineHeight: '19px',
                                textAlign: 'right',
                            }}>
                            © 2023 Deliveroo
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
>>>>>>> Stashed changes
