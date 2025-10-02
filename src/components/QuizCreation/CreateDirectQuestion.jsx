export default function CreateDirectQuestion({ question }) {
    return (

        <div>
            <label>
                <p>Введите вопрос</p>
                <input value={question.question} type="text" placeholder="Вопрос" />
            </label>
            <label>
                <p>Введите правильный ответ</p>
                <input value={question.correctAnswer} type="text" placeholder="Ответ" />
            </label>
        </div>

    )
}
