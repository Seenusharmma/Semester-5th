import { useNavigate } from 'react-router-dom'

export default function Explore() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: 'Mobile Computing',
      route: '/mobile-computing',
      icon: '📱',
      color: '#2196F3',
    },
    {
      title: 'Internet & Web Things',
      route: '/internet-web-things',
      icon: '🌐',
      color: '#FF6B35',
    },
    {
      title: 'Software Engineering',
      route: '/software-engineering',
      icon: '⚙️',
      color: '#673AB7',
    },
  ];

  return (
    <div>
      <div className="px-6 pt-16 pb-5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="mb-2">
          <h1 className="text-3xl font-extrabold mb-1.5 tracking-tight text-gray-900 dark:text-white">
            Explore
          </h1>
          <div className="w-16 h-1 bg-blue-500 rounded mt-1" />
        </div>
        <p className="text-base text-gray-600 dark:text-gray-300 opacity-65 font-medium">
          Quick access to all subjects
        </p>
      </div>

      <div className="p-5 pb-8">
        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white opacity-90 tracking-tight">
          Quick Links
        </h2>
        {quickLinks.map((link, index) => (
          <div
            key={index}
            onClick={() => navigate(link.route)}
            className="flex items-center p-5 mb-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4 text-3xl"
              style={{ backgroundColor: link.color + '15' }}
            >
              {link.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {link.title}
              </h3>
            </div>
            <div className="p-2 ml-2">
              <span className="text-gray-400 dark:text-gray-500">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

