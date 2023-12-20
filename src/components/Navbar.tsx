import React, { useContext } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import { AppBar, Button, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { grey } from '@mui/material/colors';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../hooks/theme';
import { NBA } from '../logoes';
import { routes } from '../routes';

const drawerWidth = 240;

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { pathname } = useLocation();

    const { toggleColorMode } = useContext(ThemeContext)
    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    return (
        <Paper >
            <AppBar position="sticky">
                <Toolbar
                    sx={{
                        display: "flex",
                        gap: 2,
                        height: 65
                    }}
                >
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { sm: 'none' }
                        }}
                    >
                        <NBA
                            width={40}
                            height={40}
                        />
                    </IconButton>
                    <Box sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        },
                        alignItems: "center"
                    }}>
                        <NBA
                            width={40}
                            height={40}
                        />
                        <Box sx={{ ml: 3 }}>
                            {routes.map(({ label, url }) => (
                                <Button
                                    key={label}
                                    component={NavLink}
                                    to={url}
                                    sx={{
                                        letterSpacing: ".6px",
                                        fontWeight: 800,
                                        padding: '10px 25px',
                                        borderBottomWidth: pathname === url ? 4 : 0,
                                        borderStyle: "solid",
                                        borderColor: grey[500]
                                    }}
                                >{label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                        <IconButton onClick={toggleColorMode}                    >
                            <Brightness4Icon sx={{ width: 15, height: 15 }} />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Box>
                    <Drawer
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
                        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                            <Box sx={{ mt: .5 }}>
                                <NBA width={40} height={40} />
                            </Box>
                            <Divider />
                            <List>
                                {routes.map(({ label, url }) => (
                                    <ListItem key={label} disablePadding>
                                        <ListItemButton
                                            component={NavLink}
                                            sx={{ textAlign: 'center' }}
                                            to={url}
                                        >
                                            <ListItemText primary={label} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </AppBar>
        </Paper>
    );
}