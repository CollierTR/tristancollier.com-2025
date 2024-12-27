import Hero from "../componets/Hero"
import SkillCloud from "../componets/SkillCloud"
import Projects from "../componets/Projects"
import Footer from "../componets/Footer"
import AboutMe from "../componets/AboutMe"
import Nav from "../componets/Nav"

const Main = () => {
  return (
            <div className="w-full h-screen overflow-y-auto">
              <Nav></Nav>
              <Hero />
              <AboutMe />
              <SkillCloud />
              <Projects />
              <Footer /> 
            </div>
  )
}

export default Main