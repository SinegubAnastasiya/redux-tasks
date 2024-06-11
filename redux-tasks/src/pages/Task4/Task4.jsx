import { useSelector, useDispatch } from "react-redux"
import { checkWord } from "../../slice/palindrom"

function Task4() {
  const inp = useSelector((state) => state.palindrom)
  const dispatch = useDispatch()

  return (
    <>
      <p>4. Создайте компонент формы. По клику на кнопку собрать данные из input и
проверить вводимую строку на палиндром</p>

      <input onChange={(e) => dispatch(checkWord(e.target.value))}></input>
      {/* <button onClick={() => console.log(inp === inp.split('').reverse().join('') ? 'палиндром' : 'не палиндром')}>Click</button> */}
      <h1>{inp === inp.split('').reverse().join('') ? 'палиндром' : 'не палиндром'}</h1>
    </>
  )
}

export default Task4