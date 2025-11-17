import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20 transition-colors duration-200">
      <div className="fixed top-0 right-0 p-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
      {children}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === '/' 
                ? 'text-blue-500 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className="text-2xl mb-1">📚</span>
            <span className="text-xs font-semibold">Home</span>
          </Link>
          <Link
            to="/explore"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === '/explore' 
                ? 'text-blue-500 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400'
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

