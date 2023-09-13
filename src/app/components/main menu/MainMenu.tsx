"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import Spotify from "./svg/Spotify";
import Link from "next/link";
import { CircularProgress } from "@nextui-org/react";

export default function MainMenu() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <section className="h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-white text-7xl font-bold text-center">
          Spotify Stats
        </h1>
        <Link href="https://embarrassed-lime-fashion.cyclic.app/login">
          <Button
            color="success"
            className="mt-8 font-semibold text-xl"
            variant="bordered"
            size="lg"
            startContent={<Spotify />}
            onClick={() => setIsLoading(true)}
          >
            Log in
          </Button>
        </Link>
        {isLoading && (
          <div className="flex items-center mt-4">
            <CircularProgress color="success"></CircularProgress>
            <p className="ml-3">Loading Spotify API...</p>
          </div>
        )}
      </div>
    </section>
  );
}
