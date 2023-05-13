import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Navbar } from '../../shared/components/navbar/Navbar';
import './Screening.styles.css';
import data from '../../shared/data/data.json';
import MultiStepForm from './forms/MultiStepForm';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';

export const ScreeningPage = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [selectedSubSection, setSelectedSubSection] = useState(1);
  const { viewHealthRecords } = useInAppNavigation();
  const [formData, setFormData] = useState({});

  const handleSelectedSection = (id, subSectionId) => {
    setSelectedSection(id);
    setSelectedSubSection(subSectionId);
  };
  const handleSelectedSubSection = (id) => {
    setSelectedSubSection(id);
  };

  const startScreening = () => {
    setFormData({})
    handleSelectedSection(data.data[0].id, data.data[0].subSections[0].id);
  };
  return (
    <>
      <>
        <Navbar showLogo />
      </>

      <div className=" flex mx-auto gap-x-10 px-20">
        <nav className="flex justify-center lg:py-10 h-[90vh] basis-[15rem] flex-grow-0 overflow-auto">
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
                    <ul className="text-black font-bold px-3 mt-1">
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
                          {subsection.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

						<div className="text-[#99B3DD] space-y-3 w-full flex flex-col items-center px-3 ">
							<Button
								onClick={startScreening}
								sx={{
									backgroundColor: '#DAE7F6',
									color: '#9FB9E0',
									border: '2px solid #92AEDB',
									fontWeight: 'bold',
									textTransform: 'none',
									fontSize: '0.9rem',
									minWidth: '100%',
									marginTop: 5,
								}}
								disableElevation
							>
								Start Screening
							</Button>
							<Button
								onClick={viewHealthRecords}
								sx={{
									color: '#92AEDB',
									textTransform: 'none',
									fontWeight: 'bold',
									fontSize: '0.9rem',
								}}
							>
								View Health Records {'>'}
							</Button>
						</div>
					</div>
				</nav>

        <main className=" min-h-[90vh] flex-grow-2 basis-[80%] ">
          <MultiStepForm
            selectedSection={selectedSection}
            selectedSubSection={selectedSubSection}
            handleSelectedSection={handleSelectedSection}
            formData={formData}
            setFormData={setFormData}
          />
        </main>
      </div>
    </>
  );
};
