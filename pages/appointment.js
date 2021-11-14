import Link from "next/link";
import AppointmentPage from "../src/components/Appointment/AppointmentPage";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const appointment = () => {
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
                                            Appointment
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Appointment
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* APPOINTMENT PAGE
                  ============================================= */}
            <AppointmentPage />
            {/* END APPOINTMENT PAGE */}
            {/* FOOTER-1
                  ============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default appointment;
