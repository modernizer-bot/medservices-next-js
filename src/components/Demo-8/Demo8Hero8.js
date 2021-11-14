import Link from "next/link";
import React from "react";

const Demo8Hero8 = () => {
    return (
        <section id="hero-8" className="hero-section division">
            {/* SLIDER */}
            <div className="slider blue-nav">
                <ul className="slides">
                    {/* SLIDE #1 */}
                    <li id="slide-1">
                        {/* Background Image */}
                        <img
                            src="images/slider/slide-14.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center left-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9 col-md-8 col-lg-7">
                                        <div className="caption-txt">
                                            {/* Title */}
                                            <h5 className="steelblue-color">
                                                Sculpt your body
                                            </h5>
                                            <h2 className="steelblue-color">
                                                Discover Confidence
                                            </h2>
                                            {/* Text */}
                                            <p className="p-md">
                                                Feugiat primis ligula risus
                                                auctor egestas augue mauri
                                                viverra tortor in iaculis
                                                placerat eugiat mauris ipsum an
                                                auctor purus euismod pretium
                                                purus dolor impedit magna purus
                                                feugiat dolor impedit magna
                                            </p>
                                            {/* Button */}
                                            <Link href="/about-us">
                                                <a className="btn btn-lime black-hover">
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
                            src="images/slider/slide-15.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center right-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9 col-md-8 col-lg-7 offset-sm-3 offset-md-4 offset-lg-5">
                                        <div className="caption-txt">
                                            {/* Title */}
                                            <h5 className="steelblue-color">
                                                Reduce fat without surgery
                                            </h5>
                                            <h2 className="steelblue-color">
                                                Discover Your Beauty
                                            </h2>
                                            {/* CONTENT BOX #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon">
                                                    <i className="fas fa-genderless" />
                                                </div>
                                                <p className="p-md">
                                                    Quaerat sodales sapien undo
                                                    euismod purus
                                                </p>
                                            </div>
                                            {/* CONTENT BOX #2 */}
                                            <div className="box-list mb-15">
                                                <div className="box-list-icon">
                                                    <i className="fas fa-genderless" />
                                                </div>
                                                <p className="p-md">
                                                    Nemo ipsam egestas volute
                                                    turpis dolores quaerat
                                                    sodales sapien undo pretium
                                                    purus at feugiat dolor
                                                    impedit
                                                </p>
                                            </div>
                                            {/* Button */}
                                            <Link href="/all-services">
                                                <a className="btn btn-lime black-hover">
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
                            src="images/slider/slide-16.jpg"
                            alt="slide-background"
                        />
                        {/* Image Caption */}
                        <div className="caption d-flex align-items-center left-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-9 col-md-8 col-lg-7">
                                        <div className="caption-txt">
                                            {/* Title */}
                                            <h5 className="steelblue-color">
                                                Enhance Intimacy
                                            </h5>
                                            <h2 className="steelblue-color">
                                                Boost your self esteem
                                            </h2>
                                            {/* CONTENT BOX #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon">
                                                    <i className="fas fa-genderless" />
                                                </div>
                                                <p className="p-md">
                                                    Quaerat sodales sapien undo
                                                    euismod purus
                                                </p>
                                            </div>
                                            {/* CONTENT BOX #2 */}
                                            <div className="box-list mb-15">
                                                <div className="box-list-icon">
                                                    <i className="fas fa-genderless" />
                                                </div>
                                                <p className="p-md">
                                                    Nemo ipsam egestas volute
                                                    turpis dolores quaerat
                                                    sodales sapien undo pretium
                                                    purus at feugiat dolor
                                                    impedit
                                                </p>
                                            </div>
                                            {/* Button */}
                                            <Link href="/all-doctors">
                                                {" "}
                                                <a className="btn btn-lime black-hover">
                                                    Meet the Doctors
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

export default Demo8Hero8;
