import moment from 'moment';
const inputFormat = "YYYYMMDD"
const outPutFormat = "DD MM YYYY"

export function getDate(daysFromDate: number, date = moment().format(inputFormat)): string{
    if (daysFromDate === 0) return date
    else return moment(date).add(daysFromDate, "days").format(inputFormat)
}

export function formatDate(date: string, format=outPutFormat){
    return moment(date).format(format);
}