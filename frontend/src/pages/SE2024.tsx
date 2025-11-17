import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SEQuestionCard } from '../components/SEQuestionCard'
import { getSEQuestionsByCategory } from '../data/se-questions'

type Category = 'all' | 'short' | 'medium' | 'long';

export default function SE2024() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const questions = getSEQuestionsByCategory(selectedCategory, '2024');

  const categories: { key: Category; label: string; bgClass: string }[] = [
    { key: 'all', label: 'All', bgClass: 'bg-blue-500' },
    { key: 'short', label: 'Short (2 marks)', bgClass: 'bg-green-500' },
    { key: 'medium', label: 'Medium (5 marks)', bgClass: 'bg-orange-500' },
    { key: 'long', label: 'Long (10 marks)', bgClass: 'bg-red-500' },
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
            SE2024
          </h1>
          <div className="w-12 h-0.5 bg-purple-500 rounded mt-1.5 mx-auto" />
        </div>
        <div className="w-10" />
      </div>

      <div className="px-5 pt-4 pb-3 bg-gray-50 dark:bg-gray-800">
        <p className="text-base text-gray-600 dark:text-gray-300 opacity-65 font-medium text-center">
          2024 Software Engineering Exam Questions & Answers
        </p>
      </div>

      <div className="overflow-x-auto py-3 bg-gray-50 dark:bg-gray-800 mb-1">
        <div className="flex gap-2.5 px-5">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-3xl border-2 whitespace-nowrap transition-all ${
                selectedCategory === category.key 
                  ? `${category.bgClass} border-transparent shadow-md text-white` 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:shadow-sm'
              }`}
            >
              <span className="text-sm font-bold tracking-wide">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 pb-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 opacity-60 mb-5 font-semibold uppercase tracking-wide">
          {questions.length} question{questions.length !== 1 ? 's' : ''} found
        </p>
        {questions.map((question) => (
          <SEQuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

