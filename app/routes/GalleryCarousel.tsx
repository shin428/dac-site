// GalleryCarousel.tsx の一部
import { Outlet, Link } from "react-router";
import { book } from "../data/book";




export function GalleryCarousel() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
      {book.map((book) => (
        <div key={book.id} className="flex-none w-[280px] snap-start">
          <div className="aspect-[1/1] bg-white-200 rounded-lg mb-4" >
            <Link to="/">
              <img src={book.image} alt="Logo" className="object-contain w-full h-full" />
            </Link>
          </div>
          <h3 className="font-bold">{book.art}</h3>
          <p className="text-sm text-gray-500">{book.name}</p>
        </div>
      ))}
    </div>
  );
}