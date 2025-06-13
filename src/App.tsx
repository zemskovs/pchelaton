import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";

import { gameState, shopState, statsStore } from "./state";
import { IMG_MAP } from "./constants";
import { PlusOneAnimation } from "./components/ui/animation";
import { UpgradeShop } from "./components/ui/shop";
import { StatBar } from "./components/ui/stats";
import SunWithRays from "./components/ui/animation/SunWithRays";

export function App() {
  const { points, stage, reaction, showPlusOne } = useSnapshot(gameState);
  useSnapshot(shopState);

  const handleClick = () => {
    gameState.onClick();
  };

  const handlePlusOneComplete = () => {
    gameState.showPlusOne = false;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      <h1 className="text-4xl font-bold text-amber-700 mb-4">
        Golden Retriever Clicker
      </h1>

      <Card className="w-80 text-center">
        <CardContent className="p-4 relative">
          <div className="relative">
            <SunWithRays onClick={handleClick}>
              <motion.img
                src={IMG_MAP[gameState.stage]}
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
              />
              <PlusOneAnimation
                isVisible={showPlusOne}
                onComplete={handlePlusOneComplete}
              />
            </SunWithRays>
          </div>
          <h2 className="text-xl font-semibold mb-2">Стадия: {stage}</h2>
          <p className="text-gray-700 mb-2">Очки счастья: {points}</p>

          <StatBar label="Интеллект" value={gameState.intelligence} />
          <StatBar label="Ловкость" value={gameState.agility} />

          <p className="italic text-sm text-gray-500 mb-4">"{reaction}"</p>

          <Button
            onClick={() => gameState.trainStat("intelligence")}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-2"
            disabled={points < 5}
          >
            Тренировать интеллект (-5 🦴)
          </Button>
          <Button
            onClick={() => gameState.trainStat("agility")}
            className="bg-green-500 hover:bg-green-600 text-white w-full mt-2"
            disabled={points < 5}
          >
            Тренировать ловкость (-5 🦴)
          </Button>
        </CardContent>
      </Card>

      <UpgradeShop
        upgrades={shopState.upgrades}
        onBuy={shopState.buyUpgrade}
        points={points}
      />
    </main>
  );
}
