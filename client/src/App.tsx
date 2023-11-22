import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nations } from './components/Nations/Nations'
import { SelectNation } from './components/SelectNation/SelectNation'
import { Vehicles } from './components/Vehicles/Vehicles'

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Nations/>}/>
      <Route path="/:nation/" element={<SelectNation />}/>
      <Route path="/:nation/:type?" element={<Vehicles />}/>
    </Routes>      
  )
}

export default App
