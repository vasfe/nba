import moment from 'moment';
const dateInputFormat = "YYYYMMDD"
const dateOutPutFormat = "DD MM YYYY"
const timeFormat = "HH:mm"

export function getDate(daysFromDate: number, date = moment().format(dateInputFormat)): string{
    if (daysFromDate === 0) return date
    else return moment(date).add(daysFromDate, "days").format(dateInputFormat)
}

export function formatDate(date: string, format=dateOutPutFormat){
    return moment(date).local().format(format);
}

export function formatTime(time: string){
    return moment(time).local().format(timeFormat)
}