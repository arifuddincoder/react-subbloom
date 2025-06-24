import dayjs from "dayjs";
import React from "react";

const BlogItemsCard = ({ blog }) => {
	const { title, image, published_date, author } = blog;
	return (
		<div className="border border-cf6f2ff rounded-2xl p-4 hover:border-c5f29cc">
			<div>
				<img className="rounded-2xl" src={image} alt={title} />
			</div>
			<div className="flex flex-col lg:flex-row gap-1 lg:gap-6 mt-6 text-sm text-c180a33 font-medium mb-2">
				<p>By {author}</p>
				<p>{dayjs(published_date).format("MMMM DD, YYYY")}</p>
			</div>
			<h3 className="text-xl lg:text-2xl font-bold text-c180a33">{title}</h3>
		</div>
	);
};

export default BlogItemsCard;
