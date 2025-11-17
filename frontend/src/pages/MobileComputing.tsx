import { useNavigate } from 'react-router-dom'

export default function MobileComputing() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'mc2020',
      title: 'MC2020',
      subtitle: '2020 Mobile Computing Exam',
      description: 'View all questions and answers from the 2020 Mobile Computing exam',
      icon: '📕',
      color: '#9C27B0',
    },
    {
      id: 'mc2022',
      title: 'MC2022',
      subtitle: '2022 Mobile Computing Exam',
      description: 'View all questions and answers from the 2022 Mobile Computing exam',
      icon: '📚',
      color: '#2196F3',
    },
    {
      id: 'mc2024',
      title: 'MC2024',
      subtitle: '2024 Mobile Computing Exam',
      description: 'View all questions and answers from the 2024 Mobile Computing exam',
      icon: '📖',
      color: '#4CAF50',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-16 pb-5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => navigate(-1)}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white"
        >
          <span className="text-xl">←</span>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Mobile Computing
          </h1>
          <div className="w-12 h-0.5 bg-blue-500 rounded mt-1.5 mx-auto" />
        </div>
        <div className="w-10" />
      </div>

      <div className="p-5 pb-8">
        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white opacity-90 tracking-tight">
          Available Courses
        </h2>
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/mobile-computing/${course.id}`)}
            className="flex items-center p-5 mb-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4 text-3xl"
              style={{ backgroundColor: course.color + '15' }}
            >
              {course.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1.5 tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 opacity-70 mb-1.5">
                {course.subtitle}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 opacity-60 leading-5">
                {course.description}
              </p>
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

