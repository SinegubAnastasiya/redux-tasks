import { useSelector, useDispatch } from "react-redux"
import { showText, hideText } from "../../slice/text"

function Task4() {
  const inp = useSelector((state) => state.text)
  const dispatch = useDispatch()

  return (
    <>
      <p>Создайте компонент, который предоставляет две кнопки: Показать и Скрыть.
При нажатии на Показать отображается текст, а при нажатии на Скрыть текст
скрывается.</p>

      <button onClick={() => dispatch(showText())}>Show</button>
      <button onClick={() => dispatch(hideText())}>Hide</button>
      <h1>{inp ? 'Text' : ''}</h1>
    </>
  )
}

export default Task4