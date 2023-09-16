import React from "react";
import { useState, useEffect } from "react";
import { getPlaylists } from "../../functions/GetPlaylists";
import { Button } from "@nextui-org/react";
import Popup from "../profile/components/popup/Popup";

export default function Playlists() {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const fetchData = async () => {
    const responseUser = await getPlaylists();
    setPlaylistInfo(responseUser);
  };

  useEffect(() => {
    if (playlistInfo.length === 0) {
      fetchData().then(() => {
        setDataLoading(false);
      });
    } else {
      console.log("data already loaded");
    }
  }, []);

  if (playlistInfo === 401) {
    return <Popup />;
  }
  return (
    <div>
      <h1>Playlists</h1>
      <Button
        onClick={() => {
          console.log(playlistInfo);
        }}
      >
        Test
      </Button>
    </div>
  );
}
