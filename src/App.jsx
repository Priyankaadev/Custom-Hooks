import { useEffect, useState } from 'react'
import './App.css'
import usePrevious from './hooks/usePrevious'
import useWindowSize from './hooks/useWindowSize'
import useLocalStorage from './hooks/useLocalStorage'
import useGeolocation from './hooks/useGeolocation'

function App() {

  const [count, setCount] = useState(0)
  const prev = usePrevious(count)
  const size = useWindowSize();

  const [v, setV, removeV] = useLocalStorage('v', 'something')

  const pos = useGeolocation();

  useEffect(() => {
    console.log(size);
    console.log(pos);
  }, [size, pos])

  return (
    <>

      Current count : {count}
      <br />
      Previous count : {prev}
      <br />
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setV(count)}>add to local</button>
    </>
  )
}

export default App
