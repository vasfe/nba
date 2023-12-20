
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Box } from '@mui/material';
import { Stats, nbaPlayerStats } from '../types';

type SeasionAverageTableProps = {
    data: Stats[],
    loading: boolean,
    additionalColDefs?: GridColDef[]
}

const baseStatsColDefs: GridColDef[] = nbaPlayerStats.map(columnName => ({
    field: columnName,
    headerName: columnName,
    width: 58,
    type: "number"
}))

export const StatsTable = (props: SeasionAverageTableProps) => {
    const { data, loading, additionalColDefs = [] } = props;

    const columnsRefs: GridColDef[] = [
        ...additionalColDefs,
        ...baseStatsColDefs
    ]

    return (
        <Box sx={{ width: "100%" }}>
            <DataGrid
                rows={data}
                columns={columnsRefs}
                disableColumnMenu
                loading={loading}
                getRowId={(r: Stats) => r.id}
                />
        </ Box>
    )
}
