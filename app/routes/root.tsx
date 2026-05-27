import { Outlet, Link } from "react-router";
import DacSpring from "../welcome/logo-light.svg";

// 1. 再利用可能なナビゲーションリンクコンポーネント
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      {/* Header: 固定 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/">
            <img src={DacSpring} alt="Logo" className="h-6 md:h-8" />
          </Link>

          <nav className="hidden md:flex gap-8">
            <NavLink to="/gallery">ギャラリー</NavLink>
            <NavLink to="/exhibitions">展示</NavLink>
            <NavLink to="/archives">記録</NavLink>
          </nav>

          <button className="px-5 py-2 bg-gray-900 text-white text-xs font-bold uppercase rounded-full hover:bg-orange-600 transition-all">
            Login
          </button>
        </div>
      </header>

      {/* Main Content: ページごとの切り替え場所 */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>

      {/* Footer: 固定 */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] text-gray-400 uppercase tracking-widest">
          © 2026 Digital Art Club. All rights reserved.
        </div>
      </footer>
    </div>
  );
}