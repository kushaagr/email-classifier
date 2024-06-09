'use client';

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

export default function LogoutButton(props: { className?: string }) {
    return (<div className={cn("", props.className)}>
        <Button radius="sm" onPress={() => signOut()}>Logout</Button>
    </div>);
}