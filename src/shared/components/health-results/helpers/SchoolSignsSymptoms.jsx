import React from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { GroupSign } from './GroupSign';
import { GroupSignTag } from './GroupSignTag';

export const SchoolSignsSymptoms = () => {
	return (
		<li className="text-[#965AA4]">
			Emotional Disorder:{' '}
			<GroupSign sign="No Significant Emotional Disorder" number={20} />{' '}
			<GroupSign sign="Mild Symptoms" number={40} />
			<table className="table-fixed text-black mt-2">
				<tbody>
					<tr>
						<td className="min-w-1/12">
							<RxDotFilled className="inline text-[#965AA4] mb-1" /> Feeling Sad
							or Low
						</td>
						<td className="w-1/12 text-center">-</td>
						<td className="min-w-6/12 space-x-2">
							<GroupSignTag signResult={'No, not at all'} number={'30'} />
							<GroupSignTag signResult={'Sometimes'} number={'30'} />
						</td>
					</tr>

					<tr>
						<td className="min-w-1/12">
							<RxDotFilled className="inline text-[#965AA4] mb-1" /> Feeling
							Inadequate or Worthless
						</td>
						<td className="w-1/12 text-center">-</td>
						<td className="min-w-6/12 space-x-2">
							<GroupSignTag signResult={'No, not at all'} number={'30'} />
							<GroupSignTag signResult={'Sometimes'} number={'30'} />
						</td>
					</tr>
				</tbody>
			</table>
		</li>
	);
};
