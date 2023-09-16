import React from "react";
import { useState, useEffect } from "react";
import { getTopArtists } from "../../functions/GetTopArtists";
import { Button } from "@nextui-org/react";
import Popup from "../profile/components/popup/Popup";

export default function TopArtists() {
  const [topArtistsInfo, setTopArtistsInfo] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const fetchData = async () => {
    const responseUser = await getTopArtists();
    setTopArtistsInfo(responseUser);
  };

  useEffect(() => {
    if (topArtistsInfo.length === 0) {
      fetchData().then(() => {
        setDataLoading(false);
      });
    } else {
      console.log("data already loaded");
    }
  }, []);

  if (topArtistsInfo === 401) {
    return <Popup />;
  }
  return (
    <div>
      <h1>Top Tracks</h1>
      <Button
        onClick={() => {
          console.log(topArtistsInfo);
        }}
      >
        Test
      </Button>
    </div>
  );
}
