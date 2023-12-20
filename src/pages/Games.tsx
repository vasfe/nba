import { CircularProgress, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DateNav, GamesList } from '../components';
import { useGames } from '../hooks/games';
import { page } from '../styles';

export const Games = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [date, setDate] = useState<string>();
    const { games, findGames } = useGames()

    useEffect(() => {
        if (date) {
            setLoading(true)
            findGames(date).then(() => {
                setLoading(false)
            })
        }
    }, [date, findGames]);

    const handleDateChange = (newDate: string) => {
        setDate(newDate)
    }

    return (
        <Container sx={page}>
            <DateNav onDateChange={handleDateChange} />
            {loading ?
                <CircularProgress sx={{ color: "white", marginTop: 10 }} />
                : games.length ?
                    <GamesList games={games} />
                    : <Typography> No Games Today :(</Typography>}
        </Container>
    )
}
