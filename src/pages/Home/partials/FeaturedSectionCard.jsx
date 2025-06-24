import React from "react";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { TbCloudLock } from "react-icons/tb";
import { FaSearchPlus } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdSystemUpdateAlt } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";

const icons = {
	MdOutlineMonitorHeart,
	TbCloudLock,
	FaSearchPlus,
	HiOutlineMailOpen,
	MdSystemUpdateAlt,
	BiBarChartAlt2,
};

const FeaturedSectionCard = ({ item }) => {
	const { title, description, icon } = item;
	const IconComponent = icons[icon];
	return (
		<div className="bg-white p-10 rounded-2xl text-center">
			{IconComponent && <IconComponent size={60} className="mx-auto" color="#5F29CC" />}
			<h3 className="mt-6 mb-4 text-xl font-bold text-c180a33">{title}</h3>
			<p className="mb-7">{description}</p>
			<button className="bg-cf6f2ff font-semibold text-sm py-3 px-9 rounded-lg cursor-pointer hover:bg-c5f29cc hover:text-white">
				Learn More
			</button>
		</div>
	);
};

export default FeaturedSectionCard;
