export function Tag({ children, variante }) {
  return <span className={'tag' + (variante ? ' secondaire' : '')}>{children}</span>
}
