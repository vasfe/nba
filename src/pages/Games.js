import React, { useEffect } from 'react';
import DateNav from "../components/DateNav"
import Card from "../components/GameCard"
import { Spinner, Page, PageTitle, Container, Message } from '../components/StyledComponents';
import { useSelector, useDispatch } from 'react-redux'
import { loadGames } from '../store/reducers/games';
import { setDate } from '../store/actions/games'

const Games = () => {
    const games = useSelector(state => state.games.games);
    const loading = useSelector(state => state.games.loading);
    const date = useSelector(state => state.games.date);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames())
    }, [date]);

    const changeDate = (newDate) => {
        if (!isNaN(Date.parse(newDate)) && newDate.toString() !== date.toString()) {
            dispatch(setDate(newDate))
        }
    }
    const increaseOrDecreaseDate = (dayDifference) => {
        const newDate = new Date(Number(date))
        newDate.setDate(date.getDate() + dayDifference)
        dispatch(setDate(newDate))
    }

    let content = (
        <Container>
            {games.map(game =>
                <Card
                    {...game}
                />
            )}
        </Container>
    )
    
    return (
        <Page>
            <PageTitle>NBA Games</PageTitle>
            <DateNav
                onChange={changeDate}
                onArrowsClick={increaseOrDecreaseDate}
                date={date}
                disabled={loading}
            />
            {loading && <Spinner type="Circles" color="white" />}
            {!loading && games.length == 0 && <Message> No Game Found :(</Message>}
            {!loading && content}
        </Page>
    )
}
export default Games;