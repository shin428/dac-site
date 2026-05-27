import DacSpring from "../../static/DacSpring.png";// 型を定義してエクスポート
export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  icon: string;
}

export const artists: Artist[] = [
  {
    id: "yuki",
    name: "Yuki Tanaka",
    role: "Digital Artist",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "rin",
    name: "Rin Hatano",
    role: "伝説の高校生",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "一番でかい",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "sumomo",
    name: "Sumomo Momonouchi",
    role: "ビッチ",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "一番でかい",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "一番でかい",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
  {
    id: "oliva",
    name: "Oliva",
    role: "一番でかい",
    bio: "自然界の光をデジタルで表現するアーティスト。",
    icon: DacSpring,
  },
    // ... 以下同じ
];