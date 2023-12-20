import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './hooks/theme';
import { NotificationProvider } from './hooks/notification';

const container = document.getElementById('app');
const root = createRoot(container!)

root.render(
    <StrictMode>
        <ThemeContextProvider>
            <NotificationProvider>
                <App />
            </NotificationProvider>
        </ThemeContextProvider>
    </StrictMode>
);
