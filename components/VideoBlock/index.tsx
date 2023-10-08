import './style.scss'

type Props = {
  imgUrl: string,
  videoUrl: string
}

export default function VideoBlock({imgUrl, videoUrl}: Props) {


  return (
    <div className="video-block">
      <picture>
        <img src={imgUrl} alt="video" />
      </picture>
    </div>
  )
}