import { Stage } from "@/types";
import { proxy } from "valtio";

export const state = proxy({
  points: 0,
  stage: Stage.first,
  reaction: "Гав! Гладь меня ещё!",
  showPlusOne: false,
});
