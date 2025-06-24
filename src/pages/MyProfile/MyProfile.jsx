import React, { use, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyProfile = () => {
	const { user, updateUser, setUser } = use(AuthContext);
	const { displayName, email, photoURL } = user;
	const handleUpdateProfile = (e) => {
		e.preventDefault();
		const displayName = e.target.name.value;
		const photoURL = e.target.photoURL.value;

		const displayNameTrim = displayName.trim();
		const photoURLTrim = photoURL.trim();

		if (!displayNameTrim || !photoURLTrim) {
			toast.error("Name and Photo URL must not be empty.");
			return;
		}

		const isValidName = displayNameTrim.length > 0;
		const isValidURL = /^https?:\/\/.+\..+/.test(photoURLTrim);

		if (!isValidName || !isValidURL) {
			toast.error("Please provide a valid name and photo URL.");
			return;
		}

		updateUser({ displayName, photoURL })
			.then(() => {
				setUser({ ...user, displayName, photoURL });
				toast.success("Account updated successfully!");
				e.target.reset();
			})
			.catch(() => {
				toast.error("Failed to update account. Please try again.");
			});
	};
	useEffect(() => {
		document.title = "Manage Your Profile and Account Information | SubBloom";
	}, []);
	return (
		<>
			<div className="bg-[#f8f9fa] py-10 px-4">
				<div className="container max-w-7xl mx-auto flex flex-col gap-8">
					<div className="mb-1 flex justify-between items-center sm:gap-6 gap-3">
						<div>
							<p className="text-sm md:text-lg text-c2a115b/40 mb-1">Welcome Back, {displayName}</p>
							<h1 className="text-lg md:text-2xl font-semibold text-c180a33">My Profile</h1>
						</div>

						<Link
							to="/dashboard"
							className="bg-c2a115b/20 font-semibold text-sm py-3 px-4 sm:px-9 rounded-lg cursor-pointer hover:bg-c5f29cc hover:text-white transition"
						>
							Dashboard
						</Link>
					</div>
					<div className="flex flex-col md:flex-row gap-10">
						<div className="bg-white p-6 xl:p-10 rounded-xl text-center flex-1">
							<img
								className="w-32 h-32 mx-auto rounded-full border-4 border-[#5f29cc] object-cover"
								src={photoURL}
								alt={displayName}
							/>
							<h2 className="text-2xl font-bold mt-4 text-c180a33 mb-2">{displayName}</h2>
							<div className="flex flex-col flex-wrap">
								<div className="font-bold">Email:</div>
								<p>{email}</p>
							</div>
						</div>

						<form onSubmit={handleUpdateProfile} className="bg-white p-4 xl:p-8 rounded-lg flex-1">
							<div className="fieldset">
								<label className="label text-xl  text-c180a33 mb-1 font-semibold">Name</label>
								<input
									type="text"
									name="name"
									className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
									placeholder="Enter your name"
								/>
								<label className="label text-xl  text-c180a33 mb-1 font-semibold mt-5">Photo URL</label>
								<input
									type="text"
									name="photoURL"
									className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
									placeholder="Enter your photoURL"
								/>

								<button
									type="submit"
									className="btn-neutral mt-4 bg-c5f29cc p-4 text-xl rounded-md text-white font-medium hover:bg-c5026a3 transition cursor-pointer"
								>
									Update Profile
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
