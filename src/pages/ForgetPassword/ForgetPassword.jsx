import React, { use, useState, useEffect } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
	const location = useLocation();
	const [email, setEmail] = useState(location.state?.email || "");
	const { resetPasswordRequest } = use(AuthContext);
	const handleResetPasswordRequest = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		resetPasswordRequest(email)
			.then(() => {
				toast.success("Check your inbox for the password reset link.");
				setTimeout(() => {
					window.open("https://mail.google.com", "_blank");
				}, 1500);
			})
			.catch((error) => {
				if (error.code === "auth/user-not-found") {
					toast.error("No account found with this email.");
				} else if (error.code === "auth/invalid-email") {
					toast.error("Invalid email format.");
				} else {
					toast.error("Something went wrong. Try again later.");
				}
			});
	};
	useEffect(() => {
		document.title = "Forget Password | SubBloom";
	}, []);
	return (
		<>
			<div className="bg-[#f8f9fa] px-4 pt-10 pb-10 min-h-40 flex items-center text-center text-c180a33">
				<div className="container max-w-7xl mx-auto ">
					<h1 className="text-xl font-extrabold mb-3">Reset Your Password</h1>
					<p className="flex gap-1 items-center justify-center  font-thin text-[#666]">
						<span className="font-normal">
							<Link to="/">Home</Link>
						</span>{" "}
						<TfiAngleRight /> Forget Password
					</p>
				</div>
			</div>
			<div className="max-w-[752px] md:mx-auto md:p-20 px-4 py-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-cf6f2ff text-3xl lg:text-4xl font-semibold text-center text-c180a33">
					Forgot your password?
				</h2>
				<form onSubmit={handleResetPasswordRequest}>
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
						<button
							type="submit"
							className="btn-neutral mt-4 bg-c5f29cc p-4 text-xl rounded-md text-white font-medium hover:bg-c5026a3 transition cursor-pointer"
						>
							Request Password Reset
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

export default ForgetPassword;
