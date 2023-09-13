"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "./functions/GetTokenFromUrl";
import { getUser } from "./functions/GetUser";
import { logIn } from "./functions/LogIn";
import Loading from "./components/loadingData/Loading";

import Profile from "./components/profile/Profile";

export default function Home() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  let access_token;

  const fetchData = async () => {
    const token = getTokenFromUrl();
    access_token = token.access_token;
  };

  useEffect(() => {
    fetchData()
      .then(() => {
        logIn(access_token);
      })
      .finally(() => {
        if (localStorage.getItem("access_token") === null) {
          window.location.href = "/";
        } else {
          setIsLoggingIn(false);
          window.location.hash = "/";
        }
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col h-full">
        {isLoggingIn && <Loading />}
        {!isLoggingIn && <Profile />}
      </div>
    </>
  );
}
