// 型を定義してエクスポート
import DacSpring from "../../static/DacSpring.png";
export interface Book {
  id: string;
  art: string;
  name: string;
  image: string;

}

export const book: Book[] = [
  {
    id: "2026_dac_book",
    art: "2026SpecialBook",
    name: "2026年の本",
    image: DacSpring,
  },
  {
    id: "2026_dac_book",
    art: "2026SpecialBook",
    name: "2026年の本",
    image: DacSpring,
  },
  {
    id: "2026_dac_book",
    art: "2026SpecialBook",
    name: "2026年の本",
    image: DacSpring,
  },
  {
    id: "2026_dac_book",
    art: "2026SpecialBook",
    name: "2026年の本",
    image: DacSpring,
  },
  {
    id: "2026_dac_book",
    art: "2026SpecialBook",
    name: "2026年の本",
    image: DacSpring,
  },
  // ... 以下同じ
];