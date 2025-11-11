
export type User = {
  firstName: string;
  lastName: string;
};

export type Step = 'landing' | 'education' | 'quiz' | 'results';

export enum BodyShape {
  Apple = 'سیب',
  Pear = 'گلابی',
  Hourglass = 'ساعت شنی',
  Rectangle = 'مستطیل',
  None = 'نامشخص'
}

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    scores: { [key in BodyShape]?: number };
  }[];
}
