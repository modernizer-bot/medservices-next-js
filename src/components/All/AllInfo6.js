import React from "react";

const AllInfo6 = () => {
    return (
        <section id="info-6" className="bg-blue info-section division">
            {/* TEXT BLOCK */}
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div
                            className="txt-block pc-30 white-color wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Welcome to MedService
                            </span>
                            {/* Title */}
                            <h3 className="h3-md">
                                Clinic with Innovative Approach to Treatment
                            </h3>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Maecenas gravida porttitor nunc, quis
                                    vehicula magna luctus tempor. Quisque vel
                                    laoreet turpis urna augue, viverra a augue
                                    eget, dictum tempor diam pulvinar massa
                                    purus nulla
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit
                                </p>
                            </div>
                            {/* CONTENT BOX #3 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit magna purus
                                    pretium gravida donec ligula massa in
                                    faucibus
                                </p>
                            </div>
                            {/* Button */}
                            <a
                                href="all-doctors.html"
                                className="btn btn-tra-white blue-hover mt-25"
                            >
                                Meet The Doctors
                            </a>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* END TEXT BLOCK */}
            {/* INFO-6 IMAGE */}
            <div className="info-6-img text-center" />
        </section>
    );
};

export default AllInfo6;
