import React from 'react';

export const SchoolScreeningReport = ({ screeningReport }) => {
	return (
		<>
			<table className="table-fixed">
				<tbody>
					{screeningReport.map((report, i) => (
						<tr key={i}>
							<td className="min-w-1/2">
								{report.bullet} {report.title}
							</td>
							<td className="w-1/12 text-center">-</td>
							<td className="min-w-6/12 flex items-center justify-center">
								{report.score} (%)
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
