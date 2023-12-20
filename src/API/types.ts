
export type APIStats = {
    pts: number,
    reb: number,
    ast: number,
    stl: number,
    blk: number,
    turnover: number,
    min: number, 
    fgm: number, 
    fga: number, 
    fg3m:number,
    fg3a:number,
    ftm: number,
    fta: number,
    oreb: number,
    dreb: number,
    pf: number,
    fg_pct: number,
    fg3_pct: number,
    ft_pct: number,
    id: string
}

export type APISeasonAverages = Omit<APIStats, "id"> & {
    player_id: string,
    season: string
}
export type APIPlayer = {
    first_name: string;
    height_feet: number;
    height_inches: number;
    id: string;
    last_name: string;
    position: string;
};

export type APITeam = {
    id: string,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string,
}

export type APIGame = {
    id: string,
    date: string,
    home_team: APITeam,
    home_team_score: string,
    season: string,
    visitor_team: APITeam,
    visitor_team_score: string,
    period: string
    postseason: boolean
    status: string
    time: string
}

export type APIGameStats = Omit<APIStats, "id"> & {
    id: string,
    game: APIGame,
    player: APIPlayer,
    team: APITeam,
}

export type ResponseBody<T> = {
    data: T
}

