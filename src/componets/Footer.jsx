import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { Link } from "react-router-dom"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faCircle, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <div className="py-8 flex flex-col justify-center gap-5 place-items-center border-t-2 border-t-primary text-white bg-black">

        <div className="flex w-4/5 px-6 text-4xl  justify-center place-items-center">
            <div className="flex justify-between w-full">
                <p>Stay in touch!</p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:tristancollier777@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} transform='shrink-6' size="md" mask={faCircle}  className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="tel:5402206532">
                    <FontAwesomeIcon icon={faPhone} transform='shrink-6' size="md" mask={faCircle} className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="https://github.com/CollierTR">
                    <FontAwesomeIcon icon={faGithub} size="md" className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tristan-collier-263b67263/">
                    <FontAwesomeIcon icon={faLinkedin} size="md" className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>


        <div className="flex text-lg justify-between place-items-center border-t-2 w-4/5 p-6 border-t-primary pt-6">
            <div className="flex justify-center gap-4">
                <Link to={'/'}>
                <p className="hover:text-primary-light">Home</p>
                </Link>
                <Link to={'/contact'}>
                <p className="hover:text-primary-light">Contact</p>
                </Link>
            </div>
            <p>Copyright © 2024</p>
        </div>


    </div>
  )
}

export default Footer
