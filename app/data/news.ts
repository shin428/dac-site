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
    date: "2026.05.27",
    title: "夏の定例展示会が決定しました",
    category: "Event",
    content: "今年の夏は、海辺のアトリエにて個展を開催します。詳細はこちら..."
  },
  {
    id: "new-members",
    date: "2026.05.20",
    title: "新メンバーによるポートフォリオ公開",
    category: "Update",
    content: "新たに3名のアーティストが加入しました。彼らの作品をぜひご覧ください。"
  }
];