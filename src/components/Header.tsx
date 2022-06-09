import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface HeaderProps {
  name: string
}
/**
 * Header component.
 */
const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Link href="/" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography sx={{ color: 'white', fontWeight: '600' }}>Haystack</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;