import Link from "next/link";
import React from "react";

const Demo3Banner3 = () => {
    return (
        <section id="banner-3" className="pt-100 banner-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* BANNER TEXT */}
                    <div className="col-lg-5">
                        <div
                            className="banner-txt wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Why Choose MedService
                            </span>
                            {/* Title  */}
                            <h2 className="h2-xl steelblue-color">
                                High Quality Medical Care
                            </h2>
                            <h3 className="h3-md blue-color">
                                +1-800-123-4560
                            </h3>
                            {/* Text */}
                            <p>
                                Egestas magna egestas magna ipsum vitae purus
                                ipsum primis in cubilia laoreet augue egestas
                                suscipit lectus mauris a lectus laoreet gestas
                                neque undo luctus feugiat augue suscipit
                            </p>
                            {/* Button */}
                            <Link href="#">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="btn btn-blue blue-hover mt-15"
                                >
                                    Make An Apointment
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                    {/* BANNER IMAGE */}
                    <div className="col-lg-7">
                        <div className="banner-3-img">
                            <img
                                className="img-fluid"
                                src="images/image-06.png"
                                alt="banner-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo3Banner3;
