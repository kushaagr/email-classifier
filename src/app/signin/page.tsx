'use client';

import { Button } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return (
    <Button onPress={() => signIn()}>Sign in with Google</Button>
  )
}