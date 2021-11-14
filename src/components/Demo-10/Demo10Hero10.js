import React from "react";

const Demo10Hero10 = () => {
    return (
        <section id="hero-10" className="hero-section division">
            {/* SLIDER */}
            <div className="slider blue-nav">
                <ul className="slides">
                    {/* SLIDE #1 */}
                    <li id="slide-1">
                        {/* Background Image */}
                        <img
                            src="images/slider/slide-17.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center left-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-6 offset-sm-3 offset-md-5 offset-lg-6">
                                        <div className="caption-txt">
                                            {/* Title */}
                                            <h2 className="steelblue-color">
                                                Bring world into focus
                                            </h2>
                                            {/* Text */}
                                            <p className="p-md">
                                                Feugiat primis ligula risus
                                                auctor egestas augue mauri
                                                viverra tortor in iaculis
                                                placerat eugiat mauris ipsum at
                                                viverra tortor and gravida purus
                                                pretium auctor lorem primis
                                                mollis
                                            </p>
                                            {/* Button */}
                                            <a
                                                href="who-we-are.html"
                                                className="btn btn-blue tra-black-hover"
                                            >
                                                Get More Info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* End row */}
                            </div>
                            {/* End container */}
                        </div>
                        {/* End Image Caption */}
                    </li>
                    {/* END SLIDE #1 */}
                    {/* SLIDE #2 */}
                    <li id="slide-2">
                        {/* Background Image */}
                        <img
                            src="images/slider/slide-18.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center left-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-6 offset-sm-3 offset-md-5 offset-lg-6">
                                        <div className="caption-txt">
                                            {/* Title */}
                                            <h2 className="steelblue-color">
                                                Enhancing your vision
                                            </h2>
                                            {/* Option Box #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p className="p-md">
                                                    Fringilla risus nec, luctus
                                                    mauris orci auctor purus
                                                    euismod pretium purus
                                                    pretium ligula rutrum tempor
                                                    sapien
                                                </p>
                                            </div>
                                            {/* Option Box #2 */}
                                            <div className="box-list mb-15">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p className="p-md">
                                                    Porta semper lacus cursus,
                                                    feugiat primis ultrice in
                                                    ligula risus auctor tempus
                                                    feugiat dolor impedit magna
                                                </p>
                                            </div>
                                            {/* Button */}
                                            <a
                                                href="all-doctors.html"
                                                className="btn btn-blue blue-hover"
                                            >
                                                Meet the Doctors
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* End row */}
                            </div>
                            {/* End container */}
                        </div>
                        {/* End Image Caption */}
                    </li>
                    {/* END SLIDE #2 */}
                </ul>
            </div>
            {/* END SLIDER */}
        </section>
    );
};

export default Demo10Hero10;
