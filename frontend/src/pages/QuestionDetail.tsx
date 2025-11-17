import { useParams, useNavigate } from 'react-router-dom'
import { getQuestionById } from '../data/questions'
import { QuestionDetail as QuestionDetailComponent } from '../components/QuestionDetail'

export default function QuestionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const question = getQuestionById(id || '');

  if (!question) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
            Question not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-16 pb-3 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
        >
          <span className="text-xl">←</span>
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Question Details
        </h2>
        <div className="w-10" />
      </div>
      <div className="overflow-y-auto">
        <QuestionDetailComponent question={question} />
      </div>
    </div>
  );
}

