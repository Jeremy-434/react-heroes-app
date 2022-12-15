import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material';


export const blueTheme = createTheme({
  palette:{
    primary: {
      main: '#262254'
    },
    secondary: {
      main: '#543883'
    },
    error: {
      main: red.A400
    }
  }
})
