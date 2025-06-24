import React from "react";
import SubscriptionCard from "./partials/SubscriptionCard";

const SubscriptionServices = ({ subscriptionServices }) => {
	return (
		<div className="container max-w-7xl mx-auto py-12 lg:py-20 px-4">
			<div className="max-w-[646px] mx-auto text-center mb-12">
				<h2 className="text-3xl lg:text-4xl/snug font-bold mb-4 text-c180a33">
					Smart Plans. No Surprises. <br className="hidden sm:block" /> Just What You Need
				</h2>
				<p className="text-c180a33/90 text-xl/normal">
					Great service doesn't have to come at a premium. We offer real value, no matter which plan you pick
				</p>
			</div>
			<div className="subscription-cards-wrap grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
				{subscriptionServices.map((service) => (
					<SubscriptionCard key={service.id} service={service}></SubscriptionCard>
				))}
			</div>
		</div>
	);
};

export default SubscriptionServices;
