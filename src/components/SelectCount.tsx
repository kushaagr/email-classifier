"use client";
import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDownIcon } from "./ChevronDownIcon";

import { cn } from "@/lib/utils";

export default function SelectCount(props: { className?: string }) {
  const [selectedOption, setSelectedOption] = useState(new Set(["15"]));
  const handleSelectionChange = (keys: any) => {
    if (keys instanceof Set) {
      setSelectedOption(keys as Set<string>);
    } else {
      setSelectedOption(new Set([keys as string]));
    }
  };

  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <div className={cn("", props.className)}>
      <ButtonGroup variant="flat">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button radius="full" disableRipple>
              Emails:&nbsp;
              {selectedOptionValue}
              <ChevronDownIcon />
            </Button>
            {/* <Button> */}
            {/* </Button> */}
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Number of emails to fetch"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
            className="max-w-[300px]"
          >
            <DropdownItem key="15">{"15"}</DropdownItem>
            <DropdownItem key="30">{"30"}</DropdownItem>
            <DropdownItem key="45">{"45"}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </div>
  );
}
