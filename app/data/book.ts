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
    id: "yuki",
    art: "one",
    name: "Yuki",
    image: DacSpring,
  },
  {
    id: "rin",
    art: "one",
    name: "Rin Hatano",
    image: DacSpring,
  },
  {
    id: "oliva",
    art: "one",
    name: "Oliva",
    image: DacSpring,

  },
  {
    id: "sumomo",
    art: "one",
    name: "Sumomo Momonouchi",
    image: DacSpring,
  },
  // ... 以下同じ
];