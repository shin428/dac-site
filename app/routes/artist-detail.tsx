// routes/artist-detail.tsx
import { useParams } from "react-router";
import { artists } from "../data/artists";

export default function ArtistDetail() {
  const { id } = useParams(); // URLからIDを取得
  const artist = artists.find((a) => a.id === id);

  if (!artist) return <div>アーティストが見つかりません</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold">{artist.name}</h1>
      <p className="text-orange-600 mt-2">{artist.role}</p>
      <div className="mt-8 text-lg text-gray-600">{artist.bio}</div>
      {/* ここに作品一覧を表示 */}
    </div>
  );
}