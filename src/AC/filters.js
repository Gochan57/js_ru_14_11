import FILTER_DATE from '../constants'

export function filter_date(from, to){
  return {
    type: FILTER_DATE,
    payload: {
      from,
      to
    }
  }
}
