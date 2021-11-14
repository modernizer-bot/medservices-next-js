import Link from "next/link";
import Services3 from "../src/components/Common/Services-3";
import WhoWeAreAbout5 from "../src/components/Who-we-are/WhoWeAreAbout5";
import WhoWeAreDoctors1 from "../src/components/Who-we-are/WhoWeAreDoctors1";
import WhoWeAreInfo1 from "../src/components/Who-we-are/WhoWeAreInfo1";
import WhoWeAreInfo9 from "../src/components/Who-we-are/WhoWeAreInfo9";
import WhoWeAreReviews2 from "../src/components/Who-we-are/WhoWeAreReviews2";
import WhoWeAreTabs1 from "../src/components/Who-we-are/WhoWeAreTabs1";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const whoWeAre = () => {
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
                                            Who We Are
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Who We Are
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* INFO-1
			============================================= */}
            <WhoWeAreInfo1 />
            {/* END INFO-1 */}
            {/* SERVICES-3
			============================================= */}
            <Services3 />
            {/* END SERVICES-3 */}
            {/* ABOUT-5
			============================================= */}
            <WhoWeAreAbout5 />
            {/* END ABOUT-5 */}
            {/* INFO-9
			============================================= */}
            <WhoWeAreInfo9 />
            {/* END INFO-9 */}
            {/* TABS-1
			============================================= */}
            <WhoWeAreTabs1 />
            {/* END TABS-1 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <WhoWeAreReviews2 />
            {/* END TESTIMONIALS-2 */}
            {/* DOCTORS-1
			============================================= */}
            <WhoWeAreDoctors1 />
            {/* END DOCTORS-1 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default whoWeAre;
