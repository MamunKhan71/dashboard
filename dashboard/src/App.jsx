import { useState } from 'react'
import LeftContainer from './components/dashboard/LeftContainer'
import RightContainer from './components/dashboard/RightContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-inter mx-auto container'>
      <div className='flex'>
          <LeftContainer />
          <RightContainer />
      </div>
    </div>
  )
}

export default App
