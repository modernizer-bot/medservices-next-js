import Link from "next/link";
import React from "react";
import AllServicesTabs2 from "../src/components/All-services/AllServicesTabs2";
import AllServicesTestimonials2 from "../src/components/All-services/AllServicesTestimonials2";
import Banner5 from "../src/components/Common/Banner-5;";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const allServices = () => {
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
                                            Our Services
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Services
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* TABS-2
			============================================= */}
            <AllServicesTabs2 />
            {/* END TABS-2 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <AllServicesTestimonials2 />
            {/* END TESTIMONIALS-2 */}
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

export default allServices;
