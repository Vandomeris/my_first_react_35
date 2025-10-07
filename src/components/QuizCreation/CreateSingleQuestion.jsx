export default function CreateSingleQuestion({ question, editQuestion }) {
    return (
        <div>

            <label>
                <p>Введите вопрос</p>
                <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Вопрос" />
            </label>

            {
                question.options.map(option => (
                    <input type="text" value={option} />
                ))
            }
            <div>
                <button>Добавить вариант ответа</button>
            </div>



        </div>
    )
}
