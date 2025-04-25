import Nav from "../componets/Nav";
import Footer from "../componets/Footer";

export default function LearnToCodePage() {
	return (
		<main className="flex flex-col place-items-center w-full h-screen overflow-y-auto mx-auto">
			<Nav></Nav>

			<div className="w-10/12 text-white text-2xl flex flex-col justify-center place-items-center gap-10">
				<div className="flex h-screen justify-center place-items-center gap-20 2xl:gap-0 ">
					<div className="flex flex-col gap-2 justify-start place-items-start w-3/5">
						<h1 className="text-primary-light my-6 text-4xl sm:text-7xl blackOutline">
							Learn to Code!
						</h1>
						<p className="2xl:w-4/5 text-pretty blackOutline">
							Are you ready to unlock your potential and dive into
							the world of coding? Whether you’re just starting
							out or looking to sharpen your skills, I’m here to
							guide you every step of the way. Let’s work together
							to turn your ideas into reality one line of code at
							a time.
						</p>
						<button className=" bg-black my-6 rounded-xl text-nowrap text-xl lg:text-3xl border-2 border-primary-light py-3 px-8 transform transition-transform duration-500 hover:scale-105">
							Let’s Get Started!
						</button>
					</div>
					<img
						className="w-2/5 2xl:w-1/3  transform scale-x-[-1]"
						src="developerCoding.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-4 text-center w-3/4 my-20  justify-center place-items-center mx-auto">
					<h2 className="text-primary-light text-center my-6 text-3xl sm:text-6xl blackOutline">
						Become a fabled 10x developer!
					</h2>
					<p className="2xl:w-4/5 text-pretty blackOutline">
						Have you ever wondered what it takes to be a 10x
						developer—the kind of programmer who seems to turn every
						project into gold, solve complex problems effortlessly,
						and inspire entire teams? It’s not about working harder;
						it’s about working smarter. I’ll teach you the skills,
						tools, and mindset you need to level up: Master
						problem-solving with elegant, efficient solutions.
						Optimize your workflow using tools that save time and
						minimize effort. Write clean, scalable code that makes
						an impact. Becoming a 10x developer is about growth,
						focus, and strategy. Let’s get started on your journey
						to becoming a legend in the tech world.
					</p>
					<button className=" bg-black my-6 rounded-xl text-nowrap text-xl lg:text-3xl border-2 border-primary-light py-3 px-8 transform transition-transform duration-500 hover:scale-105">
						Unlock the 10x Path!
					</button>
				</div>
				<img
					className="w-2/5 2xl:w-1/2  transform scale-x-[-1] "
					src="developerCoding.png"
					alt=""
				/>
				<div className="flex flex-row-reverse min:h-screen justify-center place-items-start 2xl:gap-0 ">
					<div className="flex flex-col gap-2 justify-center place-items-center text-pretty w-4/5">
						<h1 className="text-primary-light my-6 text-4xl sm:text-7xl blackOutline">
							Learn to Code!
						</h1>
						<p className="2xl:w-4/5 text-pretty blackOutline text-center mb-6">
							Together, we’ll cover the essential technologies and
							frameworks that power the modern web, along with the
							tools and skills that make you stand out. Here’s
							what you’ll master:
						</p>
						<ul className="flex flex-wrap justify-center  place-items-start  blackOutline mb-6">
							<li className="w-1/2 mb-4 flex flex-col justify-center place-items-center">
								<strong className="text-primary">
									Frontend Development:
								</strong>
								<ul className="list-disc list-outside list">
									<li>Html</li>
									<li>CSS</li>
									<li>Tailwind</li>
									<li>React</li>
									<li>Next</li>
								</ul>
							</li>
							<li className="w-1/2 flex mb-4 flex-col justify-center place-items-center">
								<strong className="text-primary">
									Backend Development:
								</strong>
								<ul className="list-disc list-outside list">
									<li>Python</li>
									<li>JavaScript (Node.js)</li>
									<li>Express</li>
									<li>API Integration</li>
									<li>Serverless Solutions</li>
								</ul>
							</li>
							<li className="w-1/2 flex flex-col justify-center place-items-center">
								<strong className="text-primary">
									Version Control:
								</strong>
								<ul className="list-disc list-outside list">
									<li>Git</li>
									<li>Github</li>
								</ul>
							</li>
							<li className="w-1/2 flex flex-col justify-center place-items-center">
								<strong className="text-primary">
									Database Essentials:
								</strong>
								<ul className="list-disc list-outside list">
									<li>SQL</li>
									<li>Mongo DB</li>
								</ul>
							</li>
						</ul>
					<button className=" bg-black my-6 rounded-xl text-nowrap text-xl lg:text-3xl border-2 border-primary-light py-3 px-8 transform transition-transform duration-500 hover:scale-105">
                        Let’s do this!
					</button>
					</div>
				</div>
			</div>

			<Footer></Footer>
		</main>
	);
}
