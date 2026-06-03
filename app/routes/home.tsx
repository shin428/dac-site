import type { Route } from "./+types/home";
import { GalleryCarousel } from "../routes/GalleryCarousel";
import { artists } from "../data/artists";
import { newsData } from "../data/news"; // ニュースデータをインポート
import { book } from "../data/book"
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-24 py-10">
      {/*ギャラリー*/}
      <section>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold mb-4">Latest Art</h1>
        </div>
        <GalleryCarousel />
      </section>

      {/*アーティスト*/}
      <section className="bg-white py-16 px-6 rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-10 text-center">Featured Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <Link key={artist.id} to={`/artist/${artist.id}`} className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4"><img src={artist.icon} alt="Logo" className=" object-cover bg-gray-200 rounded-full w-full h-full" /></div>
              <h4 className="font-bold">{artist.name}</h4>
              <p className="text-xs text-orange-600 uppercase">{artist.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/*ニュースofニュース*/}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
        <div className="grid gap-4">
          {newsData.map((news) => (
            <Link 
              key={news.id} 
              to={`/news/${news.id}`} // ここで記事ページへ飛ばす
              className="p-4 border-b hover:bg-gray-50 flex gap-4"
            >
              <span className="text-gray-400">{news.date}</span>
              <h3 className="font-medium">{news.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}