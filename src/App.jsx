import { Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './Pages/Page1'
// import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'
import Page7 from './Pages/Page7'
function App() {

  return (
    <div className="App">
    {/* <Page1/> */}

  
    <Routes>
   <Route path="/" element={<Page1/>}/>
   <Route path="/page2" element={<Page2/>}/>
   <Route path="/page3" element={<Page3/>}/>
   <Route path="/page4" element={<Page4/>}/>
   <Route path="/page5" element={<Page5/>}/>
   <Route path="/page6" element={<Page6/>}/>
   <Route path="/page7" element={<Page7/>}/>






    </Routes>
    </div>
  )
}

export default App
