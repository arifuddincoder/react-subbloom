import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import SubscriptionServiceDetails from "../pages/SubscriptionServiceDetails/SubscriptionServiceDetails";
import PrivateRoute from "./PrivateRoute";
import PrivacyPolicy from "../pages/SupportPages/PrivacyPolicy";
import TermsConditions from "../pages/SupportPages/TermsConditions";
import PageLoader from "../components/ui/PageLoader";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => fetch("/subscription-services.json"),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/subscription-service/:id",
				loader: async ({ params }) => {
					const res = await fetch("/subscription-services.json");
					const data = await res.json();
					return data.find((item) => item.id === parseInt(params.id));
				},
				hydrateFallbackElement: <PageLoader />,
				element: (
					<PrivateRoute>
						<SubscriptionServiceDetails></SubscriptionServiceDetails>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/forget-password",
				Component: ForgetPassword,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard></Dashboard>
					</PrivateRoute>
				),
			},
			{
				path: "/my-profile",
				element: (
					<PrivateRoute>
						<MyProfile></MyProfile>
					</PrivateRoute>
				),
			},
			{
				path: "/privacy-policy",
				Component: PrivacyPolicy,
			},
			{
				path: "/terms-conditions",
				Component: TermsConditions,
			},
		],
	},
]);
