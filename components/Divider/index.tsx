import './style.scss'

export default function Divider({text}: { text: string }) {
  return (
    <div className="devider" data-text={text}></div>
  )
}