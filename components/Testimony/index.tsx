import './style.scss'

type Props = {
  avatarUrl: string,
  name: string,
  text: string
}

export default function Testimony({ avatarUrl, name, text }: Props) {

  return (
    <div className="testimony">
    <div className="testimony__avatar" style={{backgroundImage: `url('${avatarUrl}')`}}>

    </div>
    <div className="testimony__name">
      {name}
    </div>
    <div className="testimony__text">
      {text} 
    </div>
  </div>
  );
}