import React from 'react';
import { StyledCard, Header } from './StyledComponents';
import LazyLoad from 'react-lazyload';
import Stats from "./Stats"

const PlayerCard = (props) => {
    return (
        <LazyLoad once>
            <StyledCard>
                <Header>{props.player.name}</Header>
                <hr />
                <Stats
                    title="Career Stats"
                    stats={Object.entries(props.player.careerStats)}
                />
                {props.player.seasonStats.map(season =>
                    <Stats
                        key={season.season}
                        title={season.season}
                        stats={Object.entries(season.stats)}
                    />
                )}
            </StyledCard>
        </LazyLoad>
    );
}

export default PlayerCard;