import { AppleCardsCarouselDemo } from "@/components/carousel";
import {FocusCardsDemo} from "@/components/wallpaper-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800">
      <AppleCardsCarouselDemo/>
      <FocusCardsDemo/>
    </div>
  );
}
