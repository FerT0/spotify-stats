import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <CircularProgress
          color="success"
          size="lg"
          aria-label="Loading data..."
        />
        <p className="mt-2">Loading data...</p>
      </div>
    </>
  );
}
