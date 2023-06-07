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
						<table className="table-fixed text-black mt-1 ">
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
										<tr
											key={i}
											className="md:text-lg grid grid-cols-10 max-w-[22rem] md:max-w-xl"
										>
											<td className="text-center">
												<RxDotFilled className="inline text-[#965AA4] mb-1" />
											</td>
											<td className="py-1 md:py-0 col-span-4">{finalTitle}</td>
											<td className="text-center">-</td>
											<td className="col-span-4 flex md:items-center md:justify-center">
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
