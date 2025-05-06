import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';

const navItems = ['about', 'skills', 'experience', 'resume']

function Header() {
    // const { mode } = parentToChild;

    // const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
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
    return (
        <Box component="nav" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
                <Toolbar className='navigation'>
                    <IconButton sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton >
                    <DarkModeIcon />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(item => (
                            <Button key={item} className="sections" onClick={() => scrollToSection(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;