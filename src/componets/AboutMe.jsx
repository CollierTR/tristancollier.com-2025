import { RemoveScrollBar } from 'react-remove-scroll-bar'
import myPic from '../../public/myPic.png'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-10/12 justify-center place-items-center mx-auto h-screen gap-12 md:gap-16 my-20 sm:my-44 md:my-0">
        <div className="w-full md:w-1/2 flex place-items-center md:place-items-start text-center md:text-start flex-col gap-5">
            <h1 className="text-primary-light text-5xl blackOutline">About me...</h1>
            <p className="text-white text-2xl blackOutline text-pretty w-11/12">My name&lsquo;s Tristan. I&lsquo;m a self taught web developer. I enjoy creating user friendly applications and using the power of code to solve problems. If you&lsquo;re looking for a custom application or would just like to connect, please don&lsquo;t hesitate to reach out!</p>
            <Link to={'/contact'}>
            <button className='border border-primary-light text-2xl text-white py-2 px-8 text-pretty mt-2 w-fit rounded-xl bg-black'>Contact Me</button>
            </Link>
        </div>
        <div className="flex justify-center place-items-center w-10/12 md:w-5/12">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image xlinkHref={myPic} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="black"/>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
          </svg>
        </div>
        <RemoveScrollBar></RemoveScrollBar>
    </div>
  )
}

export default AboutMe
