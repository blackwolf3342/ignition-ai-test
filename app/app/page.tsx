import InfoBlock from "@/components/InfoBlock/InfoBlock";
import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import Image from "next/image";

export default async function MainApp() {
  const session = await getServerSession(authConfig);

  return (
    <>
    <h1>{session?.user?.name}</h1>
    <InfoBlock>
        <Image src="/upload-cv.svg" width={94} height={94} alt='' />
        <h2>Upload CV</h2>
        <h3>( PDF or DOCX )</h3>
    </InfoBlock>
    </>
  )
}