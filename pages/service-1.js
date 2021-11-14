import Link from "next/link";
import Service1Doctors1 from "../src/components/Service-1/Service1Doctors1";
import Service1Page from "../src/components/Service-1/Service1Page";
import Service1Reviews2 from "../src/components/Service-1/Service1Reviews2";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const Service1 = () => {
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
                                        <li className="breadcrumb-item">
                                            <Link href="/all-services">
                                                <a>Our Services</a>
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Service Single #1
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Service Single #1
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* SERVICE DETAILS
			============================================= */}
            <Service1Page />
            {/* END SERVICE DETAILS */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Service1Reviews2 />
            {/* END TESTIMONIALS-2 */}
            {/* DOCTORS-1
			============================================= */}
            <Service1Doctors1 />
            {/* END DOCTORS-1 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default Service1;
