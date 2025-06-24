import React, { useEffect } from "react";

const TermsConditions = () => {
	useEffect(() => {
		document.title = "SubBloom | Terms and conditions";
	}, []);
	return (
		<div className="bg-[#f8f9fa] py-10 px-4">
			<div className="max-w-7xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
				<p className="mb-2 italic">Last Updated: May 2025</p>
				<p className="mb-4">By subscribing to SubBloom, you agree to the following terms:</p>
				<ol className="list-decimal list-inside space-y-2">
					<li>We provide digital services such as website setup, maintenance, SEO, and analytics.</li>
					<li>Subscription is billed yearly. You may cancel at any time, but refunds are subject to review.</li>
					<li>
						All content provided to you is licensed under SubBloom. Redistribution is not allowed without permission.
					</li>
					<li>SubBloom is not liable for incidental damages or data loss.</li>
				</ol>
				<p className="mt-4">
					Contact{" "}
					<a href="mailto:legal@subbloom.com" className="text-blue-600 underline">
						legal@subbloom.com
					</a>{" "}
					for details.
				</p>
			</div>
		</div>
	);
};

export default TermsConditions;
