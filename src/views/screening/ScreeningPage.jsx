import { Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navbar } from "../../shared/components/navbar/Navbar";
import "./Screening.styles.css";
import data from "../../shared/data/data.json";
import MultiStepForm from "./forms/MultiStepForm";
import { useInAppNavigation } from "../../shared/custom-hooks/useInAppNavigation";
import { useFetchDetials } from "../../shared/custom-hooks";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const ScreeningPage = () => {
  const [selectedSection, setSelectedSection] = useState(data.data[0].id);
  const [selectedSubSection, setSelectedSubSection] = useState(1);
  const { viewHealthRecords } = useInAppNavigation();
  const [formData, setFormData] = useState({});
  const [subSectionsArr, setSubSectionsArr] = useState(() => {
    let initialSubSectionsArr = [];
    data.data.map((item) => initialSubSectionsArr.push(...item.subSections));
    return initialSubSectionsArr;
  });
  const [showQuestions, setShowQuestions] = useState(true);
  const [schoolsData, setSchoolsData] = useState({});
  const [showGuideOverlay, setShowGuideOverlay] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getSchools = async () => {
      await axios
        .get("https://screening-tool-api.onrender.com/schools")
        .then((res) => {
          setSchoolsData(res.data);
        })
        .catch((err) => {
          toast.error("Something unexpected happened, try again later.");
        });
    };
    getSchools();
  }, []);

  //function to handle section change
  const handleSelectedSection = (id, subSectionId) => {
    if (id > 1 && typeof formData["grade"] === "undefined") {
      alert("Select your grade before proceeding");
      return;
    } // cannot navigate to other sections if your grade has not been selected

    setSelectedSection(id);
    setSelectedSubSection(subSectionId);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  //function to handle subSection change
  const handleSelectedSubSection = (id) => {
    setSelectedSubSection(id);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  //function to start screening all over again
  const startScreening = () => {
    setFormData({});
    handleSelectedSection(data.data[0].id, data.data[0].subSections[0].id);
  };

  const handleToggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => setShowQuestions(false), []);


  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)

  }, []);


  useEffect(() => {
    // Update subSectionsArr based on formData.grade
    if (formData.grade < 4) {
      setSubSectionsArr([
        data.data[0].subSections.find((subSection) => subSection.id === 1),
        data.data[0].subSections.find((subSection) => subSection.id === 2),
      ]);
      setShowQuestions(false);
    } else {
      setSubSectionsArr(
        data.data.reduce((acc, item) => [...acc, ...item.subSections], [])
      );
      setShowQuestions(true);
    }
  }, [formData.grade]);

  return (
    <>
      <>
        <Navbar showLogo showMenu handleToggleMenu={handleToggleMenu} />
      </>

      <div className=" mx-auto gap-x-10 md:flex ">
        <nav
          className={
            "justify-center lg:py-10 h-[90vh] basis-[20%] flex-grow-0 overflow-auto md:pl-20 md:flex top-nav " +
            (isNavOpen ? " py-4 px-5 pl-0 flyout-open " : " ")
          }
        >
          <div className="block md:hidden float-right">
            <IconButton onClick={handleToggleMenu} size="small">
              <AiOutlineClose color="black" />
            </IconButton>
          </div>
          <div
            className={
              "flex flex-col justify-between items-center w-[300px] md:w-[200px] px-2 pl-5 pt-16 md:pt-0 md:pl-0 "
            }
          >
            <div className="space-y-5 text-[#F1ADB0] text-lg w-full">
              <h2 className="text-black font-bold text-xl px-3">GUIDE:</h2>
              {/* Logic for handling the disability of nav items */}
              {showQuestions ? (
                <>
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
                              {subsection.name.length > 18
                                ? subsection.name.slice(0, 18) + "..."
                                : subsection.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <div className="space-y-5">
                  <div>
                    <h3 className="px-3 py-1 rounded-[25px] bg-primary text-white font-bold">
                      {data.data[0].name}
                    </h3>
                    <ul className="text-black font-bold px-3 mt-1 whitespace-nowrap ">
                      {data.data[0].subSections.map((subsection, index) => (
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
                          {subsection.name.length > 18
                            ? subsection.name.slice(0, 18) + "..."
                            : subsection.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pointer-events-none opacity-[0.32]">
                    <h3 className="cursor-pointer px-3 pb-1">Symptoms</h3>
                  </div>
                  <div className="pointer-events-none opacity-[0.32]">
                    <h3 className="cursor-pointer px-3 ">Stressors/Triggers</h3>
                  </div>
                  <div className="pointer-events-none opacity-[0.32]">
                    <h3 className="cursor-pointer px-3 ">Risk Factors</h3>
                  </div>
                  <div className="pointer-events-none opacity-[0.32]">
                    <h3 className="cursor-pointer px-3 ">Support System</h3>
                  </div>
                </div>
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
                  width: "100%",
                  paddingHorizontal: 3,
                }}
              >
                View Health Records {">"}
              </Button>
            </div>
          </div>
        </nav>

        <main className="min-h-[90vh] flex-grow-2 basis-[80%]">
          <MultiStepForm
            data={data}
            selectedSection={selectedSection}
            selectedSubSection={selectedSubSection}
            handleSelectedSection={handleSelectedSection}
            formData={formData}
            setFormData={setFormData}
            subSectionsArr={subSectionsArr}
            showQuestions={showQuestions}
            schools={schoolsData?.school_list}
          />
        </main>
      </div>
    </>
  );
};
