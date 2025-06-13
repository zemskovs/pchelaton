import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "./state";
import { Stage } from "./types";

import firstDog from "./images/1.png";

export function App() {
  const { points, stage, reaction } = useSnapshot(state);

  // Если что логика скрыта
  // const handleClick = () => {
  //   const newPoints = points + 1;
  //   state.points = newPoints;

  //   if (newPoints === 10) {
  //     state.stage = Stage.second;
  //   }
  //   if (newPoints === 25) {
  //     state.stage = Stage.third;
  //   }

  //   // Простая случайная реакция
  //   const reactions = [
  //     "Гав-гав!",
  //     "Мяу... ой, я пёс!",
  //     "Хочу косточку!",
  //     "Ты лучший друг!",
  //     "Погладь меня ещё!",
  //   ];
  //   state.reaction = reactions[Math.floor(Math.random() * reactions.length)];
  // };

  const handleClick = () => {};

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      <h1 className="text-4xl font-bold text-amber-700 mb-4">
        Golden Retriever Clicker
      </h1>

      <Card className="w-80 text-center">
        <CardContent className="p-4">
          <motion.img
            src={firstDog}
            alt="golden retriever"
            className="rounded-xl mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h2 className="text-xl font-semibold mb-2">Стадия: {stage}</h2>
          <p className="text-gray-700 mb-2">Очки счастья: {points}</p>
          <p className="italic text-sm text-gray-500 mb-4">"{reaction}"</p>

          <Button
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Погладить 🐾
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
