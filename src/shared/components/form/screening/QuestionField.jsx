import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

<<<<<<< HEAD
export const QuestionField = ({ title, subtitle, control, style, info }) => {
  const string =
    "Watch our medical experts to help decide your rosdkfasdjksjflskdjfsalkfjsldfkssfdskjdfskldjskfljsdlfkslhsfhskjdfhsfkjdshdksjfsfjshfkfjsf";
  const [expandContent, setExpandContent] = useState(false);
=======
export const QuestionField = ({ title, subtitle, control }) => {
	return (
		<>
			<div className="flex space-x-10 items-center">
				<div className="w-3/4 space-y-2 border-b border-[#D9DADC] pb-4">
					<div className="flex items-end space-x-2">
						<h2 className="font-bold text-2xl text-[#231F20]">{title}</h2>
						<h3 className="text-lg text-gray-500">{subtitle}</h3>
					</div>
>>>>>>> 5767fbbd325145f3f068af31f17e1b397d2b97e8

  const expandContentBox = () => {
    setExpandContent(!expandContent);
  };

<<<<<<< HEAD
  return (
    <>
      <div
        className="pb-4 border-b border-[#D9DADC] flex space-x-10 mt-3 items-center"
        style={style}
      >
        <div className="w-3/4 space-y-2">
          <div className="flex space-x-2">
            <h2 className="font-bold text-2xl text-[#231F20]">
              {title}{" "}
              <span className="text-lg text-gray-500 font-normal">
                {subtitle}
              </span>
            </h2>
          </div>

          <>{control}</>
        </div>
=======
				<div className="bg-[#E6E7E8] relative text-[#86888B] p-3 flex items-center max-w-[10rem]">
					<AiOutlinePlusCircle className="w-5 h-5 absolute top-1 right-1" />
>>>>>>> 5767fbbd325145f3f068af31f17e1b397d2b97e8

        {info && (
          <div
            className={
              "bg-[#E6E7E8] relative text-[#86888B] p-3 flex items-center max-w-[15rem]  my-3  " +
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
                  : info.length > 65
                  ? info?.slice(0, 65) + "..."
                  : info}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
