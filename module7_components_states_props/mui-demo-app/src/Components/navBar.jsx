import React, { useState } from 'react'
import {AppBar,Toolbar,Typography,Box,IconButton, List, ListItem, ListItemText, Button, Drawer,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Services', 'Contact'];


export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle =() =>{
        setMobileOpen(!mobileOpen);
    };

    const drawer =(
        <Box onClick={handleDrawerToggle} sx={{textAlign : 'center'}}>
            <Typography variant='h6' sx={{my:2}}>
                MyLogo
            </Typography>
            <List>
                {navItems.map((item)=> (
                    <ListItem button key={item}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

  return (
    <>
    <AppBar component="nav">
        <Toolbar>
            <Typography
            variant='h6'
            component="div"
            sx={{ flexGrow:1, display :{xs: 'none', sm:'block'}}}
            >
                MyLogo
            </Typography>

        <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{display : {sm: 'none'}}}
        >
            <MenuIcon />
        </IconButton>

        {/*Desktop links */}
        <Box sx={{display : {xs: 'none' , sm:'block'}}}>
        {navItems.map((item) =>(
            <Button key={item} sx={{color : '#f1f1f1'}}>
                {item}
            </Button>
        ))}
        </Box>
    </Toolbar>
    </AppBar>

    {/*Mobile Drawer */}
    <Drawer
    anchor='left'
    open={mobileOpen}
    onClose={handleDrawerToggle}
    sx={{display : {sm : 'none'}}}
    >
        {drawer}
    </Drawer>

    <Toolbar />
    </>
  )
}
