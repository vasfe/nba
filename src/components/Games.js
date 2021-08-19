import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { getData } from '../API';
import { getDate } from '../data';
import Nav from "./Navbar"
import Card from "./Card"

const Spinner = styled(Loader)`
    width: fit-content;
    margin: 20px auto;
`;

const CardsContainer = styled.div`
    background-color: #3d424d;
    font-size: calc(8px + 2vmin);
    color: white;
    display: flex;
    flex-direction: column;
`;

const PageTitle = styled.div`
    margin: 10px auto;
    text-align: center;
    font-size: calc(13px + 2vmin);
`;

const Page = styled.div`
    color: white;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`;

const Message = styled.p`
    width: fit-content;
    margin: 10px auto;
    font-size: calc(5px + 2vmin);
`;

const Games = () => {
    const [games, setGames] = useState([])
    const [searching, setSearching] = useState(true)
    const [date, setDate] = useState(getDate(0))

    const getDaysGames = () => {
        setSearching(true)
        getData(date).then(games => {
            setGames(games)
            setSearching(false)
        })
    }

    useEffect(() => {
        getDaysGames(date);
    }, [date]);

    const changeDate = (daysFromCurrentDate) => {
        setDate(getDate(daysFromCurrentDate, date))
    }

    let content =
        <CardsContainer>
            {games.map(game =>
                <Card
                    {...game}
                />
            )}
        </CardsContainer>

    if (games.length == 0) {
        content =
            <Message> No Game Found :(</Message>
    }

    if (searching) {
        content = <Spinner type="Circles" color="white" height={80} width={80} />
    }

    return (
        <Page>
            <PageTitle>NBA Games</PageTitle>
            <Nav
                navigation={changeDate}
                date={date}
                disabled={searching}
            />
            {content}
        </Page>
    )
}
export default Games;