export const und = "×";

export default function GetValue(key: string): Value {
  let inv = key
    .split("")
    .map(p => (p === "1" ? "0" : "1"))
    .join("");

  let averse = dict.filter(v => v.key === key)[0];
  let reverse = dict.filter(v => v.key === inv)[0];

  return {
    key: key,
    rus: averse ? averse.rus : und,
    eng: averse ? averse.eng : und,
    num: averse ? averse.num : und,
    invRus: reverse ? reverse.rus : und,
    invEng: reverse ? reverse.eng : und,
    invNum: reverse ? reverse.num : und
  };
}

export interface Value {
  key: string;
  rus: string;
  eng: string;
  num: string;
  invRus: string;
  invEng: string;
  invNum: string;
}

const dict = [
  { key: "100000", rus: "а", eng: "a", num: "1" },
  { key: "110000", rus: "б", eng: "b", num: "2" },
  { key: "010111", rus: "в", eng: "w", num: und },
  { key: "110110", rus: "г", eng: "g", num: "7" },
  { key: "100110", rus: "д", eng: "d", num: "4" },
  { key: "100010", rus: "е", eng: "e", num: "5" },
  { key: "100001", rus: "ё", eng: und, num: und },
  { key: "010110", rus: "ж", eng: "j", num: "0" },
  { key: "101011", rus: "з", eng: "z", num: und },
  { key: "010100", rus: "и", eng: "i", num: "9" },
  { key: "111101", rus: "й", eng: und, num: und },
  { key: "101000", rus: "к", eng: "k", num: und },
  { key: "111000", rus: "л", eng: "l", num: und },
  { key: "101100", rus: "м", eng: "m", num: und },
  { key: "101110", rus: "н", eng: "n", num: und },
  { key: "101010", rus: "о", eng: "o", num: und },
  { key: "111100", rus: "п", eng: "p", num: und },
  { key: "111010", rus: "р", eng: "r", num: und },
  { key: "011100", rus: "с", eng: "s", num: und },
  { key: "011110", rus: "т", eng: "t", num: und },
  { key: "101001", rus: "у", eng: "u", num: und },
  { key: "110100", rus: "ф", eng: "f", num: "6" },
  { key: "110010", rus: "х", eng: "h", num: "8" },
  { key: "100100", rus: "ц", eng: "c", num: "3" },
  { key: "111110", rus: "ч", eng: "q", num: und },
  { key: "100011", rus: "ш", eng: und, num: und },
  { key: "101101", rus: "щ", eng: "x", num: und },
  { key: "111011", rus: "ъ", eng: und, num: und },
  { key: "011101", rus: "ы", eng: und, num: und },
  { key: "011111", rus: "ь", eng: und, num: und },
  { key: "010101", rus: "э", eng: und, num: und },
  { key: "110011", rus: "ю", eng: und, num: und },
  { key: "110101", rus: "я", eng: und, num: und },
  { key: "111001", rus: und, eng: "v", num: und },
  { key: "101111", rus: und, eng: "y", num: und },
  { key: "010011", rus: ".", eng: ".", num: "." },
  { key: "011010", rus: "!", eng: "!", num: "!" },
  { key: "001001", rus: "-", eng: "-", num: "-" },
  { key: "011001", rus: "«", eng: "«", num: "«" },
  { key: "001011", rus: "»", eng: "»", num: "»" },
  { key: "110001", rus: "(", eng: "(", num: "(" },
  { key: "001110", rus: ")", eng: ")", num: ")" },
  { key: "010000", rus: ",", eng: ",", num: "," },
  { key: "010001", rus: "?", eng: "?", num: "?" },
  { key: "011000", rus: ";", eng: ";", num: ";" },
  { key: "011011", rus: "<", eng: "<", num: "<" }
];
