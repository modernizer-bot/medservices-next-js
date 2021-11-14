import Link from "next/link";
import React from "react";
import AllDepartmentServices7 from "../src/components/All-departments/AllDepartmentServices7";
import About5 from "../src/components/Common/About-5";
import Banner5 from "../src/components/Common/Banner-5;";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const allDepartments = () => {
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
                                            <Link href="/demo-1">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Our Departments
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Departments
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* ABOUT-5
			============================================= */}
            <About5 />
            {/* END ABOUT-5 */}
            {/* SERVICES-7
			============================================= */}
            <AllDepartmentServices7 />
            {/* END SERVICES-7 */}
            {/* BANNER-5
			============================================= */}
            <Banner5 />
            {/* END BANNER-5 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default allDepartments;
