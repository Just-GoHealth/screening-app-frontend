import { Button } from "@mui/material";
import React, { useState } from "react";
import { Navbar } from "../../shared/components/navbar/Navbar";
import "./Screening.styles.css";
import data from "../../shared/data/data.json";
import MultiStepForm from "./forms/MultiStepForm";
import { useInAppNavigation } from "../../shared/custom-hooks/useInAppNavigation";
import GetRecommendations from "./recommendations/GetRecommendations";

export const ScreeningPage = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [selectedSubSection, setSelectedSubSection] = useState(1);
  const { viewHealthRecords } = useInAppNavigation();
  const [formData, setFormData] = useState({});
  const [getRecommendations, setGetRecommendations] = useState(false);

  //function to handle section change
  const handleSelectedSection = (id, subSectionId) => {
    if(getRecommendations){ setGetRecommendations(false)}
    setSelectedSection(id);
    setSelectedSubSection(subSectionId);
  };

    //function to handle subSection change
  const handleSelectedSubSection = (id) => {
    setSelectedSubSection(id);
  };

  //function to handle recommendations page
  const handleGetRecommendations = () => {
    setGetRecommendations(true)
    setSelectedSection(0),
    setSelectedSubSection(0)
    setFormData({})
  }

  //function to start screening all over again
  const startScreening = () => {
    setFormData({});
    handleSelectedSection(data.data[0].id, data.data[0].subSections[0].id);
  };
  return (
    <>
      <>
        <Navbar showLogo showRecommendations={getRecommendations}/>
      </>

      <div className=" flex mx-auto gap-x-10">
        <nav className="flex justify-center lg:py-10 h-[90vh] basis-[20%] flex-grow-0 overflow-auto pl-20 ">
          <div className="flex flex-col justify-between items-center w-[200px] px-2">
            <div className="space-y-5 text-[#F1ADB0] text-lg w-full">
              <h2 className="text-black font-bold text-xl px-3">GUIDE:</h2>
              {data.data.map((item) => (
                <div key={item.id}>
                  <h3
                    className={
                      "cursor-pointer px-3 " +
                      (selectedSection === item.id &&
                        " px-3 py-1 rounded-[25px] bg-primary text-white font-bold")
                    }
                    onClick={() =>
                      handleSelectedSection(item.id, item.subSections[0].id)
                    }
                  >
                    {item.name}
                  </h3>
                  {selectedSection === item.id && (
                    <ul className="text-black font-bold px-3 mt-1 whitespace-nowrap ">
                      {item.subSections.map((subsection, index) => (
                        <li
                          className={
                            "pb-1 cursor-pointer " +
                            (selectedSubSection === subsection.id &&
                              " text-primary")
                          }
                          onClick={() =>
                            handleSelectedSubSection(subsection.id)
                          }
                          key={index}
                        >
                          {subsection.name.length > 18 ? subsection.name.slice(0,18) + '...' : subsection.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {getRecommendations && (
                <h3
                  className={
                    "cursor-pointer px-3 py-1 rounded-[25px] bg-primary text-white font-bold"
                  }
                >
                  Recommendations
                </h3>
              )}
            </div>

            <div className="text-[#99B3DD] space-y-3 w-full flex flex-col items-center px-3 ">
              <Button
                onClick={startScreening}
                sx={{
                  backgroundColor: "#DAE7F6",
                  color: "#9FB9E0",
                  border: "2px solid #92AEDB",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "0.9rem",
                  minWidth: "100%",
                  marginTop: 5,
                }}
                disableElevation
              >
                Start Screening
              </Button>
              <Button
                onClick={viewHealthRecords}
                sx={{
                  color: "#92AEDB",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  width: '100%',
                  paddingHorizontal: 3
                }}
              >
                View Health Records {">"}
              </Button>
            </div>
          </div>
        </nav>

        <main className=" min-h-[90vh] flex-grow-2 basis-[80%] ">
          {getRecommendations ? (
            <GetRecommendations />
          ) : (
            <MultiStepForm
              selectedSection={selectedSection}
              selectedSubSection={selectedSubSection}
              handleSelectedSection={handleSelectedSection}
              formData={formData}
              setFormData={setFormData}
              setGetRecommendations={setGetRecommendations}
              handleGetRecommendations={handleGetRecommendations}
            />
          )}
        </main>
      </div>
    </>
  );
};
