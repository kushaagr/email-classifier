"use client";

import React from "react";

import { Button, Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { ClipboardIcon } from "@radix-ui/react-icons";

export default function ModalButton(props: { className?: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = React.useState<string>(
    typeof window !== "undefined" ?
    (window.localStorage.getItem('openai-apikey') || "") : ""
  );

  function handleChange(value: string) {
    const apikey = value.trim();
    localStorage.setItem('openai-apikey', apikey);
    setValue(apikey);
  }

  return (
    <div className={cn("", props.className)}>
      <Button radius="sm" disableRipple disableAnimation onPress={onOpen}>OpenAI API key</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <div className="p-2 flex flex-col gap-2">
              {/* <ModalHeader></ModalHeader> */}
              <div className="flex flex-row items-center">
                <Input
                  value={value}
                  onValueChange={handleChange}
                  label="openai-key"
                  placeholder="Paste your OpenAI API key..."
                  radius="sm"
                />
                <Button
                  onPress={(e) => {
                    navigator.clipboard.readText().then(handleChange)
                  }}
                  radius="sm"
                  size="lg"
                  variant="light"
                  isIconOnly
                  //disableRipple
                >
                  <ClipboardIcon />
                </Button>
              </div>
              <Button onPress={onClose}>Close</Button>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
