import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { grey } from '@mui/material/colors';

export const ThemeContext = createContext({ toggleColorMode: () => { }, mode: "dark" });

type ThemeContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    const { children } = props;
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            mode
        }),
        [mode],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                color: mode === "light" ? grey[700] : grey[300]
                            },
                        },
                    },
                },
            }),
        [mode],
    );

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={colorMode}>
                <CssBaseline />
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}
