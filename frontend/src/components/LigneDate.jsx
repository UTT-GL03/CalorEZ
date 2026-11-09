import dayjs from '../lib/dates'

export function LigneDate({ date }) {
  return (
    <footer>
      <time dateTime={date}>{dayjs(date).format('D MMMM YYYY')}</time>
      <time dateTime={date}>{dayjs(date).fromNow()}</time>
    </footer>
  )
}
