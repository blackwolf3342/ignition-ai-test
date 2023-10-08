'use client'

import { FacebookIcon } from "@/assets";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from 'next/image'
import Button from "../Button";

function FacebookButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/app'
  return (
    <Button outline onClick={() => signIn('facebook', {callbackUrl})}>
      <Image src={FacebookIcon} alt="" />
      Continue with Facebook
    </Button>
  )
}

export { FacebookButton }