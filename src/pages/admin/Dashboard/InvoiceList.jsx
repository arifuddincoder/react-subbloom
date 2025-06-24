import React from "react";

const InvoiceList = () => {
	return (
		<div className="overflow-y-auto lg:col-span-8 bg-white rounded-lg max-h-[630px]">
			<table className="table w-full">
				<thead className="sticky top-0 bg-white z-10">
					<tr>
						<th className="">No.</th>
						<th>Client Name</th>
						<th className="text-center">Amount</th>
						<th className="text-center">Status</th>
						<th className="text-right">Preview</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<p>#01</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://img.daisyui.com/images/profile/demo/2@94.webp"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div>
									<div className="font-bold">Hart Hagerty</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$500</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>
					<tr>
						<td>
							<p>#01</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/0.jpg"
										alt="Olivia Lee Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Olivia Lee</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$828</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-warning">Pending</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#02</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/1.jpg"
										alt="Liam Brown Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Liam Brown</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$215</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#03</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/2.jpg"
										alt="Emma Davis Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Emma Davis</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1270</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#04</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/3.jpg"
										alt="Noah Wilson Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Noah Wilson</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1176</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#05</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/4.jpg"
										alt="Ava Martinez Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Ava Martinez</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1352</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-warning">Pending</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#06</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/5.jpg"
										alt="Elijah Taylor Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Elijah Taylor</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$387</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#07</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/6.jpg"
										alt="Sophia Anderson Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Sophia Anderson</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$765</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#08</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/7.jpg"
										alt="James Thomas Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">James Thomas</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1121</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#09</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/8.jpg"
										alt="Isabella Jackson Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Isabella Jackson</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$239</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#10</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/9.jpg"
										alt="Lucas White Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Lucas White</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1442</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#11</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/10.jpg"
										alt="Mia Harris Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Mia Harris</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$270</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#12</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/11.jpg"
										alt="Mason Martin Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Mason Martin</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$571</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-warning">Pending</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#13</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/12.jpg"
										alt="Charlotte Thompson Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Charlotte Thompson</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$456</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-warning">Pending</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#14</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/13.jpg"
										alt="Logan Garcia Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Logan Garcia</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1140</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#15</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/14.jpg"
										alt="Amelia Clark Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Amelia Clark</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$594</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#16</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/15.jpg"
										alt="Ethan Rodriguez Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Ethan Rodriguez</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1004</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-warning">Pending</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#17</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/16.jpg"
										alt="Harper Lewis Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Harper Lewis</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$913</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#18</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/17.jpg"
										alt="Aiden Lee Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Aiden Lee</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1301</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#19</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/men/18.jpg"
										alt="Evelyn Walker Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Evelyn Walker</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$1242</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-success">Paid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>

					<tr>
						<td>
							<p>#20</p>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img
										className="rounded-full"
										src="https://randomuser.me/api/portraits/med/women/19.jpg"
										alt="Benjamin Hall Avatar"
									/>
								</div>
								<div>
									<div className="font-bold">Benjamin Hall</div>
								</div>
							</div>
						</td>
						<td className="text-center">
							<p>$918</p>
						</td>
						<td className="text-center">
							<div className="badge badge-soft badge-error">Unpaid</div>
						</td>
						<td className="text-right">
							<button className="text-sm px-5 py-1.5 bg-c5f29cc text-white rounded-full">Preview</button>
						</td>
					</tr>
				</tbody>
				<tfoot className="sticky bottom-0 bg-white z-10">
					<tr>
						<th>No.</th>
						<th>Client Name</th>
						<th className="text-center">Amount</th>
						<th className="text-center">Status</th>
						<th className="text-right">Preview</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default InvoiceList;
