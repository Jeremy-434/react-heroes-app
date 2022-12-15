import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Divider, Grid, Link, Toolbar, Typography } from '@mui/material';
import { InputSearch } from '../../heroes/components/InputSearch';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Face, Logout } from '@mui/icons-material';

export const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const onLogout = () => {
    logout();
    // navigate('/login', {
    //   replace: true
    // });
    // redirect('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Link
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{ mr: 4 }}
            to="/"
          >
            <Typography
              fontSize={24}
              fontWeight={600}
              border={0}
              borderRight={2}
              paddingRight={4}
            >
              Associations
            </Typography>
          </Link>
          <Divider color="blue" />

          <Grid container justifyContent="space-between" alignItems={'center'}>
            <Grid item>
              <Link
                component={RouterLink}
                color="inherit"
                underline="none"
                sx={{ mr: 2 }}
                to="/marvel"
              >
                Marvel
              </Link>

              <Link
                component={RouterLink}
                color="inherit"
                underline="none"
                sx={{ mr: 2 }}
                to="/dc"
              >
                DC
              </Link>
            </Grid>
            <Grid item
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <InputSearch />
              {
                user
                  ? <Face titleAccess={user?.name} />
                  : <></>
              }
              <Button
                variant="text"
                color="error"
                onClick={onLogout}
              >
                <Logout />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
