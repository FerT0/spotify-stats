import React from "react";
import { useState, useEffect } from "react";
import { getUser } from "../../functions/GetUser";
import { Avatar } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Popup from "./components/popup/Popup";

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  let userImg = "";
  const fetchData = async () => {
    const responseUser = await getUser();
    setUserInfo(responseUser);
  };
  useEffect(() => {
    fetchData().then(() => {
      setDataLoading(false);
    });
  }, []);

  if (userInfo === 401) {
    return <Popup />;
  }

  return (
    <section>
      <div className="flex justify-center items-center flex-col">
        {!dataLoading && (
          <>
            {userInfo.images.length === 0 && (
              <Avatar
                src={userImg}
                className="w-40 h-40 text-large mt-8"
                showFallback
                isBordered
                color="success"
              />
            )}
            {userInfo.images.length > 0 && (
              <Avatar
                src={userInfo.images[1].url}
                className="w-40 h-40 text-large mt-8"
                showFallback
                isBordered
                color="success"
              />
            )}
            <div className="flex items-center gap-12 mb-4 mt-4">
              <h2 className="text-large font-semibold">
                {userInfo.display_name}
              </h2>
              <div className="flex flex-col text-center">
                <h2 className="text-large font-semibold">
                  {userInfo.followers.total}
                </h2>
                {userInfo.followers.total !== 1 && (
                  <p className="text-sm">Followers</p>
                )}
                {userInfo.followers.total === 1 && (
                  <p className="text-sm">Follower</p>
                )}
              </div>
            </div>
            {userInfo.product === "premium" && (
              <Code color="success">Spotify Premium</Code>
            )}
            {userInfo.product === "free" && (
              <Code color="default">Spotify Free</Code>
            )}
          </>
        )}
        <Button className="mt-8" onClick={() => console.log(userInfo)}>
          Test
        </Button>
      </div>
    </section>
  );
}
