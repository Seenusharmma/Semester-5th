import { useNavigate } from 'react-router-dom'

export default function SoftwareEngineering() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'se2022',
      title: 'SE2022',
      subtitle: '2022 Software Engineering Exam',
      description: 'View all questions and answers from the 2022 Software Engineering exam',
      icon: '⚙️',
      color: '#673AB7',
    },
    {
      id: 'se2023',
      title: 'SE2023',
      subtitle: '2023 Software Engineering Exam',
      description: 'View all questions and answers from the 2023 Software Engineering exam',
      icon: '🔧',
      color: '#9C27B0',
    },
    {
      id: 'se2024',
      title: 'SE2024',
      subtitle: '2024 Software Engineering Exam',
      description: 'View all questions and answers from the 2024 Software Engineering exam',
      icon: '🛠️',
      color: '#E91E63',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-16 pb-5 bg-gray-50 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <span className="text-xl">←</span>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Software Engineering
          </h1>
          <div className="w-12 h-0.5 bg-purple-500 rounded mt-1.5 mx-auto" />
        </div>
        <div className="w-10" />
      </div>

      <div className="p-5 pb-8">
        <h2 className="text-xl font-bold mb-5 text-gray-900 opacity-90 tracking-tight">
          Available Courses
        </h2>
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/software-engineering/${course.id}`)}
            className="flex items-center p-5 mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4 text-3xl"
              style={{ backgroundColor: course.color + '15' }}
            >
              {course.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1.5 tracking-tight">
                {course.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600 opacity-70 mb-1.5">
                {course.subtitle}
              </p>
              <p className="text-xs text-gray-600 opacity-60 leading-5">
                {course.description}
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

