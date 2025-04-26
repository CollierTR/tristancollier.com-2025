import { Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound"
import Main from "./Pages/Main"
import Contact from "./Pages/Contact"
import LearnToCodePage from "./Pages/LearnToCodePage"
import StudentSignup from "./Pages/StudentSignup"
import GridBackgroundContainer from "./componets/HexGridContainer/HexBackgroundContainer"

function App() {

  return (
    <>
      <GridBackgroundContainer hexSize='700px' lightOutside="#3df03a" hexBrightness="15%" width="w-full">


        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/learn-to-code" element={<LearnToCodePage />}/>
          <Route path="/student-signup" element={<StudentSignup />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

 


      </GridBackgroundContainer>
    </>
  )
}

export default App
