import React from 'react';
import Logo from '../../assets/images/logo.png';
import HeroImage from '../../assets/images/hero-image.jpg';
import { BiChevronRight } from 'react-icons/bi';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';
import './HeroSection.css';

function HeroSection() {
	const { startScreening, viewHealthRecords } = useInAppNavigation();

	localStorage.clear();

	return (
		<>
			<div>
				<div className="max-w-6xl mx-auto lg:px-8 mt-8 lg:mt-16">
					<div className=" overflow-hidden px-4">
						<img
							src={Logo}
							alt="JustGo Logo"
							className=" w-60 -translate-x-3"
						/>
					</div>
					<h1 className=" lg:hidden text-3xl md:text-5xl text-center font-bold text-[#993399] my-4">
						Every Mind Matters Tool
					</h1>
					<div className=" grid lg:grid-cols-2">
						<div className="">
							<h1 className="hidden lg:block px-4 text-7xl font-bold text-[#993399] mt-4">
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
							<div className="grid md:grid-cols-2 gap-4 mt-8 px-8 lg:px-4">
								<button
									onClick={startScreening}
									className="py-2 bg-[#993399] rounded-md text-white"
								>
									Start Screening
								</button>
								<button
									onClick={viewHealthRecords}
									className=" text-[#003399] font-semibold"
								>
									View Health Records{' '}
									<BiChevronRight
										className=" text-xl"
										style={{ display: 'inline-flex' }}
									/>
								</button>
							</div>

							<h6 className="flex items-center justify-center mt-5 text-[#993399]">
								<HiOutlineCheckCircle className="h-6 w-6 mr-1" />{' '}
								<span>It takes 7 minutes to complete</span>
							</h6>
						</div>
						<div className=" h-80 w-80 md:w-96 lg:ml-auto lg:mr-0 mx-auto lg:h-[28rem] rounded-2xl overflow-hidden -order-1 lg:order-2">
							<img
								src={HeroImage}
								alt=""
								className=" w-full h-full object-cover object-top"
							/>
						</div>
					</div>
				</div>

				<div className="mt-8 lg:mt-16 p-7 sm:px-16 pb-10 bg-[#F7E67E] flex flex-col lg:flex-row items-start justify-between w-full space-y-3 lg:space-y-0 lg:space-x-5">
					<div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-10">
						<h1 className="bg-black text-white p-1 rounded w-fit text-sm lg:text-base font-bold">
							References:
						</h1>

						<div className="space-y-3 lg:space-y-5">
							<h4 className="ref-group">
								<div className="ref-number">1</div>{' '}
								<span>Youth Self Report</span>
							</h4>

							<h4 className="ref-group">
								<div className="ref-number">2</div>{' '}
								<span>Strength and Difficulties Questionnaire</span>
							</h4>
						</div>
					</div>

					<div className="space-y-3 lg:space-y-5">
						<h4 className="ref-group">
							<div className="ref-number">3</div>{' '}
							<span>Pediatric Symptom Checklist</span>
						</h4>
						<h4 className="ref-group">
							<div className="ref-number">4</div>{' '}
							<span>John Hopkins University</span>
						</h4>
					</div>

					<div className="space-y-3 lg:space-y-5">
						<h4 className="ref-group">
							<div className="ref-number">5</div>{' '}
							<span>
								The ICD-11 Classification of Mental and Behavioural Disorders
							</span>
						</h4>
						<h4 className="ref-group">
							<div className="ref-number">6</div>{' '}
							<span>
								Diagnostic and Statistical Manual of Mental Disorder-5
							</span>
						</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
