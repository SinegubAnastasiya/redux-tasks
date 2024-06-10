import { useSelector, useDispatch } from "react-redux"
import { counter } from "../../slice/addNum"

function Task1() {
  const addOne = useSelector((state) => state.addNum)
  const dispatch = useDispatch()

  return (
    <>
      <p>Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
котором отображается значение (первоначальное значение 1). Ваша задача так
реализовать функционал, чтобы при клике на кнопку автоматически
прибавлялась +1 к значению параграфа</p>

      <p>{addOne}</p>
      <button onClick={() => dispatch(counter())}>+1</button>
    </>
  )
}

export default Task1