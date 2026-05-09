import { Outlet,Link } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className="bg-gray-800 text-white p-4 text-center font-semibold text-2xl p-2.5">
          <Link to="/">
           デジタルアートクラブ略してDAC
          </Link>
        </div>
        
        
        <div className="
          *:w-1/4
          *:p-4
          *:bg-blue-200
          *:text-center
          flex
          w-full
          *:hover:bg-blue-400
          *:transition-colors
          *:ease-in-out
          *:duration-500
          "
        >
          <Link to="https://www.google.com/search?q=dlsite">エゲ紹介</Link>
          <Link to="/about">about</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/booth">booth</Link>
        </div>
        <Outlet />
        <div className="bg-gray-800 text-white p-4 text-center">Footer</div>
    </div>
  )    
}