import { Button } from "@/components/ui/button";

export type Upgrade = {
  id: string;
  name: string;
  cost: number;
  bonus: number;
  description: string;
  purchased: boolean;
};

type UpgradeShopProps = {
  upgrades: Upgrade[];
  onBuy: (upgradeId: string) => void;
  points: number;
};

export function UpgradeShop({ upgrades, onBuy, points }: UpgradeShopProps) {
  return (
    <div className="mt-6 w-80">
      <h2 className="text-lg font-semibold mb-2 text-amber-700">
        Магазин апгрейдов
      </h2>
      <div className="flex flex-col gap-2">
        {upgrades.map((upg) => (
          <div
            key={upg.id}
            className="flex justify-between items-center p-2 border rounded-lg bg-white shadow-sm"
          >
            <div>
              <p className="font-medium">{upg.name}</p>
              <p className="text-sm text-gray-500">{upg.description}</p>
            </div>
            <Button
              disabled={upg.purchased || points < upg.cost}
              onClick={() => onBuy(upg.id)}
              className="text-sm bg-green-500 hover:bg-green-600 disabled:opacity-50"
            >
              {upg.purchased ? "Куплено" : `${upg.cost} 🦴`}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
