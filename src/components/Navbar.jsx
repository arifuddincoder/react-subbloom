import React, { use } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/auth/AuthContext";
import toast from "react-hot-toast";
import { PiUserCircleFill } from "react-icons/pi";
const Navbar = () => {
	const { user, signOutUser } = use(AuthContext);
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				toast.success("You’re now logged out. See you again soon!");
			})
			.catch((error) => {
				toast(error);
			});
	};
	return (
		<div className="navbar container max-w-7xl mx-auto py-4 items-center flex">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="px-3 py-4 rounded-md bg-c5f29cc/30 lg:hidden mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" />{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu  dropdown-content bg-base-100 text-base rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/my-profile">My Profile</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
					</ul>
				</div>
				<Link className="">
					<img src={logoImg} alt="SubBloom Official Logo" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu-horizontal text-base font-bold text-c180a33 flex flex-wrap w-fit gap-10">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/my-profile">My Profile</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<div className="mr-3 relative group">
							{user.photoURL ? (
								<img
									src={user.photoURL}
									alt="Profile photo"
									className="w-10 h-10 rounded-full object-cover  cursor-pointer"
								/>
							) : (
								<PiUserCircleFill size={41} />
							)}
							<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-sm text-white bg-c180a33 rounded opacity-0 group-hover:opacity-100 transition duration-200 z-30">
								{user.displayName}
							</div>
						</div>
						<button
							onClick={handleLogout}
							className="bg-c5f29cc hover:bg-c5026a3 transition text-white font-semibold py-2.5 px-8 rounded-lg cursor-pointer"
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							to="/login"
							className="bg-c5f29cc hover:bg-c5026a3 transition text-white font-semibold py-2.5 px-8 rounded-lg"
						>
							Login
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
