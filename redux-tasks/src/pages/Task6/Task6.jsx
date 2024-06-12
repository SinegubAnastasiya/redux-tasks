import { useSelector, useDispatch } from "react-redux"
import { checkEmail } from "../../slice/validation"

function Task4() {
  const flag = useSelector((state) => state.validation)
  const dispatch = useDispatch()

  return (
    <>
      <p>6. Создайте компонент, который отображает проверку почты (true, false) на
валидность регулярному выражению. Валидатор состоит из Input для ввода почты
и кнопки для запуска валидатора</p>

      <input onChange={(e) => dispatch(checkEmail(e.target.value))}></input>
      <p>{flag ? 'valid' : 'invalid'}</p>
    </>
  )
}

export default Task4