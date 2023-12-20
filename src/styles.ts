import { SxProps } from "@mui/material";

export const row: SxProps = {
    display: "flex",
    alignItems: 'center',
    flexWrap: 'wrap'
}

export const column: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "center"
}

export const page: SxProps = {
    ...column,
    mt: 1
}

