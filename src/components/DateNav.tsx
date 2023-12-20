import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { Button, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

type DateNavProps = {
  onDateChange: (newDate: string) => void
}

export const DateNav = (props: DateNavProps) => {
  const { onDateChange } = props;

  const [dateString, setdateString] = useState<string>(new Date().toISOString().split("T")[0])

  const handleChangeDate = useCallback((value: dayjs.Dayjs | null) => {
    if (value) {
      onDateChange(value.toISOString().split("T")[0])
    }
  }, [onDateChange])

  const handleIncreaseDate = useCallback(() => {
    const nextDay = dayjs(dateString).add(1, 'day')
    setdateString(nextDay.toISOString().split("T")[0])
  }, [dateString])

  const handleDecreaseDate = useCallback(() => {
    const previousDay = dayjs(dateString).add(-1, 'day')
    setdateString(previousDay.toISOString().split("T")[0])
  }, [dateString])

  useEffect(() => {
    onDateChange(dateString)
  }, [dateString, onDateChange])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper sx={{ display: "flex", flexWrap: "no-wrap" }}>
        <Button onClick={handleDecreaseDate}>
          <ArrowBack />
        </Button>
        <DatePicker
          value={dayjs(dateString)}
          format='YYYY-MM-DD'
          onChange={handleChangeDate}
          sx={{ width: 150 }}
        />
        <Button onClick={handleIncreaseDate}>
          <ArrowForward />
        </Button>
      </Paper>
    </LocalizationProvider>
  )
}
