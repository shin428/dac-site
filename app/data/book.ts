// 型を定義してエクスポート
export interface Book {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const book: Book[] = [
  {
    id: "yuki",
    name: "Yuki",
    role: "Digital Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "rin",
    name: "Rin Hatano",
    role: "伝説の高校生",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "一番でかい",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "sumomo",
    name: "Sumomo Momonouchi",
    role: "ビッチ",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  // ... 以下同じ
];