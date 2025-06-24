import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Site Setup", value: 38.5 },
	{ name: "SEO Tools", value: 17.9 },
	{ name: "CMS Help", value: 19.7 },
	{ name: "Speed Boost", value: 23.9 },
];

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];
const WeeklyTopProducts = () => {
	return (
		<div className="bg-white p-6 rounded-lg w-full">
			<div className="flex justify-between items-center mb-2">
				<h2 className="font-semibold">Weekly Top Products</h2>
				<div className="text-sm text-gray-500">Last Week</div>
			</div>

			<ResponsiveContainer width="100%" height={250}>
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={90}
						paddingAngle={2}
						dataKey="value"
						label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index]} />
						))}
					</Pie>
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>

			<div className="flex justify-around text-sm mt-4">
				{data.map((entry, index) => (
					<div key={index} className="flex items-center gap-1">
						<div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
						<span className="text-gray-700">{entry.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default WeeklyTopProducts;
