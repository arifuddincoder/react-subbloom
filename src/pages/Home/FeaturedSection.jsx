import React, { useEffect, useState } from "react";
import FeaturedSectionCard from "./partials/FeaturedSectionCard";

const FeaturedSection = () => {
	const [benefits, setBenefits] = useState([]);

	useEffect(() => {
		fetch("/service-benefits.json")
			.then((res) => res.json())
			.then((data) => setBenefits(data));
	}, []);
	return (
		<div className="bg-gradient-to-br from-c5026a3 via-c351574 to-c2a115b lg:py-24 py-15 px-4">
			<div className="container max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-12 flex-col md:flex-row">
					<h1 className="text-white text-2xl lg:text-4xl font-bold mb-6 md:mb-0 text-center md:text-left">
						High-Impact Services You Can Trust
					</h1>
					<button className="border border-white text-white font-semibold py-3 lg:py-4 px-9 rounded-lg max-w-[195px] md:max-w-fit">
						Schedule a Call
					</button>
				</div>
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
					{benefits.slice(0, 6).map((item) => (
						<FeaturedSectionCard key={item.id} item={item}></FeaturedSectionCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedSection;
