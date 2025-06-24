import React, { useEffect } from "react";

const PrivacyPolicy = () => {
	useEffect(() => {
		document.title = "Privacy Policy | SubBloom";
	}, []);
	return (
		<div className="bg-[#f8f9fa] py-10 px-4">
			<div className="max-w-7xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="mb-2 italic">Last Updated: May 2025</p>
				<p className="mb-4">
					We respect your privacy. This policy outlines how we collect, use, and protect your information.
				</p>
				<h2 className="text-xl font-semibold mt-6 mb-2">What we collect:</h2>
				<ul className="list-disc list-inside space-y-1">
					<li>Name, email, and profile info (via signup)</li>
					<li>Usage statistics of our platform</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-2">What we don’t do:</h2>
				<ul className="list-disc list-inside space-y-1">
					<li>We don’t sell your data to third parties</li>
					<li>We don’t store passwords in plain text</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-2">Your Rights:</h2>
				<p>You may request account deletion or data export at any time.</p>
				<p className="mt-4">
					For privacy concerns, email:{" "}
					<a href="mailto:privacy@subbloom.com" className="text-blue-600 underline">
						privacy@subbloom.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
