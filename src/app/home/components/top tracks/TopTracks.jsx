import React from "react";
import { useState, useEffect } from "react";
import { getTopTracks } from "../../functions/GetTopTracks";
import { Button } from "@nextui-org/react";
import Popup from "../profile/components/popup/Popup";
import TrackCard from "./components/track card/TrackCard";
import { CircularProgress } from "@nextui-org/react";
import SelectionButton from "./components/selection/Selection";
import MusicPlayer from "../music player/MusicPlayer";

export default function TopTracks(props) {
  const [topTracksInfo, setTopTracksInfo] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const pull_term = (data) => {
    props.func(data);
  };

  const fetchData = async () => {
    const responseUser = await getTopTracks(props.currentTerm);
    setTopTracksInfo(responseUser);
  };

  useEffect(() => {
    fetchData().then(() => {
      setDataLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchData().then(() => {
      setDataLoading(false);
    });
  }, [props.currentTerm]);

  if (topTracksInfo === 401) {
    return <Popup />;
  }
  return (
    <div>
      <div className="flex justify-center">
        <MusicPlayer />
      </div>
      {!dataLoading && (
        <>
          <SelectionButton func={pull_term} currentTerm={props.currentTerm} />

          <div className="p-0 m-0 flex flex-wrap gap-5 justify-start after:content-[''] after:flex-auto max-[882px]:justify-center">
            {topTracksInfo.items.map((data) => (
              <div
                key={data.id}
                className="basis-80 flex justify-center items-center "
              >
                <TrackCard
                  image={data.album.images[0].url}
                  name={data.name}
                  artist={data.artists[0].name}
                />
              </div>
            ))}
          </div>

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
