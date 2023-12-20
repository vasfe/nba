import { useCallback, useEffect, useRef, useState } from 'react';

import { Container } from '@mui/material';
import { PlayerSearch } from '../components';
import { StatsTable } from '../components';
import { useNotification } from '../hooks/notification';
import { useSeasonAverages } from '../hooks/players';
import { page } from '../styles';
import { Player, SeasonAverages } from '../types';
import { getFullName } from '../utils';

export const SeasonsAverages = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { seasonAverages, loadSeasonAverages } = useSeasonAverages();
    const seasonAveragesRef = useRef<SeasonAverages[]>()

    const {notify} = useNotification();
    const handleSearch = useCallback((player: Player, season: string) => {
        const findSeasonAverages = seasonAveragesRef.current?.find(averages => averages.playerId === player.id && averages.season === season)
        if (findSeasonAverages) {
            notify({
                type: "info",
                message: `${getFullName(player)} ${season} already displayed`
            })
            return
        }
        setLoading(true)
        loadSeasonAverages(season, player).catch((e: Error) => {
            notify({
                type: "error",
                message: e.message
            })
        }).finally(() => {
            setLoading(false)
        })
    }, [loadSeasonAverages, notify])


    useEffect(() => {
        seasonAveragesRef.current = seasonAverages
    }, [seasonAverages])

    return (
        <Container sx={page}>
            <PlayerSearch
                onSearch={handleSearch}
                disabled={loading} />
            <StatsTable
                loading={loading}
                data={seasonAverages}
                additionalColDefs={[
                    {
                        field: "name",
                        headerName: "",
                        width: 120
                    },
                    {
                        field: "season",
                        headerName: "Season",
                        width: 70
                    },
                ]}
            />
        </Container >
    )
}
