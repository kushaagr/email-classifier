import { Button, Input, User } from "@nextui-org/react";


import SelectCount from "@/components/SelectCount";
import ModalButton from "@/components/ModalButton";
import { cn } from "@/lib/utils";

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

function MenuBar(props: { className?: string }) {

  return (
    <div className={cn("flex justify-between", props.className)}>
      <SelectCount />

      <div className="flex gap-2">
        
        <ModalButton />
        <Button
          radius="sm"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Classify
        </Button>
      </div>
    </div>
  );
}

function EmailsList(props: { className?: string }) {
  return <div className={cn("p-2", props.className)}></div>;
}

export default function Home() {
  return (
    <main className="mx-auto grid max-w-[80ch] grid-flow-row auto-rows-max gap-7 p-7 box-content outline-dashed outline-1 outline-rose-500">
      <Header />
      <MenuBar />
      {/* <ModalReadInput /> */}
      <EmailsList />
      {/* <ModalDisplayFullEmail /> */}
    </main>
  );
}
