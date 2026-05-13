import { Outlet, Link } from "react-router";
import DacSpring from "../welcome/logo-light.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-4 items-center gap-4 flex justify-between">
          <div>
            <img src={DacSpring} alt="Logo" className="h-7" />
          </div>
          <div className="bg-orange-500 !text-white hover:bg-orange-600 rounded-md">login</div>
        </div>
      </header>


      <div className="
          *:w-1/4
          mt-4
          *:p-4
          *:bg-green-500/10
          *:rounded-lg
          *:shadow-md
          *:text-center
          *:font-bold
          gap-4
          flex
          w-full
          *:hover:bg-green-400
          *:transition-colors
          *:ease-in-out
          *:duration-500
          "
      >
        <Link to="https://www.google.com/">紹介</Link>
        <Link to="/about">about</Link>
        <Link to="/gallery">gallery</Link>
        <Link to="/booth">booth</Link>
      </div>
        // Tailwind CSSの例
      <div className="flex gap-4 p-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="font-bold">Item {i}</h3>
            <p className="text-sm text-gray-500">説明文がここに入ります。</p>
          </div>
        ))}
      </div>
      <Outlet />
      <div className="bg-gray-800 text-white p-4 text-center">Footer</div>
    </div>
  )
}