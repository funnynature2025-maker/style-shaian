
import React from 'react';
import { AppleIcon, PearIcon, HourglassIcon, RectangleIcon } from './Icons';

interface EducationProps {
  onStartQuiz: () => void;
}

const shapeData = [
    {
        icon: <AppleIcon />,
        name: 'سیب',
        description: 'فرم سیب: تمرکز روی بالاتنه، با استایل‌های لایه‌دار درخشان می‌شه!'
    },
    {
        icon: <PearIcon />,
        name: 'گلابی',
        description: 'فرم گلابی: باسن پهن‌تر و شانه‌های باریک‌تر، با تاکید بر بالاتنه جذاب‌تره.'
    },
    {
        icon: <HourglassIcon />,
        name: 'ساعت شنی',
        description: 'فرم ساعت شنی: تناسب بی‌نظیر بین بالاتنه و پایین‌تنه با کمری باریک.'
    },
    {
        icon: <RectangleIcon />,
        name: 'مستطیل',
        description: 'فرم مستطیل: اندامی صاف و یکنواخت که با ایجاد انحنا، فوق‌العاده میشه.'
    }
];

export const Education: React.FC<EducationProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-rose-800 mb-4">آشنایی با فرم‌های مختلف بدن</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">فرم‌های مختلف بدن مثل سیب، گلابی، ساعت شنی و مستطیل هر کدوم جذابیت‌های خاص خودشون رو دارن. بیا با تصاویر شماتیک ببینیم!</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
        {shapeData.map((shape) => (
             <div key={shape.name} className="flex flex-col items-center p-4 border border-rose-100 rounded-xl bg-rose-50/50 transition-shadow hover:shadow-md">
                <div className="text-rose-400 mb-3">{shape.icon}</div>
                <h3 className="font-bold text-lg text-rose-700">{shape.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{shape.description}</p>
             </div>
        ))}
      </div>
      
      <p className="font-semibold text-rose-500 text-lg mb-6">
        در شایان شیک، لباس‌هایی داریم که فرم بدنت رو جشن می‌گیرن!
      </p>
      
      <button
        onClick={onStartQuiz}
        className="bg-rose-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-rose-600 transition-transform transform hover:scale-105"
      >
        شروع آزمون شناسایی فرم بدن
      </button>
    </div>
  );
};
