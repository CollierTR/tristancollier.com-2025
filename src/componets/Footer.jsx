import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { Link } from "react-router-dom"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faCircle, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <div className="py-8 flex flex-col justify-center gap-8  place-items-center border-t-2 border-t-primary text-white bg-black">

        <div className="flex w-4/5 px-6 text-4xl  justify-center place-items-center">
            <div className="flex flex-col md:flex-row  gap-6 justify-between w-full">
                <p className="lg:text-start text-center">Stay in touch!</p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:tristancollier777@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} transform='shrink-6'  mask={faCircle}  className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="tel:5402206532">
                    <FontAwesomeIcon icon={faPhone} transform='shrink-6'  mask={faCircle} className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="https://github.com/CollierTR">
                    <FontAwesomeIcon icon={faGithub}  className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tristan-collier-263b67263/">
                    <FontAwesomeIcon icon={faLinkedin}  className="hover:text-primary-light hover-bounce cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>


        <div className="flex text-lg justify-between flex-col md:flex-row gap-4  place-items-center border-t-2 w-4/5 p-6 border-t-primary pt-6">
            <div className="flex justify-center gap-4 text-2xl text-primary lg:text-white">
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
