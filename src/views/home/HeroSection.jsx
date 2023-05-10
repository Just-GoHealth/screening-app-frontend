import React from "react";
import Logo from "../../assets/images/logo.png";
import HeroImage from "../../assets/images/hero-img.jpg";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate()
  const startScreening = () => {
    navigate('screening')
  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto">
          <div className=" grid lg:grid-cols-2">
            <div className=" w-full">
              <div className=" overflow-hidden">
                <img
                  src={Logo}
                  alt="JustGo Logo"
                  className=" w-60 -translate-x-2"
                />
              </div>
              <h1 className=" text-7xl font-bold text-[#993399] mt-4">
                Every Mind Matters Tool
              </h1>
              <p className="my-4 text-justify leading-7 tracking-wide">
                Taking care of your mental health is vital to your overall
                wellbeing. This is why JustGo Health has developed this mental
                health guide to help you identify any concerns you may have and
                provide guidance on what to do next. Use this guide to gain a
                better understanding of your mental health status and take steps
                to maintain good mental health.
              </p>
              <div className="grid grid-cols-2 mt-8">
                <button className="py-2 bg-[#993399] rounded-md text-white" onClick={startScreening}>
                  Start Screening
                </button>
                <button className=" text-[#003399] font-semibold">
                  View Health Records{" "}
                  <BiChevronRight
                    className=" text-xl"
                    style={{ display: "inline-flex" }}
                  />
                </button>
              </div>
            </div>
            <div className="w-96 lg:ml-auto lg:mr-0 mx-auto h-[28rem] rounded-2xl overflow-hidden">
              <img
                src={HeroImage}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" mt-16">
            <p className="text-xl font-bold">Privacy Policy</p>
            <p className="tracking-wide">
              The guide is tailored to individuals between the ages of 8 and 18.
              The responses provided during the screening process will be
              utilized to recommend our psychotherapy workshop or any other
              assistance as deemed necessary...{" "}
              <a href="" className="text-[#003399]">
                MORE
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
