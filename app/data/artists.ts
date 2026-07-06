import DacSpring from "../../static/DacSpring.png";// 型を定義してエクスポート
import Dac from "../../static/dacChan.png";

export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  icon: string;
}

export const artists: Artist[] = [
  {
    id: "none",
    name: "none",
    role: "programming",
    bio: "何もしていない人",
    icon: DacSpring,
  },
  {
    id: "nataya",
    name: "nataya",
    role: "breaking",
    bio: "program",
    icon: Dac,
  },
  {
    id: "none",
    name: "none",
    role: "programming",
    bio: "何もしていない人",
    icon: Dac,
  },
  {
    id: "none",
    name: "none",
    role: "programming",
    bio: "何もしていない人",
    icon: DacSpring,
  },{
    id: "none",
    name: "none",
    role: "programming",
    bio: "何もしていない人",
    icon: DacSpring,
  },
];