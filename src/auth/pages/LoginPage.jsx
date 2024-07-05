import { Grid, Typography, TextField, Button } from "@mui/material"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";
import { gsap } from "gsap";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Jeremy Mejia');

    navigate(lastPath, {
      replace: true,
    })
  }

  useEffect(() => {
    gsap.to(".loginContainer", {scale: 20, duration: 1 });
  }, []);

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
        borderRadius={3}
        className="loginContainer"
      >
        <Typography
          variant="h4"
          color="#fff"
          fontSize={10}
          fontFamily={`"Noto Sans Old Persian", sans-serif`}
          onClick={onLogin}
          sx={{ cursor: "pointer" }}
        >
          Heroes App
        </Typography>
      </Grid>
    </Grid>
  )
}
