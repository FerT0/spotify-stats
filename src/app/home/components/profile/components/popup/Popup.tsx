import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { Button } from "@nextui-org/react";

import Link from "next/link";

export default function Popup() {
  return (
    <Modal isOpen={true} hideCloseButton={true}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Session expired
          </ModalHeader>
          <ModalBody>
            <p>Your session has expired. You'll be sent to the main menu.</p>
          </ModalBody>
          <ModalFooter>
            <Link href="/">
              <Button
                color="success"
                onClick={() => {
                  localStorage.removeItem("access_token");
                }}
              >
                Accept
              </Button>
            </Link>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
