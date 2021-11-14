import Link from "next/link";
import React from "react";

const Demo4Video2 = () => {
    return (
        <section id="video-2" className="wide-60 video-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* VIDEO LINK */}
                    <div className="col-md-6">
                        <div
                            className="video-preview mb-40 text-center wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Change the link HERE!!! */}
                            <Link href="#">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="video-popup1"
                                    href="https://www.youtube.com/embed/SZEflIVnhH8"
                                >
                                    {/* Play Icon */}
                                    <div className="video-btn play-icon-blue">
                                        <div className="video-block-wrapper">
                                            <i className="fas fa-play" />
                                        </div>
                                    </div>
                                    {/* Preview */}
                                    <img
                                        className="img-fluid"
                                        src="images/video-1.png"
                                        alt="video-photo"
                                    />
                                </a>{" "}
                            </Link>
                        </div>
                    </div>
                    {/* END VIDEO LINK */}
                    {/* VIDEO TEXT */}
                    <div className="col-md-6">
                        <div
                            className="txt-block pc-30 mb-40 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Modern Medicine
                            </span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Better Technologies for Better Healthcare
                            </h3>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list m-top-15">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Gravida quis vehicula magna luctus tempor
                                    quisque vel laoreet turpis urna augue,
                                    viverra a augue eget dictum
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
                                    purus feugiat dolor impedit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo4Video2;
