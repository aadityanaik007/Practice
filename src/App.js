import React from 'react'
import Main from './component/Main'
import { Routes, Route } from 'react-router-dom';
import ChildComponent from './component/Child';
import RenderingTrial from './component/renderingTrial';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='Main' element={<Main />} />
        {/* <Route path='Main' element={< RenderingTrial/>} /> */}
        <Route path='Child' element={<ChildComponent />} />
      </Routes>
    </div>
  )
}

export default App