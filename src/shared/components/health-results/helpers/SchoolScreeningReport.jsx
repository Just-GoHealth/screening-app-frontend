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
							<td className="min-w-3/12">{report.grade[0]}</td>
							<td className="min-w-3/12">({report.grade[1]}%)</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
