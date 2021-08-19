import moment from 'moment';

const dateInputFormat = "YYYYMMDD"

export const dateOutPutFormat = (date) => moment(date).local().format("DD MM YYYY");
export const formatTime = (time) => moment(time).local().format("HH:mm")

export function getDate(daysFromDate, date = moment().format(dateInputFormat)) {
    // if (daysFromDate === 0) return date
    // else 
    return moment(date).add(daysFromDate, "days").format(dateInputFormat)
}
