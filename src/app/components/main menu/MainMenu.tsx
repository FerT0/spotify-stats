import React from "react";
import { Button } from "@nextui-org/button";
import Spotify from "./svg/Spotify";

export default function MainMenu() {
  return (
    <section className="h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-white text-7xl font-bold text-center">
          Spotify Stats
        </h1>
        <Button
          color="success"
          className="mt-8 font-semibold text-xl"
          variant="bordered"
          size="lg"
          startContent={<Spotify />}
        >
          Log in
        </Button>
      </div>
    </section>
  );
}
