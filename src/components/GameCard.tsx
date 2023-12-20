import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useMemo } from "react";
import { getTeamLogo } from '../logoes';
import { column, row } from "../styles";
import { Game } from "../types";

const logoSize = 60;

type GameCardProps = {
    game: Game,
    onClick?: (gameid: string) => void
}

export const GameCard = (props: GameCardProps) => {
    const { game, onClick } = props;

    const HomeTeamLogo = getTeamLogo(game.homeTeam.abbreviation)
    const VisitorTeamLogo = getTeamLogo(game.visitorteam.abbreviation)

    const showScore = useMemo(() => game.status.toString().includes("Qtr") || game.status === "Final", [game.status])

    return (
        <Card
            key={game.id}
            sx={{ width: 400 }}
            >
            <CardActionArea
                disabled={!onClick}
                onClick={() => onClick && onClick(game.id)}
            >
                <CardContent>
                    <Box sx={{ ...row, justifyContent: "space-evenly" }}>
                        <Box sx={{...column, flex:1}}>
                            {HomeTeamLogo && <HomeTeamLogo width={logoSize} />}
                            <Typography sx={{textWrap:"wrap"}}>{game.homeTeam.name}</Typography>
                        </Box>
                        {
                            showScore ?
                                <Box sx={{ ...row, gap: .5 }}>
                                    <Typography variant="h6">{game.homeTeamScore}</Typography>
                                    -
                                    <Typography variant="h6">{game.visitorTeamScore}</Typography>
                                </Box>
                                :
                                <Box sx={{ ...row}}>
                                     <Typography variant="h6">{dayjs(game.status).format("hh:mm A")}</Typography>
                                </Box>
                        }
                        <Box sx={{...column, flex:1}}>
                            {VisitorTeamLogo && <VisitorTeamLogo width={logoSize} />}
                            <Typography>{game.visitorteam.name}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
