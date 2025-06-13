import { Stage } from "@/types";
import { proxy } from "valtio";

export const gameState = proxy({
  points: 0,
  stage: Stage.first,
  reaction: "Гав! Гладь меня ещё!",
  showPlusOne: false,
  onClick: () => {
    const newPoints = gameState.points + 1;
    gameState.points = newPoints;

    // Показываем анимацию +1
    gameState.showPlusOne = true;

    if (newPoints === 10) {
      gameState.stage = Stage.second;
    }
    if (newPoints === 25) {
      gameState.stage = Stage.third;
    }

    // Простая случайная реакция
    const reactions = [
      "Гав-гав!",
      "Мяу... ой, я пёс!",
      "Хочу косточку!",
      "Ты лучший друг!",
      "Погладь меня ещё!",
    ];
    gameState.reaction =
      reactions[Math.floor(Math.random() * reactions.length)];
  },
});

export const shopState = proxy({
  upgrades: [
    {
      id: "bone",
      name: "Косточка",
      cost: 10,
      bonus: 1,
      description: "Даёт +1 респект",
      purchased: false,
    },
    {
      id: "ball",
      name: "Мячик",
      cost: 30,
      bonus: 2,
      description: "Даёт +2 респект",
      purchased: false,
    },
    {
      id: "trainer",
      name: "Тренер",
      cost: 50,
      bonus: 5,
      description: "Даёт +5 респект",
      purchased: false,
    },
  ],
  buyUpgrade: (upgradeId: string) => {
    const upgrade = shopState.upgrades.find((el) => el.id === upgradeId);
    if (!upgrade) return;

    upgrade.purchased = true;
    gameState.points = gameState.points - upgrade.cost;
  },
});

export const statsStore = proxy({
  intelligence: 0,
  agility: 0,

  trainStat: (stat: "intelligence" | "agility") => {
    if (gameState.points >= 5) {
      gameState.points -= 5;
      statsStore[stat] += 1;
    }
  },
});
