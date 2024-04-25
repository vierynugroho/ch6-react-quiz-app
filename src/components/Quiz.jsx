import { useCallback, useState } from 'react';
import QUESTIONS from '../../public/dummy_data/questions';
import image_quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QUestionTimer';

const Loading = () => {
	return <h2>🔃 Loading...</h2>;
};

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setUserAnswers((prev) => {
			return [...prev, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = useCallback(() => {
		handleSelectAnswer(null);
	}, [handleSelectAnswer]);

	if (quizIsComplete) {
		return (
			<>
				<div id='summary'>
					<img
						src={image_quizComplete}
						alt=''
					/>
					<h2>URAAA</h2>
					<h2>Quiz Completed!!!</h2>
				</div>
			</>
		);
	}

	const shuffledANswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledANswers.sort(() => Math.random() - 0.5);

	return (
		<main>
			<div id='quiz'>
				<div id='question'>
					<QuestionTimer
						key={activeQuestionIndex}
						timeout={10000}
						onTimeout={handleSkipAnswer}
					/>
					<p>{QUESTIONS[activeQuestionIndex].text}</p>

					<ul id='answers'>
						{shuffledANswers.map((answer) => (
							<li
								key={answer}
								className='answer'
							>
								<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Quiz;
