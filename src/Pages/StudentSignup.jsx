import Footer from "../componets/Footer";
import Nav from "../componets/Nav";

export default function StudentSignup() {
	return (
		<main className="flex flex-col place-items-center w-full h-screen overflow-y-auto mx-auto">
			<Nav></Nav>

			<div className="w-11/12 flex justify-center mb-40 mt-32 gap-x-20 mx-auto lg:flex-row text-primary-light flex-col place-items-center lg:place-items-start gap-40">
				<div className="flex-col flex gap-4 lg:gap-10 lg:w-5/12 w-10/12 blackOutline ">
					<h1 className="lg:text-6xl text-primary-light text-5xl">
						Let’s begin your learning journey!
					</h1>
					<p className="lg:text-2xl text-2xl text-white">
						If you’re interested in weekly lessons and one-on-one
						coaching, fill out this contact form so we can get
						started!
					</p>
					<p className="text-4xl">$199 monthly</p>
				</div>

				<div className="lg:w-5/12 w-full  sm:w-9/12">
					<form
						className="flex flex-col gap-4 md:gap-6 place-items-center"
						name="Contact Form"
						method="post"
						action="/student-signup"
					>
						<input
							type="hidden"
							name="form-name"
							value="Contact Form"
						/>
						<span className="flex gap-2 flex-col md:w-3/4 w-10/12">
							<input
								type="hidden"
								name="form-name"
								value="Contact Form"
							/>
							<label
								htmlFor="firstName"
								className="text-base md:text-xl text-white "
							>
								First name:
							</label>
							<input
								type="text"
								name="firstName"
								required
								id="firstName"
								placeholder="John"
								className="md:text-xl border-2 rounded-lg p-2 border-primary bg-black"
							/>
						</span>
						<span className="flex gap-2 flex-col md:w-3/4 w-10/12">
							<label
								htmlFor="lastName"
								className="text-base md:text-xl text-white"
							>
								Last Name:
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="md:text-xl border-2 rounded-lg p-2 border-primary bg-black"
								name="lastName"
								required
								id="lastName"
							/>
						</span>
						<span className="flex gap-2 flex-col w-10/12 md:w-3/4">
							<label
								htmlFor="email"
								className="text-base md:text-xl text-white"
							>
								Email:
							</label>
							<input
								className="md:text-xl border-2 rounded-lg p-2 border-primary bg-black"
								type="email"
								required
								placeholder="example@email.com"
								id="email"
								name="email"
							/>
						</span>
						<button
							type="submit"
							className=" border-2 border-primary hover:border-primary-light text-white  bg-black rounded-lg w-10/12 md:w-3/4 md:text-2xl robo py-2 md:py-3"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<Footer></Footer>
		</main>
	);
}
