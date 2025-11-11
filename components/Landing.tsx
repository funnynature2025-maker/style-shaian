
import React, { useState } from 'react';
import { User } from '../types';

interface LandingProps {
  onStart: (user: User) => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('لطفاً نام و نام خانوادگی خود را وارد کنید.');
      return;
    }
    setError('');
    onStart({ firstName, lastName });
  };

  return (
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-rose-800 mb-4">سلام خانم شیک‌پوش!</h2>
      <p className="text-gray-600 mb-6">برای کشف استایل رویایی‌ت، نام و نام خانوادگی‌ت رو وارد کن.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="نام"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="نام خانوادگی"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-rose-600 transition-transform transform hover:scale-105"
        >
          شروع می‌کنم
        </button>
      </form>
      
      <p className="italic text-gray-500 mt-8 border-t border-rose-100 pt-6">
        "هر بدنی زیباست، فقط استایل مناسبش رو پیدا کن!"
      </p>
      <p className="text-sm font-semibold text-rose-400 mt-4">با شایان شیک، زیباتر از همیشه باش!</p>
    </div>
  );
};
