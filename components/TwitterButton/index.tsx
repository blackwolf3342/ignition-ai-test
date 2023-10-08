'use client'

import { TwitterIcon } from "@/assets";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Button from "../Button";

function TwitterButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/app'
  return (
    <Button outline onClick={() => signIn('twitter', {callbackUrl})}>
      <Image src={TwitterIcon} alt="twitter" /> 
      Continue with Twitter
    </Button>
  )
}

export { TwitterButton }