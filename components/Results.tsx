
import React from 'react';
import { User, BodyShape } from '../types';
import { BulletIcon } from './Icons';

interface ResultsProps {
    user: User;
    shape: BodyShape;
}

const resultsData = {
    [BodyShape.Apple]: {
        title: "فرم بدن شما: سیب",
        image: "https://picsum.photos/seed/applefashion/600/800",
        tips: [
            "لباس‌هایی با یقه هفت (V-neck) بالاتنه شما را کشیده‌تر نشان می‌دهند.",
            "از پیراهن‌ها و تونیک‌هایی که زیر سینه گشاد می‌شوند (Empire waist) استفاده کنید.",
            "شلوارهای راسته یا دم‌پا گشاد، تعادل زیبایی در اندام شما ایجاد می‌کنند.",
            "تمرکز استایل را با استفاده از شلوارهای رنگی یا کفش‌های جذاب به پاهای خود منتقل کنید."
        ]
    },
    [BodyShape.Pear]: {
        title: "فرم بدن شما: گلابی",
        image: "https://picsum.photos/seed/pearfashion/600/800",
        tips: [
            "تاپ‌های یقه‌قایقی یا دارای جزئیات روی شانه، توجه را به بالاتنه شما جلب می‌کنند.",
            "کت‌ها و مانتوهای اپل‌دار برای ایجاد تعادل در شانه‌ها عالی هستند.",
            "شلوارهای تیره و راسته یا بوت‌کات، پایین‌تنه را متناسب‌تر نشان می‌دهند.",
            "دامن‌های مدل A-line بهترین انتخاب برای شما هستند."
        ]
    },
    [BodyShape.Hourglass]: {
        title: "فرم بدن شما: ساعت شنی",
        image: "https://picsum.photos/seed/hourglassfashion/600/800",
        tips: [
            "لباس‌های کمردار که بر انحنای زیبای کمرتان تاکید کنند، فوق‌العاده‌اند.",
            "پارچه‌های نرم و لطیف که فرم بدن شما را دنبال می‌کنند، بهترین گزینه هستند.",
            "شلوارهای فاق بلند (High-waist) و دامن‌های مدادی برای شما ساخته شده‌اند.",
            "از پوشیدن لباس‌های خیلی گشاد که فرم بدنتان را پنهان می‌کند، خودداری کنید."
        ]
    },
    [BodyShape.Rectangle]: {
        title: "فرم بدن شما: مستطیل",
        image: "https://picsum.photos/seed/rectanglefashion/600/800",
        tips: [
            "با استفاده از کمربند روی لباس‌ها، برای خودتان خط کمر ایجاد کنید.",
            "لباس‌های دارای چین، پیلی یا جزئیات در قسمت سینه و باسن، به اندام شما حجم می‌دهند.",
            "شلوارهای مدل بوی‌فرند (Boyfriend) یا مام استایل (Mom Jeans) انتخاب‌های خوبی هستند.",
            "تاپ‌ها و بلوزهای یقه‌گرد و لایه‌لایه پوشیدن به ایجاد انحنا کمک می‌کند."
        ]
    },
    [BodyShape.None]: {
        title: "نتیجه نامشخص",
        image: "https://picsum.photos/seed/fashion/600/800",
        tips: ["به نظر می‌رسد پاسخ‌های شما ترکیبی از فرم‌های مختلف است. این یعنی شما می‌توانید از استایل‌های متنوعی لذت ببرید! برای مشاوره دقیق‌تر با ما در تماس باشید."]
    }
};

export const Results: React.FC<ResultsProps> = ({ user, shape }) => {
    const data = resultsData[shape];

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-rose-800">
                    خانم {user.firstName} {user.lastName} عزیز،
                </h2>
                <p className="text-xl text-rose-500 mt-2">{data.title}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src={data.image} alt={data.title} className="rounded-lg shadow-md w-full h-auto object-cover max-h-[500px]" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">توصیه‌های استایل برای شما:</h3>
                    <ul className="space-y-3">
                       {data.tips.map((tip, index) => (
                           <li key={index} className="flex items-start">
                             <BulletIcon />
                             <span className="mr-3 text-gray-600">{tip}</span>
                           </li>
                       ))}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10 border-t border-rose-100 pt-6">
                 <p className="italic text-gray-600 text-lg">"تو منحصر به فردی، استایلت هم باید منحصر باشه!"</p>
                 <p className="font-semibold text-rose-500 mt-4">همین حالا از شایان شیک الهام بگیر و بدرخش!</p>
            </div>
        </div>
    );
};
