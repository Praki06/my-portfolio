import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const navItems = ['about', 'skills', 'experience', 'resume']
const drawerWidth = 240;

function Header() {
    // const { mode } = parentToChild;

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navigation");
            if (navbar) {
                const scrolled = window.scrollY > navbar.clientHeight;
                setScrolled(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (section: string) => {
        if (section === 'resume') {
            window.open('/Prakash-Sathiakumar.pdf')
        } else {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }
    const drawer = (
        <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <p className="mobile-menu-top"><ListIcon />Menu</p>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item)}>
                            <ListItemText primary={item.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box component="nav" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
                <Toolbar className='navigation-bar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton >
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(item => (
                            <Button key={item} className="sections" onClick={() => scrollToSection(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Header;