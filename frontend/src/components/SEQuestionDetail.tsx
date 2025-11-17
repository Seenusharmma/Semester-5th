import { useState, useEffect } from 'react';
import type { SEQuestion } from '../data/se-questions'
import { translateText, languages } from '../utils/translate';

interface SEQuestionDetailProps {
  question: SEQuestion;
}

export function SEQuestionDetail({ question }: SEQuestionDetailProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
  }, []);

  const speakText = async () => {
    if (!synth) return;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    try {
      setIsTranslating(true);
      const fullText = `Question: ${question.question}. Answer: ${question.answer}`;
      
      // Translate if language is not English
      let textToSpeak = fullText;
      if (selectedLanguage !== 'en') {
        const translatedQuestion = await translateText(question.question, selectedLanguage);
        const translatedAnswer = await translateText(question.answer, selectedLanguage);
        textToSpeak = `Question: ${translatedQuestion}. Answer: ${translatedAnswer}`;
      }

      setIsTranslating(false);
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = selectedLanguage;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsTranslating(false);
      };

      synth.speak(utterance);
      setIsSpeaking(true);
    } catch (error) {
      console.error('Error translating/speaking:', error);
      setIsTranslating(false);
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, [synth]);
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
      <div className="flex justify-between items-center mb-8 pb-5 border-b border-gray-100 dark:border-gray-700">
        <div className={`px-5 py-2 rounded-2xl ${getCategoryColor(question.category)} shadow-md`}>
          <span className="text-white text-xs font-bold tracking-wide uppercase">
            {getCategoryLabel(question.category)}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-gray-100 dark:bg-gray-800">
            <span className="text-base font-bold text-gray-600 dark:text-gray-300 opacity-80">
              {question.marks} marks
            </span>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              disabled={isSpeaking || isTranslating}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              onClick={speakText}
              disabled={isTranslating}
              className={`px-4 py-2 rounded-2xl shadow-md transition-all duration-200 flex items-center gap-2 ${
                isSpeaking
                  ? 'bg-red-500 hover:bg-red-600'
                  : isTranslating
                  ? 'bg-yellow-500 hover:bg-yellow-600 cursor-wait'
                  : 'bg-blue-500 hover:bg-blue-600'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              title={
                isTranslating
                  ? 'Translating...'
                  : isSpeaking
                  ? 'Stop speaking'
                  : 'Read question and answer'
              }
            >
              {isTranslating ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isSpeaking ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  )}
                </svg>
              )}
              {isTranslating && (
                <span className="text-white text-xs font-medium">Translating...</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-5 bg-blue-500 rounded mr-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 opacity-90 tracking-tight">
            Question
          </h2>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500">
          <p className="text-lg font-bold leading-7 tracking-tight whitespace-pre-line text-gray-900 dark:text-gray-100">
            {question.question}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-5 bg-green-500 rounded mr-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 opacity-90 tracking-tight">
            Answer
          </h2>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border-l-4 border-green-500">
          <p className="text-base leading-7 text-gray-800 dark:text-gray-200 opacity-85 whitespace-pre-line">
            {question.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

