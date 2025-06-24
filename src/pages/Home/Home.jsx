import React, { useEffect } from "react";
import Slider from "./Slider";
import SubscriptionServices from "./SubscriptionServices";
import FeaturedSection from "./FeaturedSection";
import BlogSection from "./BlogSection";
import { useLoaderData } from "react-router";

const Home = () => {
	useEffect(() => {
		document.title = "Smart Digital Solutions for Businesses | SubBloom";
	}, []);
	const subscriptionServices = useLoaderData();
	return (
		<div>
			<Slider></Slider>
			<SubscriptionServices subscriptionServices={subscriptionServices}></SubscriptionServices>
			<FeaturedSection></FeaturedSection>
			<BlogSection></BlogSection>
		</div>
	);
};

export default Home;
