import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { useGameDetails } from '../hooks/games';
import { getTeamLogo } from '../logoes';
import { column, row } from '../styles';
import { Game, GameStats } from '../types';
import { getShortName } from '../utils';
import { StatsTable } from './StatsTable';
import { useNotification } from '../hooks/notification';

type GameDetailsProps = {
    game: Game,
    open: boolean,
    onClose: () => void
}

export const GameDetailsDialog = (props: GameDetailsProps) => {
    const { game, onClose, open = true } = props;

    const [loading, setLoading] = useState<boolean>(true);
    const { gameStats, loadGameStats } = useGameDetails()
    const { notify } = useNotification();

    const homeTeamStatsData = useMemo<GameStats[]>(() =>
        gameStats.filter((g) => g.team.id === game.homeTeam.id), [game.homeTeam.id, gameStats])
        .map((gameStats) => {
            const { player, team, ...stats } = gameStats
            return { name: getShortName(player), ...stats }
        })

    const VisitorTeamStatsData = useMemo<GameStats[]>(() =>
        gameStats.filter((g) => g.team.id === game.visitorteam.id), [game.visitorteam.id, gameStats])
        .map((gameStats) => {
            const { player, team, ...stats } = gameStats
            return { name: getShortName(player), ...stats }
        })

    const HomeTeamLogo = getTeamLogo(game.homeTeam.abbreviation)
    const VisitorTeamLogo = getTeamLogo(game.visitorteam.abbreviation)

    // if game is ongoing or finished
    const showStats = useMemo(() => game.status.toString().includes("Qtr") || game.status === "Final", [game.status])

    useEffect(() => {
        if (showStats) {
            loadGameStats(game.id)
                .catch((e) => {
                    notify({
                        type: "error",
                        message: e.message
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [game.id, loadGameStats, notify, showStats]);

    return (
        <Dialog
            onClose={onClose}
            open={open}
            maxWidth="xl"
        >
            <Box
                sx={{
                    ...row,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1
                }}
            >
                <HomeTeamLogo width={60} height={60} />
                {
                    showStats ?
                        <Box sx={{ display: "flex", gap: .5 }}>
                            <Typography sx={{ fontWeight: "bold" }}>{game.homeTeamScore}</Typography>
                            -
                            <Typography sx={{ fontWeight: "bold" }}>{game.visitorTeamScore}</Typography>
                        </Box>
                        :
                        <Typography>{dayjs(game.status).format("hh:mm A")}</Typography>
                }
                <VisitorTeamLogo width={60} height={60} />
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 2,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent dividers>
                <Box sx={column}        >
                    <Typography variant='h6'>{game.homeTeam.fullName} </Typography>
                    <StatsTable
                        data={homeTeamStatsData}
                        additionalColDefs={[{
                            field: "name",
                            headerName: "",
                            width: 120
                        }]}
                        loading={loading}
                    />
                    <Typography variant='h6'>{game.visitorteam.fullName} </Typography>
                    <StatsTable
                        data={VisitorTeamStatsData}
                        additionalColDefs={[
                            {
                                field: "name",
                                headerName: "",
                                width: 120
                            }
                        ]
                        }
                        loading={loading}
                    />
                </Box >
            </DialogContent>
        </Dialog>
    )
}
