import React from "react";
import { Image } from "@nextui-org/react";

interface Props {
  image: string;
  name: string;
}

export default function TrackCard(props: Props) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <Image
          width={300}
          alt="Album Image"
          src={props.image}
          isBlurred
          isZoomed
        />
        <h2 className="mt-6 ">{props.name}</h2>
      </div>
      <div className="w-2/5 flex flex-col items-center">
        <Image
          width={300}
          alt="Album Image"
          src={props.image}
          isBlurred
          isZoomed
        />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
