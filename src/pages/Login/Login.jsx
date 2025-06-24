import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { TfiAngleRight } from "react-icons/tfi";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
	const { signInUserWithEmailPass, googleSignIn, setLoading } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		signInUserWithEmailPass(email, password)
			.then(() => {
				toast.success("Welcome back! You have successfully logged in.");
				navigate(location.state || "/");
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					toast.error("Wrong password. Please try again.");
				} else {
					toast.error("Login failed. Please try again.");
				}
			})
			.finally(() => setLoading(false));
	};
	const handleGoogleBtnLogin = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				const { creationTime, lastSignInTime } = user.metadata;
				if (creationTime === lastSignInTime) {
					toast.success("Account created successfully with Google! You're now logged in.");
				} else {
					toast.success("Welcome back! You've logged in with Google.");
				}
				navigate(location.state || "/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				toast.error(errorMessage);
			});
	};

	useEffect(() => {
		document.title = "Secure Login to Your Digital Service Dashboard | SubBloom";
	}, []);

	return (
		<>
			<div className="bg-[#f8f9fa] px-4 pt-10 pb-10 min-h-40 flex items-center text-center text-c180a33">
				<div className="container max-w-7xl mx-auto ">
					<h1 className="text-xl font-extrabold mb-3">Access Your Dashboard</h1>
					<p className="flex gap-1 items-center justify-center  font-thin text-[#666]">
						<span className="font-normal">
							<Link to="/">Home</Link>
						</span>{" "}
						<TfiAngleRight /> Login
					</p>
				</div>
			</div>
			<div className="max-w-[752px] md:mx-auto md:p-20 px-4 py-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-cf6f2ff text-3xl lg:text-4xl font-semibold text-center text-c180a33">
					Login your account
				</h2>
				<button onClick={handleGoogleBtnLogin} className="btn bg-white text-c180a33 border-[#e5e5e5] w-full rounded-lg">
					<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<g>
							<path d="m0 0H512V512H0" fill="#fff"></path>
							<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
							<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
							<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
							<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
						</g>
					</svg>
					Login with Google
				</button>
				<div className="flex items-center gap-4 my-6">
					<hr className="flex-grow border-t border-gray-300" />
					<span className="text-gray-500 text-sm font-medium">Or</span>
					<hr className="flex-grow border-t border-gray-300" />
				</div>
				<form onSubmit={handleLogin}>
					<div className="fieldset">
						<label className="label text-xl  text-c180a33 mb-1 font-semibold">Email address</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your email address"
						/>
						<label className="label text-xl  text-c180a33 mb-1 font-semibold mt-5">Password</label>
						<input
							type="password"
							name="password"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your password"
							autoComplete="autocomplete"
						/>
						<div className="mt-2">
							<button
								type="button"
								onClick={() => navigate("/forget-password", { state: { email } })}
								className="link link-hover"
							>
								Forgot password?
							</button>
						</div>
						<button
							type="submit"
							className="btn-neutral mt-4 bg-c5f29cc p-4 text-xl rounded-md text-white font-medium hover:bg-c5026a3 transition cursor-pointer"
						>
							Login
						</button>
						<p className="text-center mt-3 text-base text-c706f6f">
							Dont’t Have An Account ?{" "}
							<Link to="/register" className="text-c5f29cc">
								Register
							</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
