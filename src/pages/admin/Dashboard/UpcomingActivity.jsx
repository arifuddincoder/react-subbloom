import React from "react";
import { Link } from "react-router";
import { CiGift } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
const UpcomingActivity = () => {
	return (
		<div className="lg:col-span-4 bg-white rounded-lg">
			<div className="flex justify-between  p-6 items-center border-b border-c180a33/10">
				<h2 className="font-semibold text-sm sm:text-base">Upcoming Activity</h2>
				<Link className="text-c5f29cc text-sm sm:text-base">See More →</Link>
			</div>
			<div className="p-3 sm:p-6 flex flex-col gap-6">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<div className="bg-[#2eca8b]/10 p-3 sm:p-4 rounded-full">
							<CiGift size={25} color="#2eca8b" />
						</div>
						<div>
							<h5 className="text-sm sm:text-base font-bold mb-1 text-c180a33">Hasan's Birthday</h5>
							<p className="text-sm text-c180a33/50">Tomorrow 10:00am</p>
						</div>
					</div>
					<div>
						<FaArrowDown size={20} color="#2eca8b" />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<div className="bg-[#0984e3]/10   p-3 sm:p-4  rounded-full">
							<FiUsers size={25} color="#0984e3" />
						</div>
						<div>
							<h5 className="text-sm sm:text-base font-bold mb-1 text-c180a33">Meeting with CEO</h5>
							<p className="text-sm text-c180a33/50">Tomorrow 6:00pm</p>
						</div>
					</div>
					<div>
						<FaArrowDown size={20} color="#0984e3" />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex items-center  gap-5">
						<div className="bg-[#ff4757]/10  p-3 sm:p-4  rounded-full">
							<GoDeviceCameraVideo size={25} color="#ff4757" />
						</div>
						<div>
							<h5 className="text-sm sm:text-base font-bold mb-1 text-c180a33">Movie Night</h5>
							<p className="text-sm text-c180a33/50">Tomorrow 9:00pm</p>
						</div>
					</div>
					<div>
						<FaArrowDown size={20} color="#ff4757" />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<div className="bg-[#0984e3]/10  p-3 sm:p-4  rounded-full">
							<FiUsers size={25} color="#0984e3" />
						</div>
						<div>
							<h5 className="text-sm sm:text-base font-bold mb-1 text-c180a33">Meeting with HR</h5>
							<p className="text-sm text-c180a33/50">Tomorrow 9:00am</p>
						</div>
					</div>
					<div>
						<FaArrowDown size={20} color="#0984e3" />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<div className="bg-[#2eca8b]/10   p-3 sm:p-4  rounded-full">
							<CiGift size={25} color="#2eca8b" />
						</div>
						<div>
							<h5 className="text-sm sm:text-base font-bold mb-1 text-c180a33">Sabina's Birthday</h5>
							<p className="text-sm text-c180a33/50">Tomorrow 10:00am</p>
						</div>
					</div>
					<div>
						<FaArrowDown size={20} color="#2eca8b" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpcomingActivity;
