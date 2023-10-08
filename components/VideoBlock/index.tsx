import { MouseEventHandler } from 'react';
import './style.scss'

type Props = {
  imgUrl: string,
  videoUrl: string
}

export default function VideoBlock({imgUrl, videoUrl}: Props) {
  const onVideoBlockClick = (e: any) => {

    let element = e.currentTarget;
    let parrentElement = element.parentElement.parentElement;
    let videoCode = element.dataset.ytCode;
    let elemHeight = element.offsetHeight;
    let elemWidth = element.offsetWidth;
    let elementChild = element.children[0];
  
  
    if(videoCode && elementChild.nodeName === 'PICTURE') {
      let videoBlock = document.createElement('iframe');
      videoBlock.src = `https://www.youtube.com/embed/${videoCode}`;
      videoBlock.width = elemWidth;
      videoBlock.height = elemHeight;
      videoBlock.allowFullscreen = true;
      videoBlock.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"

      
      element.style.height = `${elemHeight}px`;
      element.style.width = `${elemWidth}px`;
      elementChild.remove();
      element.appendChild(videoBlock);
      element.classList.add('video-opened');
    }
  }

  return (
    <div className="video-block" data-yt-code='U9rAmaxdvNw' onClick={onVideoBlockClick}>
      <picture>
        <img src={imgUrl} alt="video" />
      </picture>
    </div>
  )
}