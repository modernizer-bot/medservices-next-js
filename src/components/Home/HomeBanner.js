import React from "react";

const HomeBanner = () => {
    return (
        <div id="banner-1" className="banner-section division">
            <div className="container-fluid">
                <div className="st-content">
                    <div className="row white-color">
                        {/* IMAGE */}
                        <div className="col-lg-6">
                            <div
                                className="banner-1-img wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/banner-1.png"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                        {/* TEXT*/}
                        <div className="col-lg-6">
                            <div
                                className="banner-txt wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <span className="section-id id-color">
                                    A Great User Experiences
                                </span>
                                <h2>Fully Responsive and Retina Ready</h2>
                                <p>
                                    MedService has a responsive layout that will
                                    respond to your screen width and make
                                    content appearance be perfect on all
                                    devices, from large desktop screens to
                                    mobile phones and tablets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
