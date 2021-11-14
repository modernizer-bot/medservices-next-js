import Link from "next/link";
import AboutUsInfo4 from "../src/components/About-us/AboutUsInfo4.js";
import AboutUsVideo2 from "../src/components/About-us/AboutUsVideo2.js";
import Banner5 from "../src/components/Common/Banner-5;";
import Services7 from "../src/components/Common/Services-7.js";
import Statistic1 from "../src/components/Common/Statistic-1.js";
import Footer4 from "../src/layout/Footer/Footer4.js";
import Header1 from "../src/layout/Header/Header1.js";

const AboutUs = () => {
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
                                            About Us
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    About Us
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* INFO-4
			============================================= */}
            <AboutUsInfo4 />
            {/* END INFO-4 */}
            {/* STATISTIC-1
			============================================= */}
            <Statistic1 />
            {/* END STATISTIC-1 */}
            {/* VIDEO-2
			============================================= */}
            <AboutUsVideo2 />
            {/* END VIDEO-2 */}
            {/* SERVICES-7
			============================================= */}
            <Services7 />
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

export default AboutUs;
