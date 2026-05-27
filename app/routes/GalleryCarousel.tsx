// GalleryCarousel.tsx の一部
import { artists } from "../data/artists";

export function GalleryCarousel() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
      {artists.map((artist) => (
        <div key={artist.id} className="flex-none w-[280px] snap-start">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4" />
          <h3 className="font-bold">{artist.name}</h3>
          <p className="text-sm text-gray-500">{artist.role}</p>
        </div>
      ))}
    </div>
  );
}