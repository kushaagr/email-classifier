import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  User,
} from "@nextui-org/react";


import EmailsList from "@/components/EmailsList";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";


// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

function Header(props: { className?: string }) {
  return (
    <div className={cn("flex justify-between", props.className)}>
      <User
        name="Kushagra Mehrotra"
        description="kushagra210@outlook.com"
        avatarProps={{
          src: "https://gravatar.com/avatar/525ab6b1b3c24913388e859e221ab644ea61cc42923c056bb29f1e2e5af5b689",
        }}
      />
      <Button radius="sm">Logout</Button>
    </div>
  );
}

export default function Home() {

  return (
    <main className="mx-auto box-content grid max-w-[80ch] grid-flow-row auto-rows-max gap-7 p-7 outline-dashed outline-1 outline-rose-500">
      <Header />
      {/* <ModalReadInput /> */}
      <EmailsList />
      {/* <ModalDisplayFullEmail /> */}
      <Toaster />
    </main>
  );
}
