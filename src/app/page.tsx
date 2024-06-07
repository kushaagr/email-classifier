import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  User,
} from "@nextui-org/react";

import SelectCount from "@/components/SelectCount";
import ModalButton from "@/components/ModalButton";
import EmailItem from "@/components/EmailItem";

import { cn } from "@/lib/utils";
import { getEmails } from "@/lib/email-data";

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

async function EmailsList(props: { className?: string }) {
  const emails = await getEmails();

  /** const labels: For prototyping only */
  const labels = emails.map((_) => {
    // console.log(Math.floor(Math.random() * emails.length));
    return ["Imp", "Gen", "Soci", "Promo", "Spam", "Mar"][
      Math.floor(Math.random() * 6)
    ];
  });
  let labelled = true;
  // console.log(labels);

  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      {/* <EmailItem email={emails[0]} label="General"/> */}
      {labelled
        ? emails.map((email, index) => (
            <EmailItem email={email} label={labels[index]} />
          ))
        : emails.map((email) => <EmailItem email={email} />)}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto box-content grid max-w-[80ch] grid-flow-row auto-rows-max gap-7 p-7 outline-dashed outline-1 outline-rose-500">
      <Header />
      <MenuBar />
      {/* <ModalReadInput /> */}
      <EmailsList />
      {/* <ModalDisplayFullEmail /> */}
    </main>
  );
}
