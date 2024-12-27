import { TypeAnimation } from "react-type-animation"
import { Link } from "react-router-dom"



function Hero() {



  return (
    <div className="text-white text-center flex flex-col justify-center place-items-center w-full gap-10 h-screen">
        <p className="text-4xl blackOutline">Are you looking for</p>
        <TypeAnimation
            className="text-primary-light text-7xl blackOutline"
            sequence={[
                'A Website?',
                4000,
                'An App?',
                4000,
                'Custom Software?',
                4000,
                'System Automation?',
                4000
            ]}
            repeat={Infinity}
            speed={20}
        />
        <p className="text-4xl blackOutline">
            I can help you take your business to <br /> the <span className="text-primary">next level!</span>
        </p>
        <Link to={'/contact'} className="w-1/4">
        <button className=" bg-black rounded-xl text-2xl border-2 border-primary-light w-full py-2 px-4 transform transition-transform duration-500 hover:scale-110">
            Free Consultation!
        </button>
        </Link>
    </div>
  )
}

export default Hero
