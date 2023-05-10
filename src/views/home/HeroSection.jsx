import React from "react";
import Logo from "../../assets/images/logo.png";
import HeroImage from "../../assets/images/hero-image.jpg";
import { BiChevronRight } from "react-icons/bi";

function HeroSection() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto lg:px-8">
          <div className=" overflow-hidden px-4">
                <img
                  src={Logo}
                  alt="JustGo Logo"
                  className=" w-60 -translate-x-2"
                />
          </div>
          <h1 className=" lg:hidden text-3xl md:text-5xl text-center font-bold text-[#993399] my-4">Every Mind Matters Tool</h1>
          <div className=" grid lg:grid-cols-2">
            <div className="">
              <h1 className=" hidden lg:block px-4 text-7xl font-bold text-[#993399] mt-4">
                Every Mind Matters Tool
              </h1>
              <p className="my-4 px-4 text-justify leading-7 tracking-wide text-sm lg:text-base">
                Taking care of your mental health is vital to your overall
                wellbeing. This is why JustGo Health has developed this mental
                health guide to help you identify any concerns you may have and
                provide guidance on what to do next. Use this guide to gain a
                better understanding of your mental health status and take steps
                to maintain good mental health.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-0 mt-8 px-4 lg:px-4 md:px-16 text-sm lg:text-base">
                <button className="py-2 bg-[#993399] rounded-md text-white">
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
            <div className=" h-80 w-80 md:w-96 lg:ml-auto lg:mr-0 mx-auto lg:h-[28rem] rounded-2xl overflow-hidden -order-1 lg:order-2">
              <img
                src={HeroImage}
                alt=""
                className=" w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-16 px-4">
            <p className=" text-sm lg:text-base font-bold">Privacy Policy</p>
            <p className="tracking-wide text-xs lg:text-sm">
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
