import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white pb-20">
      {children}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            <span className="text-2xl mb-1">📚</span>
            <span className="text-xs font-semibold">Home</span>
          </Link>
          <Link
            to="/explore"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === '/explore' ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            <span className="text-2xl mb-1">🔍</span>
            <span className="text-xs font-semibold">Explore</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

