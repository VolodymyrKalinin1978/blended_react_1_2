import { formatDistanceToNow } from 'date-fns' 

export const getFormatedDateDistancToNow = (date) =>{
  return  formatDistanceToNow(
    new Date(date),
    {addSuffix: true}
  )
}