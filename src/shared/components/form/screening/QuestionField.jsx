import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const QuestionField = ({ title, subtitle, control, style, info }) => {
  const [expandContent, setExpandContent] = useState(false);

  const expandContentBox = () => {
    setExpandContent(!expandContent);
  };

  return (
    <>
      <div
        className="pb-4 border-b border-[#D9DADC] flex md:space-x-10 mt-3 flex-col md:flex-row md:items-center"
        style={style}
      >
        <div className="w-3/4 space-y-2">
          <div className="flex space-x-2">
            <h2 className="font-bold text-2xl text-[#231F20]">
              {title}{". "}
              <span className="text-lg text-gray-500 font-normal">
                {subtitle}
              </span>
            </h2>
          </div>

          <>{control}</>
        </div>

        {info && (
          <div
            className={
              "bg-[#E6E7E8] relative text-[#86888B] p-3 flex max-w-[15rem]  my-3 md:items-center overflow-hidden" +
              (expandContent ? " h-auto " : " max-h-[5rem]")
            }
          >
            {info.length > 65 &&
              (expandContent ? (
                <AiOutlineMinusCircle
                  className="w-5 h-5 absolute top-1 right-3 "
                  onClick={expandContentBox}
                />
              ) : (
                <AiOutlinePlusCircle
                  className="w-5 h-5 absolute top-1 right-3 "
                  onClick={expandContentBox}
                />
              ))}

            <div className="">
              <p className="text-sm break-word py-2">
                {expandContent
                  ? info
                  : info.length > 58
                  ? info?.slice(0, 58) + "..."
                  : info}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
