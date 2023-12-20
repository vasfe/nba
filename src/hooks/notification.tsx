import { createContext, useCallback, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type NotificationType = "error" | "info"

export type Notification = {
    type: NotificationType,
    message: string
}


export const NotificationContext = createContext<{
    notify: (notification: Notification) => void
}>({
    notify: () => { console.error("no notification provider") }
});

type NotificationProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export const NotificationProvider = (props: NotificationProviderProps) => {
    const { children } = props;
    const [notification, setNotification] = useState<Notification | undefined>();

    const notify = useCallback(
        (notification: Notification) => {
            setNotification(notification)
            setTimeout(() => {
                setNotification(undefined)
            }, 2000)
        },
        [],
    );

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}
            {notification && <ToastNotification notification={notification} />}
        </NotificationContext.Provider>
    )
}

type ToastProps = {
    notification: Notification
}

const ToastNotification = (props: ToastProps) => {
    const { notification } = props;

    return (
        <Snackbar
            open={true}
        >
            <Alert
                severity={notification?.type}
                sx={{
                    width: '100%'
                }}>
                {notification?.message}
            </Alert>
        </Snackbar>
    );
}

export const useNotification = () => useContext(NotificationContext)