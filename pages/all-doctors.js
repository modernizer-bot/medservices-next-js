import React from "react";
import AllDoctorsDoctors3 from "../src/components/All-doctors/AllDoctorsDoctors3";
import AllDoctorsStatistic1 from "../src/components/All-doctors/AllDoctorsStatistic1";
import Testimonials2 from "../src/components/Common/Testimonials-2";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const allDoctors = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header1 />
            {/* END HEADER */}
            {/* BREADCRUMB
			============================================= */}
            <div id="breadcrumb" className="division">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className=" breadcrumb-holder">
                                {/* Breadcrumb Nav */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="demo-1.html">Home</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Meet the Doctors
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Meet the Doctors
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* DOCTORS-3
			============================================= */}
            <AllDoctorsDoctors3 />
            {/* END DOCTORS-3 */}
            {/* STATISTIC-1
			============================================= */}
            <AllDoctorsStatistic1 />
            {/* END STATISTIC-1 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Testimonials2 />
            {/* END TESTIMONIALS-2 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default allDoctors;
