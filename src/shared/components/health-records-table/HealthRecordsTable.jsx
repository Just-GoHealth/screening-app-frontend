import React from 'react';
import './HealthRecordsTable.styles.css';

export const HealthRecordsTable = ({ tableHeadData, tableBodyData }) => {
	return (
		<div className="px-5">
			<table className="w-full">
				<thead>
					<tr>
						{tableHeadData.map((head, i) => (
							<th key={`${head} + ${i}`} className="health-records-table-head">
								{head}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{tableBodyData.map((data, i) => (
						<tr className="health-records-table-row" key={data.id}>
							<td className="health-records-table-data">{data.id}.</td>
							<td className="font-bold health-records-table-data">
								{data.school}
							</td>
							<td className="health-records-table-data">{data.students}</td>
							<td className="health-records-table-data">{data.date}</td>
							<td className="health-records-table-data flex justify-center">
								{data.download}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
