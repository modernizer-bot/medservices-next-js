import Link from "next/link";
import React from "react";
import Banner5 from "../src/components/Common/Banner-5;";
import Pricing2Page from "../src/components/Pricing-2/Pricing2Page";
import Pricing2Pricing1 from "../src/components/Pricing-2/Pricing2Pricing1";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const pricing2 = () => {
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
                                            Our Pricing
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Pricing
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* PRICING-2 PAGE CONTENT
			============================================= */}
            <Pricing2Page />
            {/* END PRICING-2 PAGE CONTENT */}
            {/* PRICING-1
			============================================= */}
            <Pricing2Pricing1 />
            {/* END PRICING-1 */}
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

export default pricing2;
