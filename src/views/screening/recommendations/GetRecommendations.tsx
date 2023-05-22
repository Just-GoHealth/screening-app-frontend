import React from "react";

const GetRecommendations = ({student}) => {
  const date = new Date(Date.now()).toLocaleString();
  const createdAt =  new Date(student.createdAt).toLocaleDateString()
  return (
    <div className="bg-[#DAE7F6] h-full pr-20">
      <div className="px-24 py-10">
        <div className="flex flex-col w-full align-middle text-center">
          <h1
            className={"screening_heading" + " text-primary capitalize mb-2 text-7xl "}
          >
            {student.full_name}
          </h1>
          <div className="flex justify-center mb-2 ">
            <div className="pr-4 border-r-black border-r-2">School</div>
            <div className="px-4 border-r-black border-r-2">{student.age} yrs</div>
            <div className="pl-4">{student.gender}</div>
          </div>
          <p className="">{createdAt}</p>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl text-primaryBlue">
            Screening Report
          </h2>
          <p className="text-xl">
            From your responses, it is indicated that you may be having;
          </p>
          <div className="result text-xl">
            <p>High Risk mental health concerns. </p>
            <p>Low risk symptoms and signs</p>
            <p>Very low risk environmental factors</p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl text-primaryBlue">
            Recommendations
          </h2>
          <p className="text-xl">
            JustGo Health Workshop. Focused on psychotherapy and mindfulness
            techniques (GHC 50)
          </p>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl text-primaryBlue">
            View Your Answers
          </h2>

          <div className="result text-xl text-white ">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate hic laboriosam saepe modi qui dolor eaque dolorum suscipit illo voluptates?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetRecommendations;
