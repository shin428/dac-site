// GalleryCarousel.tsx の一部
import { book } from "../data/book";


export function GalleryCarousel() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
      {book.map((book) => (
        <div key={book.id} className="flex-none w-[280px] snap-start">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4" >{}</div>
          <h3 className="font-bold">{book.name}</h3>
          <p className="text-sm text-gray-500">{book.role}</p>
        </div>
      ))}
    </div>
  );
}