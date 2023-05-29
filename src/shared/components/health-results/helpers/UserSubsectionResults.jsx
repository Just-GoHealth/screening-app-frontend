import React, { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

export const UserSubsectionResults = ({ results }) => {
  return (
    <>
      {results?.slice(0, results.length - 1).map((sign, i) => {
        const [title, results] = sign;
        const { outcome, ...remainingResults } = results;

        const finalTitle = title
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        const finalResults = Object.entries(remainingResults);

        return (
          <div key={`${title} ${i}`}>
            <li className="text-[#965AA4] text-xl">
              {finalTitle}: {outcome}
            </li>
            <table className="table-fixed text-black mt-1 ml-4">
              <tbody>
                {finalResults.map((result, i) => {
                  const [title, grade] = result;

                  const finalTitle = title
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  const finalGrade = grade
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  return (
                    <tr key={i}>
                      <td className="w-1/2">
                        <RxDotFilled className="inline text-[#965AA4] mb-1" />{" "}
                        {finalTitle}
                      </td>
                      <td className="w-1/12 text-center">-</td>
                      <td className="min-w-6/12 flex items-center justify-center">
                        <p className="bg-[#003399] text-white px-5 rounded-full">
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
