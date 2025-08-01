import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import PageLoader from "../components/ui/PageLoader";
import { AuthContext } from "../contexts/auth/AuthContext";

const RootLayout = () => {
	const { loading } = use(AuthContext);
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	if (loading || isLoading) {
		return <PageLoader />;
	}
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
};

export default RootLayout;
