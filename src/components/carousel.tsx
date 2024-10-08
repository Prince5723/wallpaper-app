"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-white text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Elevate your screen with a new vibe.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <></>
  );
};

const data = [
  {
    category: "Space",
    title: "Wonders of Cosmos",
    src: "https://panels-cdn.imgix.net/content/a~outrunyouth_1f41ad6a/Astro~3.jpg?expires=1728508444399&fm=jpg&s=a1871000254a71dbb5640240676a72f8",
    content: <DummyContent />,
  },
  {
    category: "Artistic",
    title: "Canvas of Imagination",
    src: "https://panels-cdn.imgix.net/content/a~justinmaller_82a44004/Drama.jpg?expires=1728508444399&fm=jpg&s=44392c329ef1b2784e8c8f2873c2b11b",
    content: <DummyContent />,
  },
  {
    category: "Skyscrapers",
    title: "Vertical Dreams",
    src: "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Nature",
    title: "Serenity in every pixel",
    src: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
  {
    category: "Animals",
    title: "Aquatic beauty",
    src: "https://images.unsplash.com/photo-1519747180378-d55bc9a23efd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Adventures",
    title: "Chasing the Adreline",
    src: "https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1cmZpbmclMjB3YWxscGFwZXJzfGVufDB8fDB8fHww",
    content: <DummyContent />,
  },
  
];
