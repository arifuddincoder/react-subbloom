import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slide1Img from "../../assets/slide-one.jpg";
import slide2Img from "../../assets/slide-two.jpg";
import slide3Img from "../../assets/slide-three.jpg";
const Slider = () => {
	return (
		<div>
			<Swiper
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				modules={[Pagination, Autoplay]}
				loop={true}
				className="homeSwiper"
			>
				<SwiperSlide>
					<div className="relative">
						<img src={slide1Img} className="w-full h-[400px] xl:h-[790px] object-cover" />
						<div className="slide-bg-overlay absolute inset-0 flex items-center ">
							<div className="w-full max-w-7xl mx-auto px-4 lg:py-0 z-20">
								<div className="text-white text-center xl:text-left">
									<h1 className="text-3xl/snug xl:text-5xl/snug font-bold mb-6">
										Your Trusted Partner <br /> in a Digital World
									</h1>
									<div className="flex flex-col sm:flex-row gap-4 justify-center items-center xl:justify-start">
										<button className="px-6 py-2 border border-white rounded-md cursor-pointer w-[200px] sm:w-auto">
											Get Started
										</button>
										<button className="px-6 py-2 bg-white text-[#5f29cc] rounded-md cursor-pointer w-[200px] sm:w-auto">
											How it’s work
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img src={slide2Img} className="w-full h-[400px] xl:h-[790px] object-cover" />
						<div className="slide-bg-overlay absolute inset-0 flex items-center ">
							<div className="w-full max-w-7xl mx-auto px-4 lg:py-0 z-20">
								<div className="text-white text-center xl:text-left">
									<h3 className="text-3xl/snug xl:text-5xl/snug font-bold mb-6">
										Scale Your Website — <br /> With Smart Subscription Support
									</h3>
									<div className="flex flex-col sm:flex-row gap-4 justify-center items-center xl:justify-start">
										<button className="px-6 py-2 border border-white rounded-md cursor-pointer w-[200px] sm:w-auto">
											Get Started
										</button>
										<button className="px-6 py-2 bg-white text-[#5f29cc] rounded-md cursor-pointer w-[200px] sm:w-auto">
											How it’s work
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img src={slide3Img} className="w-full h-[400px] xl:h-[790px] object-cover" />
						<div className="slide-bg-overlay absolute inset-0 flex items-center ">
							<div className="w-full max-w-7xl mx-auto px-4 lg:py-0 z-20">
								<div className="text-white text-center xl:text-left">
									<h1 className="text-3xl/snug xl:text-5xl/snug font-bold mb-6">
										From SEO to Security — <br /> We Handle Everything For You
									</h1>
									<div className="flex flex-col sm:flex-row gap-4 justify-center items-center xl:justify-start">
										<button className="px-6 py-2 border border-white rounded-md cursor-pointer w-[200px] sm:w-auto">
											Get Started
										</button>
										<button className="px-6 py-2 bg-white text-[#5f29cc] rounded-md cursor-pointer w-[200px] sm:w-auto">
											How it’s work
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
