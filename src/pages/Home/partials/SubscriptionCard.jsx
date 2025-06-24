import React from "react";
import { MdCheck } from "react-icons/md";
import { Link } from "react-router";
const SubscriptionCard = ({ service }) => {
	const { id, name, thumbnail, frequency, price, description, tech_category, features, subscription_benefits } =
		service;
	return (
		<div className="border border-cf6f2ff rounded-2xl transition">
			<div className="relative">
				<div>
					<img className="w-full h-40 object-cover object-top rounded-t-2xl" src={thumbnail} alt={name} />
				</div>
				<h5 className="absolute right-6 bottom-2.5 bg-cf6f2ff py-1 px-4 rounded-full text-xs text-c180a33 transition">
					{tech_category}
				</h5>
			</div>
			<div className="text-center pb-4 mb-4 border-b border-cf6f2ff mx-6">
				<h3 className="text-c180a33 font-bold text-lg mt-6 mb-3">{name}</h3>
				<h4 className="text-4xl font-extrabold text-c180a33 mb-3">
					${price}
					<span className="text-2xl font-bold">/{frequency.charAt(0).toLowerCase()}</span>
				</h4>
				<p className="text-sm text-c4f5a7b max-w-[302px] mx-auto">{description}</p>
			</div>
			<ul className="mx-6 space-y-3 text-c180a33 font-semibold">
				{features.map((feature, idx) => (
					<li key={idx} className="flex items-center gap-4">
						<MdCheck size={25} color="#5F29CC" /> {feature}
					</li>
				))}
				{subscription_benefits.map((benefits, idx) => (
					<li key={idx} className="flex items-center gap-4">
						<MdCheck size={25} color="#5F29CC" /> {benefits}
					</li>
				))}
			</ul>
			<div className="m-6">
				<Link
					to={`/subscription-service/${id}`}
					className="border border-cf6f2ff block w-full text-center p-3 rounded-lg hover:bg-c5f29cc hover:text-white transition"
				>
					Package Details
				</Link>
			</div>
		</div>
	);
};

export default SubscriptionCard;
