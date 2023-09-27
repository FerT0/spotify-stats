import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function SelectionButton(props) {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([props.currentTerm])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" className="capitalize mb-7">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        onAction={(key) => props.func(key)}
      >
        <DropdownItem key="short term" description="Last 4 weeks">
          Short term
        </DropdownItem>
        <DropdownItem key="medium term" description="Last 6 months">
          Medium term
        </DropdownItem>
        <DropdownItem key="long term" description="Several years">
          Long term
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
