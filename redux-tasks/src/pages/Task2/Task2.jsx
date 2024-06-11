import { useSelector, useDispatch } from "react-redux"
import { plusOne, minusOne, reset } from "../../slice/counter"

function Task2() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <p>2. Создайте компонент, который будет отображать числовое значение и кнопки +1
и -1. При нажатии на кнопку увеличивать и уменьшать значения счетчика.</p>

      <p>{counter}</p>
      <button onClick={() => dispatch(plusOne())}>+1</button>
      <button onClick={() => dispatch(minusOne())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default Task2