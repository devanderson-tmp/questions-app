export interface QCInterface {
	questions: QuestionProps[];
	setQuestions: (questions: QuestionProps[]) => void;
}

export interface QuestionProps {
	answers: string[];
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	selected_answer: string;
	type: string;
}

export type ErrorProps = {
	error: any;
	errorTouched: any;
}
