import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Profile from "../profile/Profile";
import Playlists from "../playlists/Playlists";
import TopArtists from "../top artists/TopArtists";
import TopTracks from "../top tracks/TopTracks";

import React from "react";

export default function Navbar(props) {
  const pull_term = (data) => {
    props.func(data);
  };

  return (
    <div className="flex flex-col h-screen">
      <Tabs
        variant="underlined"
        aria-label="Options"
        className="flex justify-center items-end "
      >
        <Tab key="profile" title="Profile" className="">
          <Profile />
        </Tab>
        <Tab key="playlists" title="Playlists" className="flex justify-center">
          <Card className="h-[70vh] w-[80%]">
            <CardBody>
              <Playlists />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="top-artists"
          title="Top artists"
          className="flex justify-center"
        >
          <Card className="h-[70vh] w-[80%]">
            <CardBody>
              <TopArtists />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="top-tracks"
          title="Top tracks"
          className="flex justify-center"
        >
          <Card className="h-full w-[80%]">
            <CardBody>
              <TopTracks func={pull_term} currentTerm={props.currentTerm} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
