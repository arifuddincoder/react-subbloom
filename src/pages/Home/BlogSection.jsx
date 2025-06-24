import React, { useEffect, useState } from "react";
import BlogItemsCard from "./partials/BlogItemsCard";

const BlogSection = () => {
	const [blogItems, setBlogItems] = useState([]);

	useEffect(() => {
		fetch("/blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogItems(data));
	}, []);
	return (
		<div className="container max-w-7xl mx-auto py-16 lg:py-24 px-4">
			<h2 className="text-2xl/snug lg:text-4xl/snug font-bold mb-6 lg:mb-12 max-w-[646px] mx-auto text-center text-c180a33">
				The Latest Thinking — Insights, Updates, and More
			</h2>
			<div className="flex lg:gap-8 flex-col sm:flex-row gap-4">
				{blogItems.slice(0, 3).map((blog) => (
					<BlogItemsCard key={blog.id} blog={blog}></BlogItemsCard>
				))}
			</div>
		</div>
	);
};

export default BlogSection;
