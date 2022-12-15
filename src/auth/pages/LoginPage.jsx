import { Grid, Typography, TextField, Button } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Jeremy Mejia' );

    navigate(lastPath, {
      replace: true,
    })
  }

  return (
    <Grid container
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Grid item
        padding={3}
        borderRadius={3}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" color="inherit">Login</Typography>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="1"
              label="Nombre"
              placeholder="Ingresa tu nombre"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={onLogin}
              sx={{ my: 1, }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
