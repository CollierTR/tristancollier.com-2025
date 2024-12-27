import { Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound"
import Main from "./Pages/Main"
import Contact from "./Pages/Contact"
import GridBackgroundContainer from "./componets/HexGridContainer/HexBackgroundContainer"

function App() {

  return (
    <>
      <GridBackgroundContainer hexSize='700px' lightOutside="#3df03a" hexBrightness="15%" width="w-full">


        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

 


      </GridBackgroundContainer>
    </>
  )
}

export default App
