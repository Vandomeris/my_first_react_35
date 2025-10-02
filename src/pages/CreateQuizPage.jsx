import { useState } from "react";
import CreateDirectQuestion from "../components/QuizCreation/CreateDirectQuestion";

export default function CreateQuizPage() {


    const [quiz, setQuiz] = useState([
        { id: Date.now(), type: 'direct', options: [], question: '', correctAnswer: '', },
    ])

    function addQuestion() {
        setQuiz(
            [
                ...quiz,
                { id: Date.now(), type: 'direct', options: [], question: '', correctAnswer: '', },
            ]
        )
    }

    return (
        <div>
            {
                quiz.map(question => (
                    <div>
                        <select>
                            <option value="direct">Прямой ответ</option>
                            <option value="single">1 ответ из вариантов</option>
                            <option value="multiple">Несколько ответов из вариантов</option>
                        </select>
                        <CreateDirectQuestion question={question} />
                    </div>
                ))
            }


            <button onClick={() => addQuestion()}>Добавить вопрос</button>


        </div>
    )
}
