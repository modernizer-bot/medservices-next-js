import Link from "next/link";
import React from "react";

const Demo6Hero6 = () => {
    return (
        <section id="hero-6" className="hero-section division">
            {/* SLIDER */}
            <div className="slider">
                <ul className="slides">
                    {/* SLIDE #1 */}
                    <li id="slide-1">
                        {/* Background Image */}
                        <img
                            src="images/slider/slide-5.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            {/* Title */}
                                            <h5>Welcome to MedService</h5>
                                            <h2>Top Class Medical Center</h2>
                                            {/* Text */}
                                            <p className="p-md">
                                                Feugiat primis ligula risus
                                                auctor egestas augue mauri
                                                viverra tortor in iaculis
                                                placerat eugiat mauris ipsum in
                                                viverra tortor and gravida purus
                                                lorem in tortor
                                            </p>
                                            {/* Button */}
                                            <Link href="/about-us">
                                                <a className="btn btn-blue tra-white-hover">
                                                    More About Clinic
                                                </a>
                                            </Link>
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
                            src="images/slider/slide-4.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            {/* Title */}
                                            <h5>Our clinic Provide</h5>
                                            <h2>Total Health Care Solutions</h2>
                                            {/* Text */}
                                            <p className="p-md">
                                                Feugiat primis ligula risus
                                                auctor egestas augue mauri
                                                viverra tortor in iaculis
                                                placerat eugiat mauris ipsum in
                                                viverra tortor and gravida purus
                                                lorem in tortor
                                            </p>
                                            {/* Button */}
                                            <Link href="/who-we-are">
                                                <a className="btn btn-tra-white black-hover mr-10">
                                                    Get More Info
                                                </a>
                                            </Link>
                                            <Link href="/all-services">
                                                <a className="btn btn-blue blue-hover">
                                                    Our Core Services
                                                </a>
                                            </Link>
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
                    {/* SLIDE #3 */}
                    <li id="slide-3">
                        {/* Background Image */}
                        <img
                            src="images/slider/slide-6.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            {/* Title */}
                                            <h5>Our Medical Staff</h5>
                                            <h2>High-Class Professionals</h2>
                                            {/* Text */}
                                            <p className="p-md">
                                                Feugiat primis ligula risus
                                                auctor egestas augue mauri
                                                viverra tortor in iaculis
                                                placerat eugiat mauris ipsum in
                                                viverra tortor and gravida purus
                                                lorem in tortor
                                            </p>
                                            {/* Button */}
                                            <Link href="/all-doctors">
                                                <a className="btn btn-blue blue-hover mr-10">
                                                    View All Doctors
                                                </a>
                                            </Link>
                                            <Link href="/timetable">
                                                <a className="btn btn-tra-white black-hover">
                                                    Doctors Timetable
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End row */}
                            </div>
                            {/* End container */}
                        </div>
                        {/* End Image Caption */}
                    </li>
                    {/* END SLIDE #3 */}
                </ul>
            </div>
            {/* END SLIDER */}
        </section>
    );
};

export default Demo6Hero6;
