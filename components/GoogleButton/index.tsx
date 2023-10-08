'use client'

import { GoogleIcon } from "@/assets";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Button from "../Button";

function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/app'
  return (
    <Button outline onClick={() => signIn('google', {callbackUrl})}>
      <Image src={GoogleIcon} alt="" />
      Continue with Google
    </Button>
  )
}

export { GoogleButton }