import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function App() {
  const [points, setPoints] = useState(0);
  const [stage, setStage] = useState("Щенок");
  const [reaction, setReaction] = useState("Гав! Гладь меня ещё!");

  const handleClick = () => {
    const newPoints = points + 1;
    setPoints(newPoints);

    if (newPoints === 10) setStage("Молодой пёс");
    if (newPoints === 25) setStage("Взрослый ретривер");

    // Простая случайная реакция
    const reactions = [
      "Гав-гав!",
      "Мяу... ой, я пёс!",
      "Хочу косточку!",
      "Ты лучший друг!",
      "Погладь меня ещё!",
    ];
    setReaction(reactions[Math.floor(Math.random() * reactions.length)]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      <h1 className="text-4xl font-bold text-amber-700 mb-4">
        Golden Retriever Clicker
      </h1>

      <Card className="w-80 text-center">
        <CardContent className="p-4">
          <motion.img
            src="https://place-puppy.com/300x300"
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
