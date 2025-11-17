import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'mobile-computing',
      title: 'Mobile Computing',
      subtitle: 'Mobile Computing Courses',
      description: 'Access Mobile Computing exam questions and study materials',
      icon: '📱',
      color: '#2196F3',
    },
    {
      id: 'internet-web-things',
      title: 'Internet & Web Things',
      subtitle: 'Internet & Web Things Courses',
      description: 'Access Internet & Web Things exam questions and study materials',
      icon: '🌐',
      color: '#FF6B35',
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      subtitle: 'Software Engineering Courses',
      description: 'Access Software Engineering exam questions and study materials',
      icon: '⚙️',
      color: '#673AB7',
    },
  ];

  return (
    <div>
      <div className="px-6 pt-16 pb-5 bg-gray-50 border-b border-gray-200">
        <div className="mb-2">
          <h1 className="text-3xl font-extrabold mb-1.5 tracking-tight">
            Q&A App
          </h1>
          <div className="w-16 h-1 bg-blue-500 rounded mt-1" />
        </div>
        <p className="text-base text-gray-600 opacity-65 font-medium">
          Study Questions & Answers
        </p>
      </div>

      <div className="p-5 pb-8">
        <h2 className="text-xl font-bold mb-5 text-gray-900 opacity-90 tracking-tight">
          Subjects
        </h2>
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => navigate(`/${subject.id}`)}
            className="flex items-center p-5 mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4 text-3xl"
              style={{ backgroundColor: subject.color + '15' }}
            >
              {subject.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1.5 tracking-tight">
                {subject.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600 opacity-70 mb-1.5">
                {subject.subtitle}
              </p>
              <p className="text-xs text-gray-600 opacity-60 leading-5">
                {subject.description}
              </p>
            </div>
            <div className="p-2 ml-2">
              <span className="text-gray-400">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

