import { useSelector, useDispatch } from "react-redux"
import { plusSize, minusSize } from "../../slice/changeSize"

function Task9() {
  const textSize = useSelector((state) => state.changeSize)
  const dispatch = useDispatch()

  return (
    <>
      <p>9. Создайте компонент, который позволяет пользователю управлять размером
        текста на странице с помощью кнопок увеличить и уменьшить.</p>

      <h1 style={{ fontSize: textSize }}>Text</h1>
      <button onClick={() => dispatch(plusSize())}>увеличить</button>
      <button onClick={() => dispatch(minusSize())}>уменьшить</button>
    </>
  )
}

export default Task9