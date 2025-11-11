
import { QuizQuestion, BodyShape } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "معمولاً وقتی وزن اضافه می‌کنید، بیشتر در کدام قسمت از بدن شما مشخص است؟",
    options: [
      { text: "شکم و دور کمر", scores: { [BodyShape.Apple]: 2 } },
      { text: "باسن و ران‌ها", scores: { [BodyShape.Pear]: 2 } },
      { text: "در همه جای بدن به طور یکنواخت", scores: { [BodyShape.Hourglass]: 1, [BodyShape.Rectangle]: 1 } },
      { text: "شانه‌ها و بالاتنه", scores: { [BodyShape.Apple]: 1 } }
    ]
  },
  {
    question: "کدام توصیف، کمر شما را بهتر بیان می‌کند؟",
    options: [
      { text: "باریک و کاملاً مشخص", scores: { [BodyShape.Hourglass]: 2, [BodyShape.Pear]: 1 } },
      { text: "مشخص نیست و تقریباً هم‌اندازه باسن و شانه‌هاست", scores: { [BodyShape.Rectangle]: 2 } },
      { text: "پهن و نامشخص", scores: { [BodyShape.Apple]: 2 } },
      { text: "مشخص است اما نه خیلی باریک", scores: { [BodyShape.Pear]: 1 } }
    ]
  },
  {
    question: "شلوارهای جین مورد علاقه شما کدام مدل هستند؟",
    options: [
      { text: "اسکینی (Skinny)", scores: { [BodyShape.Pear]: 1, [BodyShape.Hourglass]: 1 } },
      { text: "بوت‌کات یا دم‌پا گشاد (Bootcut)", scores: { [BodyShape.Pear]: 2, [BodyShape.Hourglass]: 1 } },
      { text: "مام استایل (Mom Jeans)", scores: { [BodyShape.Apple]: 2, [BodyShape.Rectangle]: 1 } },
      { text: "راسته (Straight)", scores: { [BodyShape.Rectangle]: 2, [BodyShape.Apple]: 1 } }
    ]
  },
  {
    question: "وقتی یک لباس تنگ می‌پوشید، فرم بدن شما چگونه به نظر می‌رسد؟",
    options: [
      { text: "انحنای باسن و ران‌ها کاملاً مشخص است.", scores: { [BodyShape.Pear]: 2 } },
      { text: "بالاتنه و پایین‌تنه متناسب و کمر باریک است.", scores: { [BodyShape.Hourglass]: 2 } },
      { text: "اندامم نسبتاً صاف و بدون انحنای زیاد به نظر می‌رسد.", scores: { [BodyShape.Rectangle]: 2 } },
      { text: "میان‌تنه‌ام پرتر به نظر می‌رسد.", scores: { [BodyShape.Apple]: 2 } }
    ]
  },
  {
    question: "کدام مدل دامن را بیشتر ترجیح می‌دهید؟",
    options: [
      { text: "دامن مدادی (Pencil Skirt)", scores: { [BodyShape.Hourglass]: 2 } },
      { text: "دامن کلوش یا A-line", scores: { [BodyShape.Pear]: 2, [BodyShape.Apple]: 1 } },
      { text: "دامن کوتاه و راسته", scores: { [BodyShape.Rectangle]: 2 } },
      { text: "دامن چین‌دار", scores: { [BodyShape.Apple]: 1, [BodyShape.Rectangle]: 1 } }
    ]
  },
  {
    question: "شانه‌های شما در مقایسه با باسن‌تان چگونه است؟",
    options: [
      { text: "شانه‌هایم به وضوح باریک‌تر از باسنم است.", scores: { [BodyShape.Pear]: 2 } },
      { text: "شانه‌ها و باسنم تقریباً هم‌عرض هستند.", scores: { [BodyShape.Hourglass]: 1, [BodyShape.Rectangle]: 2 } },
      { text: "شانه‌هایم پهن‌تر از باسنم به نظر می‌رسد.", scores: { [BodyShape.Apple]: 2 } },
      { text: "مطمئن نیستم، تقریباً متعادل هستند.", scores: { [BodyShape.Hourglass]: 1 } }
    ]
  },
  {
    question: "بهترین مدل تاپ یا تی‌شرت برای شما چیست؟",
    options: [
      { text: "یقه هفت (V-neck) که بالاتنه را کشیده‌تر نشان دهد.", scores: { [BodyShape.Apple]: 2, [BodyShape.Hourglass]: 1 } },
      { text: "مدل‌های دکلته یا یقه‌قایقی که شانه‌ها را نمایش دهد.", scores: { [BodyShape.Pear]: 2, [BodyShape.Rectangle]: 1 } },
      { text: "تاپ‌های جذب که انحنای کمر را نشان دهد.", scores: { [BodyShape.Hourglass]: 2 } },
      { text: "مدل‌های آزاد و راحت", scores: { [BodyShape.Apple]: 1, [BodyShape.Rectangle]: 1 } }
    ]
  },
  {
    question: "کدام نوع لباس مجلسی شما را جذاب‌تر می‌کند؟",
    options: [
      { text: "لباس‌هایی که از زیر سینه گشاد می‌شوند (Empire waist)", scores: { [BodyShape.Apple]: 2 } },
      { text: "لباس‌های جذب مدل ماهی (Mermaid)", scores: { [BodyShape.Hourglass]: 2 } },
      { text: "لباس‌هایی با دامن پفی و بالاتنه جذب", scores: { [BodyShape.Pear]: 2 } },
      { text: "لباس‌های راسته و ساده (Shift dress)", scores: { [BodyShape.Rectangle]: 2 } }
    ]
  },
  {
    question: "کدام اکسسوری را برای تکمیل استایل خود انتخاب می‌کنید؟",
    options: [
      { text: "کمربند پهن برای تاکید روی کمر", scores: { [BodyShape.Hourglass]: 1, [BodyShape.Rectangle]: 2 } },
      { text: "گردنبند بلند و آویزدار", scores: { [BodyShape.Apple]: 2 } },
      { text: "گوشواره‌های بزرگ و چشمگیر", scores: { [BodyShape.Pear]: 2 } },
      { text: "کمربند نازک روی باسن", scores: { [BodyShape.Hourglass]: 1 } }
    ]
  },
  {
    question: "در یک ست لباس، ترجیح می‌دهید تمرکز استایل روی کدام قسمت باشد؟",
    options: [
      { text: "روی پاها و پایین‌تنه", scores: { [BodyShape.Apple]: 2 } },
      { text: "روی شانه‌ها و گردن", scores: { [BodyShape.Pear]: 2 } },
      { text: "روی کمر", scores: { [BodyShape.Hourglass]: 2 } },
      { text: "یک استایل یکدست و متعادل", scores: { [BodyShape.Rectangle]: 2 } }
    ]
  }
];
