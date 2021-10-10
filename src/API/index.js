async function request(method, url, params = "") {
    try {
        let response = await fetch(url + params, {
            method: method
        })
        return response.json()
    } catch (error) {
        console.log(`Issue with fetch: ${error.message}`);
    }
}

export async function getGamesForDay(date) {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear
    const teams = await request("GET", `https://data.nba.net/10s/prod/v2/${season}/teams.json`)
    const daysGames = await request("GET", `https://data.nba.net/10s/prod/v1/${date}/scoreboard.json`)
    return daysGames.games.reduce((games, game) => {
        const gameDate = new Date(game.startTimeUTC)
        games.push(
            {
                hTeam: {
                    fullName: teams.league.standard.filter((team) => team.teamId === game.hTeam.teamId)[0].fullName,
                    score: game.hTeam.score,
                    seriesWin: game.hTeam.seriesWin//change before playoffs
                },
                vTeam: {
                    fullName: teams.league.standard.filter((team) => team.teamId === game.vTeam.teamId)[0].fullName,
                    score: game.vTeam.score,
                    seriesWin: game.vTeam.seriesWin//change before playoffs
                },
                date: game.homeStartDate,
                time: `${gameDate.toTimeString().split(':')[0]}:${gameDate.toTimeString().split(':')[1]}`,
                key: game.gameId,
                gameId: game.gameId,
                startTimeTBD: game.isStartTimeTBD,
                arena: `${game.arena.name}, ${game.arena.city} `,
                isActiveGame: game.isGameActivated,
                isEnded: ((game.endTimeUTC == undefined) ? false : true),
                clock: game.clock,
                period: game.period.current
            })
        return games
    }, [])
}

export async function getPlayerStats(player) {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear
    const playersStats = await request("GET", `https://data.nba.net/10s/prod/v1/${season}/players/${player.id}_profile.json`)
    let careerStats = playersStats.league.standard.stats.careerSummary;
    const seasonStats = playersStats.league.standard.stats.regularSeason.season.map(season =>
        ({ season: season.seasonYear, stats: season.total }))
    return { name: player.name, careerStats: careerStats, seasonStats: seasonStats };
}

export async function getPlayers() {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear
    const playersResponse = await request("GET", `https://data.nba.net/prod/v1/${season}/players.json`)
    return playersResponse.league.standard.reduce((players, player) => {
        players.push({ name: `${player.firstName} ${player.lastName}`, id: player.personId })
        return players
    }, []);
}