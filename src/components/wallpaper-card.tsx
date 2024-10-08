'use client';

import { FocusCards } from "@/components/ui/focus-cards";
import axios from "axios";
import { useState, useEffect } from "react";

export function FocusCardsDemo() {

  const [wallpaper, setWallpaper] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("api/proxy")
      .then((res) => {
        for (let keys in res.data.data) {
          if (res.data.data[keys].dhd) {
            // console.log(res.data.data[keys].dhd);
            setWallpaper((prevWallpaper) => [...prevWallpaper, res.data.data[keys].dhd]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cards = [];

  for (let keys in wallpaper){
    console.log(wallpaper[keys]);
    cards.push({
      title: "Forest Adventure",
      src: wallpaper[keys],
    })
  }
  
  return <FocusCards cards={cards} />;
}
