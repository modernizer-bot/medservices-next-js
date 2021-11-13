import React from "react";

const AllBanner6 = () => {
    return (
        <section id="banner-6" className="bg-scroll banner-section division">
            <div className="container white-color">
                <div className="row d-flex align-items-center">
                    {/* BANNER TEXT */}
                    <div className="col-lg-9 icon-xl">
                        {/* Icon */}
                        <span className="flaticon-072-hospital-5" />
                        {/* Text */}
                        <div className="banner-txt">
                            <h4 className="h4-lg">
                                Do you search a good and quality medical clinic?
                                We care about your health 24/7
                            </h4>
                            <p className="p-md">
                                Donec vel sapien augue integer urna vel turpis
                                cursus porta luctus
                            </p>
                        </div>
                    </div>
                    {/* BANNER BUTTON */}
                    <div className="col-lg-3 ">
                        <div className="banner-btn text-right">
                            <a
                                href="contacts-1.html"
                                className="btn btn-md btn-tra-white blue-hover"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllBanner6;
