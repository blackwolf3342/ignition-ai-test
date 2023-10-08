
import InfoBlock from '@/components/InfoBlock/InfoBlock'
import styles from './page.module.scss'
import Image from 'next/image'
import SliderBlock from '@/components/SlyderBlock'
import Testimony from '@/components/Testimony'
import VideoBlock from '@/components/VideoBlock'

export default function Landing() {
  return (
    <main>
      <div className="container">
        <div className={styles.landing__blocks}>
          <VideoBlock imgUrl='/landing-video.jpeg' videoUrl=''></VideoBlock>

          <InfoBlock>
            <Image src="/upload-cv.svg" width={94} height={94} alt='' />
            <h2>Upload CV</h2>
            <h3>( PDF or DOCX )</h3>
          </InfoBlock>
          <SliderBlock>
            <Testimony avatarUrl='/avatar.jpeg' name='Julie Ruberta' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  non luctus.' />
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
