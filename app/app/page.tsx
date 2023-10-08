import InfoBlock from "@/components/InfoBlock/InfoBlock";
import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import Image from "next/image";

export default async function MainApp() {
  const session = await getServerSession(authConfig);

  const upload = () => {
    
    const fileInput = document.getElementById('upload');
    if(fileInput) {
      fileInput.click();
    }
  }

  return (
    <>
    <h1>{session?.user?.name}</h1>
    <InfoBlock onClick={upload}>
      <input type="file" id="upload" style={{'display': 'none'} }/> 
      <Image src="/upload-cv.svg" width={94} height={94} alt='' />
      <h2>Upload CV</h2>
      <h3>( PDF or DOCX )</h3>
    </InfoBlock>
    </>
  )
}