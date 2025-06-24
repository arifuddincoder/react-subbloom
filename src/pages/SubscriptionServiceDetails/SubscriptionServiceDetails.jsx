import React, { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { TfiAngleRight } from "react-icons/tfi";
import { Link, useLoaderData } from "react-router";
import StarRating from "../../components/ui/StarRating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
const SubscriptionServiceDetails = () => {
	const [reviews, setReviews] = useState([]);
	const [rating, setRating] = useState(0);
	const service = useLoaderData();
	const {
		name,
		banner,
		frequency,
		price,
		description,
		tech_category,
		features,
		subscription_benefits,
		ratings,
		number_of_reviews,
	} = service;

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const text = form["your-review"].value;

		if (!text || rating < 1) return toast.error("Please provide both review and rating!");

		const newReview = { text, rating };
		setReviews([...reviews, newReview]);
		form.reset();
		setRating(0);
	};

	useEffect(() => {
		document.title = `${name} Service | SubBloom`;
	}, [name]);

	return (
		<>
			<div className="bg-[#f8f9fa] px-4 pt-10 pb-10 min-h-40 flex items-center text-center text-c180a33">
				<div className="container max-w-7xl mx-auto ">
					<h1 className="text-xl font-extrabold mb-3">{name}</h1>
					<p className="flex gap-1 items-center justify-center  font-thin text-[#666]">
						<span className="font-normal">
							<Link to="/">Home</Link>
						</span>{" "}
						<TfiAngleRight /> {name}
					</p>
				</div>
			</div>
			<div className="container max-w-7xl mx-auto pt-8 lg:pt-14 xl:pb-20 px-4 lg:px-8 xl:px-0">
				<div className="flex flex-col lg:flex-row xl:gap-18 gap-5 lg:gap-10">
					<div className="xl:max-w-[650px] relative">
						<img className="rounded-lg h-full object-cover object-center" src={banner} alt={name} />
						<h5 className="absolute right-6 top-2.5 bg-cf6f2ff py-1 px-4 rounded-full text-xs text-c180a33 transition">
							{tech_category}
						</h5>
					</div>
					<div className="w-auto">
						<h1 className="text-xl md:text-3xl font-bold mb-4">{name}</h1>
						<p className="text-lg mb-2">{description}</p>
						<div className="flex gap-2 items-center">
							<StarRating rating={ratings}></StarRating> <p className="text-sm">{number_of_reviews}</p>
						</div>
						<div className="my-5 py-5 border-y border-c2a115b/20">
							<h3 className="text-lg md:text-xl font-bold mb-2">Features</h3>
							<ul className="space-y-3 text-c180a33 font-semibold">
								{features.map((feature, idx) => (
									<li key={idx} className="flex items-center gap-4">
										<MdCheck size={25} color="#5F29CC" /> {feature}
									</li>
								))}
							</ul>
						</div>
						<div className="my-5 pb-5 border-b border-c2a115b/20">
							<h3 className="text-lg md:text-xl font-bold mb-4">Subscription Benefits</h3>
							<ul className="space-y-3 text-c180a33 font-semibold">
								{subscription_benefits.map((benefits, idx) => (
									<li key={idx} className="flex items-center gap-4">
										<MdCheck size={25} color="#5F29CC" /> {benefits}
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-lg font-semibold mb-2">{frequency}</p>
							<h4 className="text-3xl font-bold text-c5f29cc">${price}</h4>
						</div>
					</div>
				</div>
				<div className="max-w-[870px] mx-auto py-12 xl:py-20">
					<div>
						<h3 className="text-center text-2xl font-bold mb-3">Write a review</h3>
						<form onSubmit={handleReviewSubmit}>
							<div className="flex justify-center gap-1">
								{[1, 2, 3, 4, 5].map((star) => (
									<button key={star} type="button" onClick={() => setRating(star)} className="text-[#FDA61A]">
										{star <= rating ? <FaStar size={24} /> : <FaRegStar size={24} />}
									</button>
								))}
							</div>
							<div className="fieldset">
								<label className="label text-xl  text-c180a33 mb-1 font-semibold">Your review</label>
								<textarea
									name="your-review"
									className="border border-c2a115b/30 rounded-lg h-36 p-4 text-lg"
								></textarea>
								<button
									type="submit"
									className="btn-neutral mt-4 bg-c5f29cc p-3 text-xl rounded-md text-white font-medium hover:bg-c5026a3 transition cursor-pointer"
								>
									Submit
								</button>
							</div>
						</form>
						<div className="mt-10 space-y-6">
							{reviews.map((rev, idx) => (
								<div key={idx} className="p-4 border border-gray-200 rounded-lg">
									<div className="flex items-center gap-1 mb-1 text-[#FDA61A]">
										{[1, 2, 3, 4, 5].map((num) =>
											num <= rev.rating ? <FaStar key={num} size={20} /> : <FaRegStar key={num} size={20} />
										)}
									</div>
									<p className="text-gray-800">{rev.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubscriptionServiceDetails;
