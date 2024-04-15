import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

export default function Home() {
  async function getTopImages() {
    const topImages = await fetch("/api/cron")
      .then((response) => {
        return response.json();
      });
      console.log({topImages})
  }
  // useEffect(() => {
  //   getTopImages();
  // }, []);
  return <div>ImageView</div>;
}
