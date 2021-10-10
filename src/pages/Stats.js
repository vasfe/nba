import React, { useEffect } from 'react';
import { Spinner, Row, Page, PageTitle, Container, StyledSelect as Select } from '../components/StyledComponents';
import Card from "../components/PlayerCard"
import { useSelector, useDispatch } from 'react-redux'
import { loadPlayers, loadStats } from '../store/reducers/stats';

const Stats = () => {

    const players = useSelector(state => state.stats.players);
    const searching = useSelector(state => state.stats.searching);
    const stats = useSelector(state => state.stats.stats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlayers())
    }, []);

    const handleSearch = (option) => {
        dispatch(loadStats({ name: option.label, id: option.value }))
    }

    const content =
        <Container>
            {stats.map(stat =>
                <Card
                    player={stat}
                    key={stat.name}
                />
            )}
        </Container>
    return (
        <Page>
            <PageTitle>NBA Stats</PageTitle>
            <Row>
                <Select
                    options={players.map(player => ({ label: player.name, value: player.id }))}
                    onChange={handleSearch}
                    placeholder="Browse Players"
                />
            </Row>
            {searching && <Spinner type="Circles" color="white" />}
            {content}
        </Page>
    )
}
export default Stats;