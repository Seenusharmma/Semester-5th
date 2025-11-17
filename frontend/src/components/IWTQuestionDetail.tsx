import type { IWTQuestion } from '../data/iwt-questions'

interface IWTQuestionDetailProps {
  question: IWTQuestion;
}

export function IWTQuestionDetail({ question }: IWTQuestionDetailProps) {
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-8 pb-5 border-b border-gray-100">
        <div className={`px-5 py-2 rounded-2xl ${getCategoryColor(question.category)} shadow-md`}>
          <span className="text-white text-xs font-bold tracking-wide uppercase">
            {getCategoryLabel(question.category)}
          </span>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-gray-100">
          <span className="text-base font-bold text-gray-600 opacity-80">
            {question.marks} marks
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-5 bg-blue-500 rounded mr-3" />
          <h2 className="text-xl font-bold text-gray-900 opacity-90 tracking-tight">
            Question
          </h2>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-500">
          <p className="text-lg font-bold leading-7 tracking-tight whitespace-pre-line">
            {question.question}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-5 bg-green-500 rounded mr-3" />
          <h2 className="text-xl font-bold text-gray-900 opacity-90 tracking-tight">
            Answer
          </h2>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-green-500">
          <p className="text-base leading-7 text-gray-800 opacity-85 whitespace-pre-line">
            {question.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

