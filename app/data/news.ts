// data/news.ts
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "summer-exhibition",
    date: "2026.04.25くらい",
    title: "M3に参加しました",
    category: "2026-M3",
    content: "昨年の秋に引き続き今年の春もM3に参加しました。なんと完売やったね。大好評につきboothでも販売してますので是非是非。"
  },
  {
    id: "new-members",
    date: "2026.05.1",
    title: "新しい人がたくさん",
    category: "NewMember",
    content: "まじでたくさんの新入生が加入してくれました。今年も安泰かもね全部で70人くらいいるんじゃないすごいね"
  }
];