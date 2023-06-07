import React from 'react';

export const SchoolScreeningReport = ({ screeningReport }) => {
	return (
		<>
			<table className="table-fixed text-[1rem] md:text-lg">
				<tbody>
					{screeningReport.map((report, i) => (
						<tr key={i}>
							<td>{report.bullet}</td>
							<td className="min-w-1/2 py-1 md:py-0">{report.title}</td>
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
