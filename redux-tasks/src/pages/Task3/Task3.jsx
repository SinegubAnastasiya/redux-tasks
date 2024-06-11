import { useSelector, useDispatch } from "react-redux"
import { showInp } from "../../slice/inpVal"

function Task3() {
  const inp = useSelector((state) => state.inpVal)
  const dispatch = useDispatch()

  return (
    <>
      <p>3. Создайте компонент текстового поля, который позволяет пользователю вводить
текст и отображает его в реальном времени.</p>

      <input onChange={(e) => dispatch(showInp(e.target.value))}></input>
      <p>{inp}</p>
    </>
  )
}

export default Task3