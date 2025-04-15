import { TypeAnimation } from "react-type-animation"
import { Link } from "react-router-dom"



function Hero() {



  return (
    <div className="text-white text-center flex flex-col justify-center place-items-center w-full gap-10 h-screen">
        <p className="text-2xl sm:text-4xl blackOutline">Are you looking for</p>
        <TypeAnimation
            className="text-primary-light text-4xl sm:text-7xl blackOutline"
            sequence={[
                'A Website?',
                4000,
                'Custom Software?',
                4000,
                'Data Analytics?',
                4000,
                'System Automation?',
                4000
            ]}
            repeat={Infinity}
            speed={20}
        />
        <p className="text-2xl sm:text-4xl blackOutline w-11/12">
            I can help you take your business to <br className="hidden md:block"/> the <span className="text-primary">next level!</span>
        </p>
        <Link to={'/contact'} className="w-3/5 md:w-1/4">
        <button className=" bg-black rounded-xl text-nowrap text-xl lg:text-2xl border-2 border-primary-light w-full py-2 px-4 transform transition-transform duration-500 hover:scale-110">
            Free Consultation!
        </button>
        </Link>
    </div>
  )
}

export default Hero
