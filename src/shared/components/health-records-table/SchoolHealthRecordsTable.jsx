import React from 'react';
import './HealthRecordsTable.style.css';

export const SchoolHealthRecordsTable = ({ tableHeadData, tableBodyData }) => {
	return (
		<div className="px-5">
			<table className="w-full">
				<thead>
					<tr>
						{tableHeadData.map((head, i) => (
							<th key={`${head} + ${i}`} className="table-head">
								{head}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{tableBodyData.map((data, i) => (
						<tr className="table-row" key={data.id}>
							<td className="table-data">{data.id}.</td>
							<td className="font-bold table-data">{data.name}</td>
							<td className="table-data">{data.recommendation}</td>
							<td className="table-data">{data.date}</td>
							<td className="table-data flex justify-center">
								{data.download}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
