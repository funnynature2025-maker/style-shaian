
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: number[]) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);
    
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };
  
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-rose-700">سوال {currentQuestionIndex + 1} از {QUIZ_QUESTIONS.length}</span>
          <span className="text-sm font-medium text-rose-700">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-rose-200 rounded-full h-2.5">
          <div className="bg-rose-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center">{currentQuestion.question}</h3>

      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedOption === index ? 'bg-rose-100 border-rose-400 ring-2 ring-rose-300' : 'border-gray-200 hover:bg-rose-50'}`}>
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 ml-3"
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            <span className="text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>

      {/* Ad Break */}
      {currentQuestionIndex === 4 && (
         <p className="text-center text-sm text-rose-500 mt-6 p-3 bg-rose-50 rounded-lg">
           تو داری بهترین استایلت رو کشف می‌کنی! لباس‌های شایان شیک، کلید اعتماد به نفس توئه!
         </p>
      )}

      {/* Action Button */}
      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className="w-full mt-8 bg-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-rose-600 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'سوال بعدی' : 'مشاهده نتایج'}
      </button>
    </div>
  );
};
