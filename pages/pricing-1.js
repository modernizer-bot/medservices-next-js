import Link from "next/link";
import Banner5 from "../src/components/Common/Banner-5;";
import Pricing1Pricing1 from "../src/components/Pricing-1/Pricing1Pricing1";
import Pricing1Pricing2 from "../src/components/Pricing-1/Pricing1Pricing2";
import Pricing1reviews2 from "../src/components/Pricing-1/Pricing1reviews2";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const Pricing1 = () => {
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
            {/* PRICING-1
			============================================= */}
            <Pricing1Pricing1 />
            {/* END PRICING-1 */}
            {/* PRICING-2
			============================================= */}
            <Pricing1Pricing2 />
            {/* END PRICING-2 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Pricing1reviews2 />
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

export default Pricing1;
