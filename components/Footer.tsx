
import React from 'react';
import { PhoneIcon, WebsiteIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-12 py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-rose-800 mb-4">با شایان شیک در ارتباط باش!</h2>
                <p className="text-gray-600 mb-8">برای خرید لباس‌های متناسب با استایلت و دریافت مشاوره، منتظر تماست هستیم.</p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                    <a href="tel:09122722460" className="flex items-center gap-2 text-lg text-gray-700 hover:text-rose-500 transition-colors">
                        <PhoneIcon />
                        <span>تماس: ۰۹۱۲۲۷۲۲۴۶۰</span>
                    </a>
                     <a href="https://shaianshik.ir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-gray-700 hover:text-rose-500 transition-colors">
                        <WebsiteIcon />
                        <span>سایت: shaianshik.ir</span>
                    </a>
                     <a href="https://instagram.com/shaianshik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-gray-700 hover:text-rose-500 transition-colors">
                        <InstagramIcon />
                        <span>اینستاگرام: @shaianshik</span>
                    </a>
                </div>

                <div className="bg-rose-100 p-4 rounded-lg max-w-2xl mx-auto mb-6">
                    <p className="font-semibold text-rose-700">نام شما ثبت شد! خبرنامه استایل‌های هفتگی به زودی برای شما ارسال خواهد شد.</p>
                </div>

                <div className="bg-amber-100 border-t-4 border-amber-400 p-4 rounded-b-lg max-w-2xl mx-auto">
                    <p className="font-bold text-amber-800">اولین خریدت ۱۰٪ تخفیف داره!</p>
                    <p className="text-amber-700">شایان شیک: جایی که زیبایی‌ات رو جشن می‌گیریم.</p>
                </div>
                
                <p className="text-xs text-gray-400 mt-8">
                    اطلاعات شما نزد ما محرمانه باقی می‌ماند.
                </p>
            </div>
        </footer>
    );
};
