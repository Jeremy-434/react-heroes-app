import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { blueTheme } from './';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ blueTheme }>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
