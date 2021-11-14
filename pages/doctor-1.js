import React from "react";
import Doctor1Details from "../src/components/Doctor-1/Doctor1Details";
import Doctor1Reviews2 from "../src/components/Doctor-1/Doctor1Reviews2";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const doctor1 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header1 />
            {/* END HEADER */}
            {/* DOCTOR BREADCRUMBS */}
            <section
                id="doctor-breadcrumbs"
                className="bg-fixed doctor-details-section division"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 offset-md-5">
                            <div className="doctor-data white-color">
                                {/* Name */}
                                <h2 className="h2-xs">Dr. Matthew Anderson</h2>
                                <h5 className="h5-md">
                                    Neurologist / Epilepsy Specialist /
                                    Cardiologist
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* END DOCTOR BREADCRUMBS */}
            {/* DOCTOR-1 DETAILS */}
            <Doctor1Details />
            {/* END DOCTOR-1 DETAILS */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Doctor1Reviews2 />
            {/* END TESTIMONIALS-2 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default doctor1;
