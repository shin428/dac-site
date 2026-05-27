// 型を定義してエクスポート
export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const artists: Artist[] = [
  {
    id: "yuki",
    name: "Yuki Tanaka",
    role: "Digital Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "rin",
    name: "Rin Hatano",
    role: "Analog Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "Digital Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  {
    id: "sumomo",
    name: "Sumomo Momonouchi",
    role: "Digital Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
  },
  // ... 以下同じ
];