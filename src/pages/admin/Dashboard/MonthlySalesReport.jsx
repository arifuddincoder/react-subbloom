import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
	{ day: "1", sales: 80 },
	{ day: "2", sales: 100 },
	{ day: "3", sales: 90 },
	{ day: "4", sales: 60 },
	{ day: "5", sales: 100 },
	{ day: "6", sales: 40 },
	{ day: "7", sales: 110 },
	{ day: "8", sales: 70 },
	{ day: "9", sales: 90 },
	{ day: "10", sales: 30 },
	{ day: "11", sales: 40 },
	{ day: "12", sales: 20 },
	{ day: "13", sales: 10 },
	{ day: "14", sales: 20 },
	{ day: "15", sales: 30 },
	{ day: "16", sales: 100 },
	{ day: "17", sales: 95 },
	{ day: "18", sales: 85 },
	{ day: "19", sales: 70 },
	{ day: "20", sales: 60 },
	{ day: "21", sales: 55 },
	{ day: "22", sales: 60 },
	{ day: "23", sales: 80 },
	{ day: "24", sales: 85 },
	{ day: "25", sales: 90 },
	{ day: "26", sales: 100 },
	{ day: "27", sales: 95 },
	{ day: "28", sales: 88 },
	{ day: "29", sales: 90 },
	{ day: "30", sales: 85 },
];
const MonthlySalesReport = () => {
	return (
		<div className="bg-white p-4 rounded-lg w-full">
			<div className="flex justify-between items-center mb-2">
				<h2 className="font-semibold">Monthly Sales Report</h2>
				<div className="text-right">
					<div className="text-xl font-bold">2384</div>
					<div className="text-sm text-gray-500">September</div>
				</div>
			</div>

			<ResponsiveContainer width="100%" height={150}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="day" hide />
					<YAxis hide />
					<Tooltip />
					<Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={6} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default MonthlySalesReport;
