import { useCallback, useEffect, useMemo, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useSeasonAverages } from '../hooks/players';
import { row } from '../styles';
import { Player } from '../types';
import { getFullName } from '../utils';

const currentSeason = new Date().getFullYear();
const firstSeason = 1950;
const allSeasons = Array.from({ length: currentSeason - firstSeason }, (_, i) => currentSeason - i)

type SelectOption = {
    label: string,
    value: string
}

type PlayerSearchProps = {
    onSearch: (player: Player, seasom: string) => void,
    disabled: boolean
}

export const PlayerSearch = (props: PlayerSearchProps) => {
    const { onSearch, disabled } = props;
    const [search, setSearch] = useState<string>("");
    const [season, setSeason] = useState<string>(allSeasons[0].toString());
    const [playerId, setPlayerId] = useState<string>();
    const { players, lookUpPlayers } = useSeasonAverages();

    const playersMatchingSearch = useMemo(() =>
        players.filter(player => getFullName(player).toLowerCase().includes(search.toLowerCase())),
        [search, players]
    )

    const handleChangeSeason = useCallback((event: SelectChangeEvent) => {
        if (event.target && event.target.value) {
            setSeason(event.target.value)
        }
    }, [])

    const handleInput = useCallback((searchParam: string) => {
        setSearch(searchParam)
    }, [])

    const handleSetPlayer = useCallback((option: SelectOption | null) => {
        if (option) {
            setPlayerId(option.value)
        }
    }, [])

    const handleSearchStats = useCallback(() => {
        const player = players.find(player => player.id === playerId)
        if (player) {
            onSearch(player, season)
        }
        else {
            console.error(new Error("Player not found"))
        }
    }, [onSearch, playerId, players, season])

    useEffect(() => {
        if (search.length > 1) {
            lookUpPlayers(search)
        }
    }, [lookUpPlayers, search])

    return (
        <Box
            sx={row}>
            <Autocomplete
                loading={disabled}
                id="combo-box-demo"
                inputValue={search}
                onChange={(_, value) => handleSetPlayer(value)}
                onInputChange={(_, value) => handleInput(value)}
                sx={{ width: 200 }}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                options={playersMatchingSearch.map(
                    player => ({
                        label: getFullName(player),
                        value: player.id
                    })
                )}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Search Player"
                    />
                }
            />
            <FormControl >
                <InputLabel>Season</InputLabel>
                <Select
                    label="Season"
                    value={season.toString()}
                    onChange={handleChangeSeason}
                >
                    {allSeasons.map(season =>
                        <MenuItem
                            key={season}
                            value={season}>
                            {season}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            <Button
                onClick={handleSearchStats}
                disabled={!playerId || !season || disabled}
            >
                <SearchIcon />
            </Button>
        </Box>
    )
}
