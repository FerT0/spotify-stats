import React from "react";
import { Image } from "@nextui-org/react";

interface Props {
  image: string;
  name: string;
  artist: string;
}

export default function TrackCard(props: Props) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center max-w-xs">
        <Image alt="Album Image" src={props.image} isZoomed />
        <h2 className="mt-6 w-full text-center truncate">{props.name}</h2>
        <h2 className="w-full text-center truncate text-sm">{props.artist}</h2>
      </div>
    </div>
  );
}
