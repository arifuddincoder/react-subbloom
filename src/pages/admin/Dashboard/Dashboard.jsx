import React, { use, useEffect } from "react";
import SalesAnalytics from "./SalesAnalytics";
import DashboardSummary from "./DashboardSummary";
import MonthlySalesReport from "./MonthlySalesReport";
import WeeklyTopProducts from "./WeeklyTopProducts";
import InvoiceList from "./InvoiceList";
import UpcomingActivity from "./UpcomingActivity";
import { AuthContext } from "../../../contexts/auth/AuthContext";
const Dashboard = () => {
	const { user } = use(AuthContext);
	const { displayName } = user;
	useEffect(() => {
		document.title = "Dashboard | SubBloom";
	}, []);
	return (
		<div className="bg-[#f8f9fa] py-10 px-4">
			<div className="container max-w-7xl mx-auto">
				<div className="mb-6 flex justify-between items-center gap-6">
					<div>
						<p className="md:text-lg text-c2a115b/40 mb-1">Welcome Back, {displayName}</p>
						<h1 className="text-lg md:text-2xl font-semibold text-c180a33">Dashboard</h1>
					</div>

					<select className="select w-36">
						<option>May, 2025</option>
						<option>April, 2025</option>
						<option>June, 2025</option>
					</select>
				</div>
				<DashboardSummary></DashboardSummary>
				<div className="grid lg:grid-cols-12 gap-6 mb-6">
					<SalesAnalytics></SalesAnalytics>
					<UpcomingActivity></UpcomingActivity>
				</div>
				<div className="grid lg:grid-cols-12 gap-6 mb-6">
					<div className="lg:col-span-4 flex flex-col gap-6">
						<MonthlySalesReport></MonthlySalesReport>
						<WeeklyTopProducts></WeeklyTopProducts>
					</div>
					<InvoiceList></InvoiceList>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
