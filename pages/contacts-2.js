import Link from "next/link";
import Contacts02 from "../src/components/Contacts-2/Contacts02";
import ContactsBanner8 from "../src/components/Contacts-2/ContactsBanner8";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const Contacts2 = () => {
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
                                            Contact Us
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Contact Us
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* CONTACTS-2
			============================================= */}
            <Contacts02 />
            {/* END CONTACTS-2 */}
            {/* BANNER-8
			============================================= */}
            <ContactsBanner8 />
            {/* END BANNER-8 */}
            {/* FOOTER-1
			============================================= */}
            <Footer2 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default Contacts2;
