import './style.scss'


type Props = {
  children: React.ReactNode
}


export default function SliderBlock({ children }: Props) {


  return (
    <div className="slider-block">
      {children}
    </div>
  )
}