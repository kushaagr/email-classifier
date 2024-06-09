"use client";
import { Button, Progress } from "@nextui-org/react";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { generate } from "../app/actions";
import { readStreamableValue } from "ai/rsc";

import SelectCount from "@/components/SelectCount";
import ModalButton from "@/components/ModalButton";
import EmailItem from "@/components/EmailItem";
import { Email } from "@/lib/email-data";
import { useToast } from "@/components/ui/use-toast";


import { cn } from "@/lib/utils";
import { getEmails } from "@/lib/email-data";
import { ReloadIcon } from "@radix-ui/react-icons";

type Label = {
  id: number,
  label: string
}

export default function EmailsList(props: { className?: string }) {
  const [emails, setEmails] = useState<Email[]>([]);
  const [labels, setLabels] = useState<Label[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [labelled, setLabelled] = useState<boolean>(false);
  const [shouldInform, setShouldInform] = useState<boolean>(false);
  const { toast } = useToast();

  // const [generation, setGeneration] = useState<string>("");

  useEffect(() => {
    getEmails().then((emails: Email[]) => {
      /** const labels: For prototyping only */
      /* const labels = emails.map((_) => {
        // console.log(Math.floor(Math.random() * emails.length));
        return ["Imp", "Gen", "Soci", "Promo", "Spam", "Mar"][
          Math.floor(Math.random() * 6)
        ];
      });
      */
      emails.forEach((email) => {delete email['label']});
      setEmails(emails);
      setShouldInform(true);

      // setLabels(labels);
      // setLabelled(true);
    });
  }, []);

  if (shouldInform) {
    toast({
      title: "Showing sample emails", 
      description: "Gmail API integration is broken at the moment.\n"
      + "OpenAI & OAuth are working fine though."
    });
    setShouldInform(false);
  }

  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      <MenuBar emailsString={JSON.stringify(emails)} generation={labels} setGeneration={setLabels} setLoading={setLoading}/>
      {/* <EmailItem email={emails[0]} label="General"/> */}
      {/* {labels?.map(l => (<div>l.label</div>))} */}
      {loading ? <Progress size="sm" isIndeterminate aria-label="Categorizing..." /> : null}
      {labels && labels.length !== 0
        ? emails.map((email, index) => (

            <EmailItem
              key={`${email.id}`}
              email={email}
              label={labels[index].label}
            />
          ))
        : emails.map((email) => (
            <EmailItem key={`${email.id}`} email={email} />
          ))}
    </div>
  );
}

function MenuBar(props: {
  generation: Label[],
  setGeneration: Dispatch<SetStateAction<Label[]>>,
  // setGeneration: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  emailsString: string,
  className?: string,
}) {
  const { toast } = useToast();
  const apikey = typeof window !== "undefined" ? (
    window.localStorage.getItem("openai-apikey") || ""
  ) : "";

  return (
    <div className={cn("flex justify-between", props.className)}>
      <div className="flex flex-row flex-wrap gap-2">
        <SelectCount />
        <Button isIconOnly radius="full" size="md">
          <ReloadIcon />
        </Button>
      </div>

      <div className="flex gap-2">
        <ModalButton />
        <Button
          radius="sm"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          onPress={async () => {
            if (apikey.trim() === "") {
              toast({title: "No API key found", description: "Paste your OpenAI api key clicking 'OpenAI API key' button"});
              return;
            }
            props.setLoading(true);
            const { object, error } = await generate(props.emailsString, apikey);
            props.setLoading(false);
            if (object == "") {
              console.log(error?.type, ":", error?.message);
              toast({title: "Something went wrong", description: error?.message ?? "Something went wrong"});
            } else 
              props.setGeneration(JSON.parse(object).data);
            // for await (const partialObject of readStreamableValue(object)) {
            //   if (partialObject) {
            //     props.setGeneration(
            //       JSON.stringify(partialObject.notifications, null, 2),
            //     );
            //   }
            // }
          }}

        >
          Classify
        </Button>
      </div>
    </div>
  );
}
