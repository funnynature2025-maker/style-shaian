
import React, { useState, useCallback } from 'react';
import { User, Step, BodyShape } from './types';
import { QUIZ_QUESTIONS } from './constants';
import { Landing } from './components/Landing';
import { Education } from './components/Education';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    const [step, setStep] = useState<Step>('landing');
    const [user, setUser] = useState<User>({ firstName: '', lastName: '' });
    const [bodyShape, setBodyShape] = useState<BodyShape>(BodyShape.None);

    const handleStart = (userData: User) => {
        setUser(userData);
        setStep('education');
    };

    const handleStartQuiz = () => {
        setStep('quiz');
    };

    const handleQuizComplete = useCallback((answers: number[]) => {
        const scores: { [key in BodyShape]?: number } = {
            [BodyShape.Apple]: 0,
            [BodyShape.Pear]: 0,
            [BodyShape.Hourglass]: 0,
            [BodyShape.Rectangle]: 0,
        };

        answers.forEach((answerIndex, questionIndex) => {
            const question = QUIZ_QUESTIONS[questionIndex];
            if (question && question.options[answerIndex]) {
                const optionScores = question.options[answerIndex].scores;
                for (const shape in optionScores) {
                    if (scores.hasOwnProperty(shape)) {
                        scores[shape as BodyShape]! += optionScores[shape as BodyShape]!;
                    }
                }
            }
        });
        
        // Remove 'None' to avoid it being a max score
        delete scores[BodyShape.None];

        let maxScore = -1;
        let resultShape = BodyShape.None;

        for (const shape in scores) {
            if (scores[shape as BodyShape]! > maxScore) {
                maxScore = scores[shape as BodyShape]!;
                resultShape = shape as BodyShape;
            }
        }
        
        setBodyShape(resultShape);
        setStep('results');
    }, []);

    const renderStep = () => {
        switch (step) {
            case 'landing':
                return <Landing onStart={handleStart} />;
            case 'education':
                return <Education onStartQuiz={handleStartQuiz} />;
            case 'quiz':
                return <Quiz onComplete={handleQuizComplete} />;
            case 'results':
                return <Results user={user} shape={bodyShape} />;
            default:
                return <Landing onStart={handleStart} />;
        }
    };

    return (
        <div className="bg-rose-50 min-h-screen text-gray-800">
            <header className="py-6 bg-white shadow-md">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-rose-500 font-cursive">شایان شیک</h1>
                    <p className="text-gray-600 mt-2">استایلت رو با اعتماد به نفس بساز!</p>
                </div>
            </header>

            <main className="container mx-auto p-4 md:p-8">
                <div className="transition-opacity duration-700 ease-in-out">
                    {renderStep()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
