import React from "react";
import { useState, useEffect } from "react";
import { getUser } from "../../functions/GetUser";
import { Skeleton } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/react";
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
    //console.log(localStorage.getItem("access_token"));
    fetchData().then(() => {
      setDataLoading(false);
    });
  }, []);

  if (userInfo === 401) {
    return <Popup />;
  }

  return (
    <section className="h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        {!dataLoading && (
          <>
            {userInfo.images.length === 0 && (
              <Avatar
                src={userImg}
                className="w-40 h-40 text-large"
                showFallback
              />
            )}
            {userInfo.images.length > 0 && (
              <Avatar
                src={userInfo.images[1].url}
                className="w-40 h-40 text-large"
                showFallback
              />
            )}
            <h2>{userInfo.display_name}</h2>
            {userInfo.product === "premium" && (
              <Code color="warning">Premium</Code>
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
