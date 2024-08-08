import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Format from './components/Format'
import PageOne from './components/PageOne'
import Pagetwo from './components/Pagetwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'

function App() {

  return (
    <Format>
      <PageOne />
      <Pagetwo />
      <PageFour />
      <PageThree />
      <PageFive />
    </Format>
  )
}

export default App
