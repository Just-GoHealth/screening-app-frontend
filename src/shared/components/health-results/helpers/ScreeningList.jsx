import React from 'react';
import { RxDotFilled } from 'react-icons/rx';

export const ScreeningList = () => {
	return (
		<table className="table-fixed text-black mt-2">
			<tbody>
				<tr>
					<td className="w-1/2">
						<RxDotFilled className="inline text-[#965AA4] mb-1 w-5 h-5" />{' '}
						Optimal Mental Health
					</td>
					<td className="w-1/12 text-center">-</td>
					<td className="w-5/12">24 (%)</td>
				</tr>
				<tr>
					<td className="w-1/2">
						<RxDotFilled className="inline text-[#965AA4] mb-1 w-5 h-5" /> Mild
						Mental Health Concern
					</td>
					<td className="w-1/12 text-center">-</td>
					<td className="w-5/12">60 (%)</td>
				</tr>
			</tbody>
		</table>
	);
};
