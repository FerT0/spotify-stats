"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "./functions/GetTokenFromUrl";
import { logIn } from "./functions/LogIn";
import Loading from "./components/loadingData/Loading";
import Navbar from "./components/navbar/Navbar";

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
      {isLoggingIn && <Loading />}
      {!isLoggingIn && (
        <section className="h-screen">
          <div className="">
            <Navbar />
          </div>
        </section>
      )}
    </>
  );
}
