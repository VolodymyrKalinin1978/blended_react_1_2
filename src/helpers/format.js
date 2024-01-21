import { format } from 'date-fns';

export const getFormatedDateFormat = (date) => {
    return format(new Date(date), 'Pp')
}