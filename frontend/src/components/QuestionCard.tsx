import { useNavigate } from 'react-router-dom'
import type { Question } from '../data/questions'

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'short':
        return 'bg-green-500';
      case 'medium':
        return 'bg-orange-500';
      case 'long':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'short':
        return 'Short Answer';
      case 'medium':
        return 'Medium Answer';
      case 'long':
        return 'Long Answer';
      default:
        return category;
    }
  };

  return (
    <div
      onClick={() => navigate(`/question/${question.id}`)}
      className="mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
    >
      <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-4">
          <div className={`px-4 py-2 rounded-full ${getCategoryColor(question.category)} shadow-md`}>
            <span className="text-white text-xs font-bold tracking-wide uppercase">
              {getCategoryLabel(question.category)}
            </span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700">
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300 opacity-80">
              {question.marks} marks
            </span>
          </div>
        </div>
        <h3 className="text-base font-bold mb-3 leading-6 tracking-tight line-clamp-3 text-gray-900 dark:text-white">
          {question.question}
        </h3>
        <div className="mb-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300 opacity-65 leading-5 line-clamp-2">
            {question.answer.substring(0, 120)}...
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 opacity-50">
            Click to view answer →
          </span>
        </div>
      </div>
    </div>
  );
}

