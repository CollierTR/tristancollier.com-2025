import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss, faHtml5, faJs, faLinux, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons/faGitAlt"
import { faChartSimple, faDatabase } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function SkillItem({arr, togglePlayMarquee}) {

    const [skillInteraction, toggleSkillInteraction] = useState(false)

    function handleHover() {
        togglePlayMarquee(false)
        toggleSkillInteraction(true)
    }

    function handleExit() {
        togglePlayMarquee(true)
        toggleSkillInteraction(false)
    }


  return (
      
        <div  className={`flex justify-center place-items-center text-7xl mx-12 size-28  ${arr.iconColor} text-primary-light`}>
            {/* { skillInteraction &&
            <div className="  text-3xl p-2 text-red-500 absolute top-0">
                <p>{arr.title}</p>
            </div> 
            } */}
            <FontAwesomeIcon icon={arr.icon} className="text-primary hover:text-primary-light" onMouseMove={() => handleHover()} onMouseLeave={() => handleExit()} />
            { skillInteraction &&
            <div className="  text-xl p-2 text-white absolute -bottom-1 flex justify-center place-items-center">
                <p className="border-2 text-nowrap border-primary py-1 px-6 rounded-full">{arr.title}</p>
            </div> 
            }
        </div>
  )
}

export default SkillItem
