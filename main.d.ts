export class Lotto {
  constructor(code: string);
  code: string;
  year_BE: number;
  round: number;
  pack: number;
  number: string;
  get year(): number;
}

export class LottoReward {
  constructor(name: string, price: number);
  name: string;
  price: number;
  get direction_matching(): "front" | "back" | "whole";
}

export const LottoRewards: LottoReward[];

export function generateRandomLottoes(num: number): Lotto[];
export function generateOrderLottoes(num: number): Lotto[];
