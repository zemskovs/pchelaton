import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "./state";
import { Stage } from "./types";

import { IMG_MAP } from "./constants";
import { PlusOneAnimation } from "./components/ui/animation";

export function App() {
  const { points, stage, reaction, showPlusOne } = useSnapshot(state);

  const handleClick = () => {
    const newPoints = points + 1;
    state.points = newPoints;

    // Показываем анимацию +1
    state.showPlusOne = true;

    if (newPoints === 10) {
      state.stage = Stage.second;
    }
    if (newPoints === 25) {
      state.stage = Stage.third;
    }

    // Простая случайная реакция
    const reactions = [
      "Гав-гав!",
      "Мяу... ой, я пёс!",
      "Хочу косточку!",
      "Ты лучший друг!",
      "Погладь меня ещё!",
    ];
    state.reaction = reactions[Math.floor(Math.random() * reactions.length)];
  };

  const handlePlusOneComplete = () => {
    state.showPlusOne = false;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      <h1 className="text-4xl font-bold text-amber-700 mb-4">
        Golden Retriever Clicker
      </h1>

      <Card className="w-80 text-center">
        <CardContent className="p-4 relative">
          <div className="relative">
            <motion.img
              src={IMG_MAP[state.stage]}
              alt="golden retriever"
              className="rounded-xl mb-4"
              animate={{
                rotate: [0, -2, 2, -2, 2, 0], // колебание
                x: [0, -2, 2, -2, 2, 0], // горизонтальное смещение
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              onClick={handleClick}
            />
            <PlusOneAnimation
              isVisible={showPlusOne}
              onComplete={handlePlusOneComplete}
            />
          </div>
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
