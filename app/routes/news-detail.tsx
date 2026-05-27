// routes/news-detail.tsx
import { useParams } from "react-router";
import { newsData } from "../data/news";

export default function NewsDetail() {
  const { slug } = useParams();
  const news = newsData.find((n) => n.id === slug);

  if (!news) return <div className="p-20 text-center">記事が見つかりません。</div>;

  return (
    <article className="max-w-3xl mx-auto py-16 px-6">
      <div className="mb-8">
        <span className="text-orange-600 font-bold uppercase text-sm tracking-widest">{news.category}</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">{news.title}</h1>
        <time className="text-gray-400">{news.date}</time>
      </div>
      <div className="prose prose-lg text-gray-700 leading-relaxed">
        {news.content}
      </div>
    </article>
  );
}