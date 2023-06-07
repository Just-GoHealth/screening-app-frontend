import React, { useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

export const UserSubsectionResults = ({ results }) => {
	return (
		<>
			{results?.slice(0, results.length - 1).map((sign, i) => {
				const [title, results] = sign;
				const { outcome, ...remainingResults } = results;

				const finalTitle = title
					.split('_')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ');

				const finalResults = Object.entries(remainingResults);

				return (
					<div key={`${title} ${i}`} className="text-[1rem] md:text-xl">
						<li className="text-[#965AA4]">
							{finalTitle}: {outcome}
						</li>
						<table className="table-fixed text-black mt-1 ml-2 md:ml-4">
							<tbody>
								{finalResults.map((result, i) => {
									const [title, grade] = result;

									const finalTitle = title
										.split('_')
										.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' ');

									const finalGrade = grade
										.split('_')
										.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' ');

									return (
										<tr key={i} className="md:text-lg mobile-results-view">
											<td className="w-1/12">
												<RxDotFilled className="inline text-[#965AA4] mb-1" />
											</td>
											<td className="w-1/2 md:w-3/2 py-1 md:py-0">
												{finalTitle}
											</td>
											<td className="w-1/12 text-center">-</td>
											<td className="min-w-6/12 flex md:items-center justify-center">
												<p className="text-[#003399] font-semibold md:font-normal md:bg-[#003399] md:text-white px-5 rounded-full">
													{finalGrade}
												</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				);
			})}
		</>
	);
};
