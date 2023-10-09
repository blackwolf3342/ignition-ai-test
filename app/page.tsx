'use client'
import InfoBlock from '@/components/InfoBlock/InfoBlock'
import styles from './page.module.scss'
import Image from 'next/image'
import SliderBlock from '@/components/SlyderBlock'
import Testimony from '@/components/Testimony'
import VideoBlock from '@/components/VideoBlock'

export default function Landing() {

  const upload = () => {
    
    const fileInput = document.getElementById('upload');
    if(fileInput) {
      fileInput.click();
    }
  }

  return (
    <main>
      <div className="container">
        <div className={styles.landing__blocks}>
          <VideoBlock imgUrl='/landing-video.jpeg' videoUrl=''></VideoBlock>

          <InfoBlock onClick={upload}>
            <input type="file" id="upload" style={{'display': 'none'} }/> 
            <Image src="/upload-cv.svg" width={94} height={94} alt='' />
            <h2>Upload CV</h2>
            <h3>( PDF or DOCX )</h3>
          </InfoBlock>
          <SliderBlock>
            <Testimony avatarUrl='/avatar-male.jpeg' name='James' text='I have tested out your app and I really liked how simple, detailed and easy to use it is.' />
            <Testimony avatarUrl='/avatar.jpeg' name='Emilie' text='I appreciate the feedback regarding the CV. \n It’s concise and straight to he point. This is a great tool!' />
            <Testimony avatarUrl='/avatar-male2.jpeg' name='Anderson' text='Your app really helped me to evaluate my chances for a job I was applying for. I’ll use it for my future applicaBons.' />
          </SliderBlock>
          <InfoBlock reversed_bg>
            <h1>
              Create CV with AI
            </h1>
          </InfoBlock>
        </div>
      </div>
    </main>
  )
}
