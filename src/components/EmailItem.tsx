"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { Email } from "@/lib/email-data";

export default function EmailItem(props: {
  email: Email;
  label?: string;
  className?: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={cn("", props.className)}>
      <Card isPressable isBlurred disableRipple isHoverable onPress={onOpen}>
        <CardHeader>
          <div className="flex w-full flex-row justify-between">
            <h3>{props.email.sender}</h3>
            {props.label ? <p>{props.label}</p> : null}
          </div>
        </CardHeader>
        <CardBody>
          <div className="truncate-lines lines-2 max-h-12 max-w-full overflow-hidden">
            {/* {props.email.body.replaceAll(/\n{1,}/g, " ")} */}
            {props.email.body}
          </div>
        </CardBody>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <div className="mx-auto max-w-screen-lg">
              <ModalHeader className="">{props.email.heading}</ModalHeader>
              <ModalBody className="max-h-screen overflow-y-auto whitespace-pre-wrap ">
                {props.email.body.replaceAll("\n", "\n")}
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
