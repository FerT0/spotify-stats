import React from "react";
import { useState, useEffect } from "react";
import { getTopTracks } from "../../functions/GetTopTracks";
import { Button } from "@nextui-org/react";
import Popup from "../profile/components/popup/Popup";
import TrackCard from "./components/track card/TrackCard";
import { CircularProgress } from "@nextui-org/react";

export default function TopTracks() {
  const [topTracksInfo, setTopTracksInfo] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const fetchData = async () => {
    const responseUser = await getTopTracks();
    setTopTracksInfo(responseUser);
  };

  useEffect(() => {
    fetchData().then(() => {
      setDataLoading(false);
    });
  }, []);

  if (topTracksInfo === 401) {
    return <Popup />;
  }
  return (
    <div>
      {!dataLoading && (
        <>
          <TrackCard
            image={topTracksInfo.items[0].album.images[0].url}
            name={topTracksInfo.items[0].name}
          />
          <Button
            className="mt-20"
            onClick={() => {
              console.log(topTracksInfo);
            }}
          >
            Test
          </Button>
        </>
      )}

      {dataLoading && (
        <div className="flex justify-center items-center flex-col h-[60vh]">
          <CircularProgress
            color="success"
            size="lg"
            aria-label="Loading data..."
          />
          <p className="mt-2">Loading data...</p>
        </div>
      )}
    </div>
  );
}
