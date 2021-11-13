import React from "react";

const Demo8Doctors1 = () => {
    return (
        <section id="doctors-1" className="wide-40 doctors-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Section ID */}
                        <span className="section-id lime-color">
                            Our Medical Specialists
                        </span>
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Our Medical Specialists
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* END SECTION TITLE */}
                <div className="row">
                    {/* DOCTOR #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-1.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <a
                                        className="btn btn-sm btn-tra-white black-hover"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm steelblue-color">
                                    Jonathan Barnes D.M.
                                </h5>
                                <span className="lime-color">
                                    Plastic Surgery, Cosmetic Surgery
                                </span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #1 */}
                    {/* DOCTOR #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-2.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <a
                                        className="btn btn-sm btn-tra-white black-hover"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm steelblue-color">
                                    Hannah Harper D.M.
                                </h5>
                                <span className="lime-color">
                                    Plastic Surgery
                                </span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #2 */}
                    {/* DOCTOR #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-3.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <a
                                        className="btn btn-sm btn-tra-white black-hover"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm steelblue-color">
                                    Matthew Anderson D.M.
                                </h5>
                                <span className="lime-color">
                                    Cosmetic Surgery
                                </span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #3 */}
                    {/* DOCTOR #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-4.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <a
                                        className="btn btn-sm btn-tra-white black-hover"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm steelblue-color">
                                    Megan Coleman D.M.
                                </h5>
                                <span className="lime-color">Nurse</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #4 */}
                </div>
                {/* End row */}
                {/* ALL DOCTORS BUTTON */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="all-doctors mb-40">
                            <a
                                href="all-doctors.html"
                                className="btn btn-lime black-hover"
                            >
                                Meet All Doctors
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo8Doctors1;
