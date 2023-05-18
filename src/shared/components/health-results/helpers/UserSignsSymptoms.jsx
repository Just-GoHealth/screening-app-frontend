import React from 'react';
import { RxDotFilled } from 'react-icons/rx';

export const UserSignsSymptoms = () => {
	return (
		<li className="text-[#965AA4]">
			Emotional Disorder: No Significant Emotional Disorder
			<table className="table-fixed text-black mt-2">
				<tbody>
					<tr>
						<td className="w-1/2">
							<RxDotFilled className="inline text-[#965AA4] mb-1" /> Feeling Sad
							or Low
						</td>
						<td className="w-1/12 text-center">-</td>
						<td className="w-6/12">
							<p className="bg-[#965AA4] text-white px-5 rounded-full">
								No, not at all
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</li>
	);
};
