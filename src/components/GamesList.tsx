import { Container } from "@mui/material";
import { useState } from "react";
import { row } from "../styles";
import { Game } from "../types";
import { GameCard } from './GameCard';
import { GameDetailsDialog } from "./GameDetailsDialog";

type GamePreviewProps = {
  games: Game[]
}

export const GamesList = (props: GamePreviewProps) => {
  const { games } = props;
  const [selectedGame, setSelectedGame] = useState<Game | undefined>();

  const handleClick = (gameId: string) => {
    const findGame = games.find(game => game.id === gameId)
    if (findGame) {
      setSelectedGame(findGame)
    }
  }

  const handleClose = () => setSelectedGame(undefined)

  return (
    <Container
      sx={{
        ...row,
        justifyContent: "center",
        gap: .5,
      }}>
      {games.map(game =>
        <GameCard
          key={game.id}
          game={game}
          onClick={handleClick}
        />
      )}
      {
        selectedGame &&
        <GameDetailsDialog
          game={selectedGame}
          onClose={handleClose}
          open={selectedGame !== undefined}
        />
      }
    </Container >
  );
}
