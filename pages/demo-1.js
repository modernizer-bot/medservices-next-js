import React from "react";
import About5 from "../src/components/Common/About-5";
import Info2 from "../src/components/Common/Info-2";
import Info6 from "../src/components/Common/Info-6";
import Services3 from "../src/components/Common/Services-3";
import Demo1Hero1 from "../src/components/Demo-1/Demo1Hero-1";
import Footer2 from "../src/layout/Footer/Footer2";
import Header3 from "../src/layout/Header/Header3";

const demo1 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header3 />
            {/* END HEADER */}
            {/* HERO-1
			============================================= */}
            <Demo1Hero1 />
            {/* END HERO-1 */}
            {/* ABOUT-1
			============================================= */}
            <section id="about-1" className="about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT BOX #1 */}
                        <div id="abox-1" className="col-md-6 col-lg-3">
                            <div className="abox-1 white-color">
                                {/* Title */}
                                <h5 className="h5-md">Working Time</h5>
                                {/* Table */}
                                <table className="table white-color">
                                    <tbody>
                                        <tr>
                                            <td>Mon – Wed</td>
                                            <td> - </td>
                                            <td className="text-right">
                                                9:00 AM - 7:00 PM
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td> - </td>
                                            <td className="text-right">
                                                9:00 AM - 6:30 PM
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td> - </td>
                                            <td className="text-right">
                                                9:00 AM - 6:00 PM
                                            </td>
                                        </tr>
                                        <tr className="last-tr">
                                            <td>Sun - Sun</td>
                                            <td>-</td>
                                            <td className="text-right">
                                                CLOSED
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* ABOUT BOX #2 */}
                        <div id="abox-2" className="col-md-6 col-lg-3">
                            <div className="abox-1 white-color">
                                <h5 className="h5-md">Doctors Timetable</h5>
                                {/* Text */}
                                <p>
                                    An magnis nulla dolor at sapien augue erat
                                    iaculis purus tempor magna ipsum and vitae a
                                    purus primis ipsum magna ipsum
                                </p>
                                {/* Button */}
                                <a
                                    href="timetable.html"
                                    className="btn btn-sm btn-tra-white mt-25"
                                >
                                    View Timetable
                                </a>
                            </div>
                        </div>
                        {/* ABOUT BOX #3 */}
                        <div id="abox-3" className="col-md-6 col-lg-3">
                            <div className="abox-1 white-color">
                                {/* Title */}
                                <h5 className="h5-md">Appointments</h5>
                                {/* Text */}
                                <p>
                                    An magnis nulla dolor at sapien augue erat
                                    iaculis purus tempor magna ipsum and vitae a
                                    purus primis ipsum magna ipsum
                                </p>
                                {/* Button */}
                                <a
                                    href="#"
                                    className="btn btn-sm btn-tra-white mt-25"
                                >
                                    Make an Apointment
                                </a>
                            </div>
                        </div>
                        {/* ABOUT BOX #4 */}
                        <div id="abox-4" className="col-md-6 col-lg-3">
                            <div className="abox-1 white-color">
                                {/* Title */}
                                <h5 className="h5-md">Emergency Cases</h5>
                                {/* Text */}
                                <h5 className="h5-lg emergency-call">
                                    <i className="fas fa-phone" />
                                    1-800-123-4560
                                </h5>
                                <p className="mt-20">
                                    An magnis nulla dolor sapien augue erat
                                    iaculis purus tempor magna ipsum and vitae a
                                    purus primis ipsum magna ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* END ABOUT-1 */}
            {/* ABOUT-5
			============================================= */}
            <About5 />
            {/* END ABOUT-5 */}
            {/* SERVICES-3
			============================================= */}
            <Services3 />
            {/* END SERVICES-3 */}
            {/* INFO-2
			============================================= */}
            <Info2 />
            {/* END INFO-2 */}
            {/* INFO-6
			============================================= */}
            <Info6 />
            {/* END INFO-6 */}
            {/* VIDEO-1
			============================================= */}
            <section id="video-1" className="wide-60 video-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* VIDEO TEXT */}
                        <div className="col-lg-6">
                            <div
                                className="txt-block pc-30 mb-40 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id blue-color">
                                    Highest Quality Care
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Solutions to Complex Medical Problems
                                </h3>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Nemo ipsam egestas volute turpis dolores
                                        ut aliquam quaerat sodales sapien undo
                                        pretium purus feugiat dolor impedit
                                    </p>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Gravida quis vehicula magna luctus
                                        tempor quisque vel laoreet turpis urna
                                        augue, viverra a augue eget dictum
                                    </p>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Nemo ipsam egestas volute turpis dolores
                                        ut aliquam quaerat sodales sapien undo
                                        pretium purus feugiat dolor impedit
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* VIDEO LINK */}
                        <div className="col-lg-6">
                            <div
                                className="video-preview mb-40 text-center wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* Change the link HERE!!! */}
                                <a
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
                                </a>
                            </div>
                        </div>
                        {/* END VIDEO LINK */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* END VIDEO-1 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <section
                id="reviews-2"
                className="bg-lightgrey wide-100 reviews-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                What Our Patients Say
                            </h3>
                            {/* Text */}
                            <p>
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero at tempus,
                                blandit posuere ligula varius congue cursus
                                porta feugiat
                            </p>
                        </div>
                    </div>
                    {/* END SECTION TITLE */}
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme reviews-holder">
                                {/* TESTIMONIAL #1 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-1.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Etiam sapien sem at sagittis congue
                                            an augue massa varius egestas a
                                            suscipit magna undo tempus aliquet
                                            porta vitae
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Scott Boxer
                                            </h5>
                                            <span>Programmer</span>
                                        </div>
                                    </div>
                                </div>
                                {/*END  TESTIMONIAL #1 */}
                                {/* TESTIMONIAL #2 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-2.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Mauris donec ociis magnisa a sapien
                                            etiam sapien congue augue egestas et
                                            ultrice vitae purus diam integer
                                            congue magna ligula egestas
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Penelopa Peterson
                                            </h5>
                                            <span>Project Manager</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #2 */}
                                {/* TESTIMONIAL #3 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-3.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            At sagittis congue augue an egestas
                                            magna ipsum vitae purus ipsum primis
                                            undo cubilia laoreet augue
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">M.Scanlon</h5>
                                            <span>Photographer</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #3 */}
                                {/* TESTIMONIAL #4 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-4.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Mauris donec ociis magnis sapien
                                            etiam sapien congue augue pretium
                                            ligula a lectus aenean magna mauris
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Jeremy Kruse
                                            </h5>
                                            <span>Graphic Designer</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #4 */}
                                {/* TESTIMONIAL #5 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-5.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            An augue in cubilia laoreet magna
                                            suscipit egestas magna ipsum at
                                            purus ipsum primis in augue ulta
                                            ligula egestas
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Evelyn Martinez
                                            </h5>
                                            <span>Senior UX/UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #5 */}
                                {/* TESTIMONIAL #6 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-6.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            An augue cubilia laoreet undo magna
                                            at risus suscipit egestas magna an
                                            ipsum ligula vitae and purus ipsum
                                            primis
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Dan Hodges
                                            </h5>
                                            <span>Internet Surfer</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #6 */}
                                {/* TESTIMONIAL #7 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-7.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Augue egestas volutpat egestas augue
                                            in cubilia laoreet magna suscipit
                                            luctus and dolor blandit vitae
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">Isabel M.</h5>
                                            <span>SEO Manager</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #7 */}
                                {/* TESTIMONIAL #8 */}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-8.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Augue egestas volutpat egestas augue
                                            in cubilia laoreet magna suscipit
                                            luctus and dolor blandit vitae
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">Alex Ross</h5>
                                            <span>Patient</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #8 */}
                                {/* TESTIMONIAL #9*/}
                                <div className="review-2">
                                    <div className="review-txt text-center">
                                        {/* Quote */}
                                        <div className="quote">
                                            <img
                                                src="images/quote.png"
                                                alt="quote-img"
                                            />
                                        </div>
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img
                                                src="images/review-author-9.jpg"
                                                alt="testimonial-avatar"
                                            />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>
                                            Augue egestas volutpat egestas augue
                                            in cubilia laoreet magna suscipit
                                            luctus magna dolor neque vitae
                                        </p>
                                        {/* Testimonial Author */}
                                        <div className="review-author">
                                            <h5 className="h5-sm">
                                                Alisa Milano
                                            </h5>
                                            <span>Housewife</span>
                                        </div>
                                    </div>
                                </div>
                                {/* END TESTIMONIAL #9 */}
                            </div>
                        </div>
                    </div>
                    {/* END TESTIMONIALS CONTENT */}
                </div>
                {/* End container */}
            </section>
            {/* END TESTIMONIALS-2 */}
            {/* DOCTORS-1
			============================================= */}
            <section
                id="doctors-1"
                className="wide-40 doctors-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Our Medical Specialists
                            </h3>
                            {/* Text */}
                            <p>
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero at tempus,
                                blandit posuere ligula varius congue cursus
                                porta feugiat
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
                                    <span className="blue-color">
                                        Chief Medical Officer
                                    </span>
                                    <p className="p-sm grey-color">
                                        Donec vel sapien augue integer turpis
                                        cursus porta, mauris sed augue luctus
                                        magna dolor luctus ipsum neque
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
                                    <span className="blue-color">
                                        Anesthesiologist
                                    </span>
                                    <p className="p-sm grey-color">
                                        Donec vel sapien augue integer turpis
                                        cursus porta, mauris sed augue luctus
                                        magna dolor luctus ipsum neque
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
                                    <span className="blue-color">
                                        Cardiology
                                    </span>
                                    <p className="p-sm grey-color">
                                        Donec vel sapien augue integer turpis
                                        cursus porta, mauris sed augue luctus
                                        magna dolor luctus ipsum neque
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
                                    <span className="blue-color">
                                        Neurosurgeon
                                    </span>
                                    <p className="p-sm grey-color">
                                        Donec vel sapien augue integer turpis
                                        cursus porta, mauris sed augue luctus
                                        magna dolor luctus ipsum neque
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
                                    className="btn btn-blue blue-hover"
                                >
                                    Meet All Doctors
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End container */}
            </section>
            {/* END DOCTORS-1 */}
            {/* INFO-8
			============================================= */}
            <section id="info-8" className="info-section division">
                {/* TEXT BLOCK */}
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-5">
                            <div
                                className="txt-block pc-30 white-color wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Title */}
                                <h4 className="h4-sm">Opening Hours:</h4>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia cursus vitae massa
                                </p>
                                {/* Table */}
                                <table className="table white-color">
                                    <tbody>
                                        <tr>
                                            <td>Mon – Wed</td>
                                            <td> - </td>
                                            <td className="text-right">
                                                9:00 AM - 7:00 PM
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td>-</td>
                                            <td className="text-right">
                                                9:00 AM - 6:30 PM
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>-</td>
                                            <td className="text-right">
                                                9:00 AM - 6:00 PM
                                            </td>
                                        </tr>
                                        <tr className="last-tr">
                                            <td>Sun - Sun</td>
                                            <td>-</td>
                                            <td className="text-right">
                                                Closed
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* Title */}
                                <h5 className="h5-md">
                                    Need a personal health plan?
                                </h5>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia undo cursus nulla massa
                                    suscipit, luctus neque purus ipsum neque
                                    dolor primis
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* END TEXT BLOCK */}
                {/* INFO-7 IMAGE */}
                <div className="info-8-img text-center" />
            </section>
            {/* END INFO-8 */}
            {/* TABS-1
			============================================= */}
            <section id="tabs-1" className="wide-100 tabs-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* TABS NAVIGATION */}
                            <div
                                id="tabs-nav"
                                className="list-group text-center"
                            >
                                <ul
                                    className="nav nav-pills"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    {/* TAB-1 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link active"
                                            id="tab1-list"
                                            data-toggle="pill"
                                            href="#tab-1"
                                            role="tab"
                                            aria-controls="tab-1"
                                            aria-selected="true"
                                        >
                                            <span className="flaticon-083-stethoscope" />
                                            Pediatrics
                                        </a>
                                    </li>
                                    {/* TAB-2 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab2-list"
                                            data-toggle="pill"
                                            href="#tab-2"
                                            role="tab"
                                            aria-controls="tab-2"
                                            aria-selected="false"
                                        >
                                            <span className="flaticon-005-blood-donation-3" />
                                            Hematology
                                        </a>
                                    </li>
                                    {/* TAB-3 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab3-list"
                                            data-toggle="pill"
                                            href="#tab-3"
                                            role="tab"
                                            aria-controls="tab-3"
                                            aria-selected="false"
                                        >
                                            <span className="flaticon-031-scanner" />
                                            MRI
                                        </a>
                                    </li>
                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab4-list"
                                            data-toggle="pill"
                                            href="#tab-4"
                                            role="tab"
                                            aria-controls="tab-4"
                                            aria-selected="false"
                                        >
                                            <span className="flaticon-048-lungs" />
                                            X-Ray Diagnostics
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* END TABS NAVIGATION */}
                            {/* TABS CONTENT */}
                            <div className="tab-content" id="pills-tabContent">
                                {/* TAB-1 CONTENT */}
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-1"
                                    role="tabpanel"
                                    aria-labelledby="tab1-list"
                                >
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-1 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img
                                                    className="img-fluid"
                                                    src="images/pediatrics_700x700.jpg"
                                                    alt="tab-image"
                                                />
                                            </div>
                                        </div>
                                        {/* TAB-1 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">
                                                    Pediatrics
                                                </h3>
                                                {/* Text */}
                                                <p className="mb-30">
                                                    An enim nullam tempor sapien
                                                    gravida donec enim ipsum
                                                    blandit porta justo integer
                                                    odio velna vitae auctor
                                                    integer congue magna at
                                                    pretium purus pretium ligula
                                                    rutrum itae laoreet augue in
                                                    cubilia laoreet an augue
                                                    egestas ipsum vitae emo
                                                    ligula vitae arcu mollis
                                                    blandit ultrice ligula
                                                    egestas magna suscipit
                                                </p>
                                                {/* Options List */}
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        {/* Option #1 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                and turpis
                                                                dolores quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #2 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor
                                                            </p>
                                                        </div>
                                                        {/* Option  #3 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor at
                                                                pretium purus
                                                                blandit
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        {/* Option #4 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor blandit a
                                                                vitae suscipit
                                                                mollis
                                                            </p>
                                                        </div>
                                                        {/* Option #5 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                turpis dolores
                                                                quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #6 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-1.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>
                                        {/* END TAB-1 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-1 CONTENT */}
                                {/* TAB-2 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-2"
                                    role="tabpanel"
                                    aria-labelledby="tab2-list"
                                >
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-2 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-imgs">
                                                <img
                                                    className="img-fluid"
                                                    src="images/hematology_700x700.jpg"
                                                    alt="tab-image"
                                                />
                                            </div>
                                        </div>
                                        {/* TAB-2 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">
                                                    Hematology
                                                </h3>
                                                {/* Text */}
                                                <p className="mb-30">
                                                    An enim nullam tempor sapien
                                                    gravida donec enim ipsum
                                                    blandit porta justo integer
                                                    odio velna vitae auctor
                                                    integer congue magna at
                                                    pretium purus pretium ligula
                                                    rutrum itae laoreet augue in
                                                    cubilia laoreet an augue
                                                    egestas ipsum vitae emo
                                                    ligula vitae arcu mollis
                                                    blandit ultrice ligula
                                                    egestas magna suscipit
                                                </p>
                                                {/* Options List */}
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        {/* Option #1 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                and turpis
                                                                dolores quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #2 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor
                                                            </p>
                                                        </div>
                                                        {/* Option #3 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor at
                                                                pretium purus
                                                                blandit
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        {/* Option #4 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor blandit a
                                                                vitae suscipit
                                                                mollis
                                                            </p>
                                                        </div>
                                                        {/* Option #5 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                turpis dolores
                                                                quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #6 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-2.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>
                                        {/* END TAB-2 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-2 CONTENT */}
                                {/* TAB-3 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-3"
                                    role="tabpanel"
                                    aria-labelledby="tab3-list"
                                >
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-3 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img
                                                    className="img-fluid"
                                                    src="images/mri_700x700.jpg"
                                                    alt="tab-image"
                                                />
                                            </div>
                                        </div>
                                        {/* TAB-3 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">
                                                    MRI Diagnostic
                                                </h3>
                                                {/* Text */}
                                                <p className="mb-30">
                                                    An enim nullam tempor sapien
                                                    gravida donec enim ipsum
                                                    blandit porta justo integer
                                                    odio velna vitae auctor
                                                    integer congue magna at
                                                    pretium purus pretium ligula
                                                    rutrum itae laoreet augue in
                                                    cubilia laoreet an augue
                                                    egestas ipsum vitae emo
                                                    ligula vitae arcu mollis
                                                    blandit ultrice ligula
                                                    egestas magna suscipit
                                                </p>
                                                {/* Options List */}
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        {/* Option #1 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                and turpis
                                                                dolores quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #2 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor
                                                            </p>
                                                        </div>
                                                        {/* Option #3 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor at
                                                                pretium purus
                                                                blandit
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        {/* Option #4 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor blandit a
                                                                vitae suscipit
                                                                mollis
                                                            </p>
                                                        </div>
                                                        {/* Option #5 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                turpis dolores
                                                                quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #6 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-1.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>
                                        {/* END TAB-3 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-3 CONTENT */}
                                {/* TAB-4 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-4"
                                    role="tabpanel"
                                    aria-labelledby="tab4-list"
                                >
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-4 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img
                                                    className="img-fluid"
                                                    src="images/x-ray_700x700.jpg"
                                                    alt="tab-image"
                                                />
                                            </div>
                                        </div>
                                        {/* TAB-4 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">
                                                    X-Ray Diagnostic
                                                </h3>
                                                {/* Text */}
                                                <p className="mb-30">
                                                    An enim nullam tempor sapien
                                                    gravida donec enim ipsum
                                                    blandit porta justo integer
                                                    odio velna vitae auctor
                                                    integer congue magna at
                                                    pretium purus pretium ligula
                                                    rutrum itae laoreet augue in
                                                    cubilia laoreet an augue
                                                    egestas ipsum vitae emo
                                                    ligula vitae arcu mollis
                                                    blandit ultrice ligula
                                                    egestas magna suscipit
                                                </p>
                                                {/* Options List */}
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        {/* Option #1 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                and turpis
                                                                dolores quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #2 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor
                                                            </p>
                                                        </div>
                                                        {/* Option #3 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor at
                                                                pretium purus
                                                                blandit
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        {/* Option #4 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Magna luctus
                                                                tempor blandit a
                                                                vitae suscipit
                                                                mollis
                                                            </p>
                                                        </div>
                                                        {/* Option #5 */}
                                                        <div className="box-list m-top-15">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                Nemo ipsam
                                                                egestas volute
                                                                turpis dolores
                                                                quaerat
                                                            </p>
                                                        </div>
                                                        {/* Option #6 */}
                                                        <div className="box-list">
                                                            <div className="box-list-icon blue-color">
                                                                <i className="fas fa-angle-double-right" />
                                                            </div>
                                                            <p className="p-sm">
                                                                An enim nullam
                                                                tempor
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-2.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>
                                        {/* END TAB-4 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-4 CONTENT */}
                            </div>
                            {/* END TABS CONTENT */}
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* END TABS-1 */}
            {/* STATISTIC-1
			============================================= */}
            <div
                id="statistic-1"
                className="bg-scroll statistic-section division"
            >
                <div className="container white-color">
                    <div className="row">
                        {/* STATISTIC BLOCK #1 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="statistic-block icon-lg wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Icon  */}
                                <span className="flaticon-062-cardiogram-3" />
                                {/* Text */}
                                <h5 className="statistic-number">
                                    9,<span className="count-element">632</span>
                                </h5>
                                <p className="txt-400">Happy Patients</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #2 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="statistic-block icon-lg wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* Icon  */}
                                <span className="flaticon-137-doctor" />
                                {/* Text */}
                                <h5 className="statistic-number">
                                    <span className="count-element">178</span>
                                </h5>
                                <p className="txt-400">Qualified Doctors</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #3 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="statistic-block icon-lg wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                {/* Icon  */}
                                <span className="flaticon-065-hospital-bed" />
                                {/* Text */}
                                <h5 className="statistic-number">
                                    <span className="count-element">864</span>
                                </h5>
                                <p className="txt-400">Clinic Rooms</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #4 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="statistic-block icon-lg wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                {/* Icon  */}
                                <span className="flaticon-040-placeholder" />
                                {/* Text */}
                                <h5 className="statistic-number">
                                    <span className="count-element">473</span>
                                </h5>
                                <p className="txt-400">Local Partners</p>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END STATISTIC-1 */}
            {/* PRICING-1
			============================================= */}
            <section
                id="pricing-1"
                className="wide-60 pricing-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Best Quality Medical Treatment
                            </h3>
                            {/* Text */}
                            <p>
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero at tempus,
                                blandit posuere ligula varius congue cursus
                                porta feugiat
                            </p>
                        </div>
                    </div>
                    {/* PRICING TABLES */}
                    <div className="row pricing-row">
                        {/* PRICING TABLE #1 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-104-blood-sample blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Blood Test</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        45
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-tra-black blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>
                        {/* END PRICING TABLE #1 */}
                        {/* PRICING TABLE #2 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-072-hospital-5 blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Medical Care</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        350
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-blue blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>
                        {/* END PRICING TABLE #1 */}
                        {/* PRICING TABLE #3 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-008-ambulance-6 blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Emergency Care</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        175
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-tra-black blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>
                        {/* END PRICING TABLE #3 */}
                    </div>
                    {/* END PRICING TABLES */}
                    {/* ALL PRICING TABLES BUTTON */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                            <div className="all-pricing-btn mb-40">
                                {/* Price Notice */}
                                <p>
                                    <span>Note!</span> Feugiat eros, ac
                                    tincidunt ligula massa in faucibus orci
                                    luctus et ultrices posuere cubilia and curae
                                    integer congue leo metus mollis primis and
                                    mauris lectus laoreet tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End container */}
            </section>
            {/* END PRICING-1 */}
            {/* BANNER-7
			============================================= */}
            <section id="banner-7" className="bg-fixed banner-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* BANNER TEXT */}
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="banner-txt wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Title  */}
                                <h2 className="h2-xs">
                                    Highest Quality Medical Treatment
                                </h2>
                                {/* Text */}
                                <p>
                                    Egestas magna egestas magna ipsum vitae
                                    purus ipsum primis in cubilia laoreet augue
                                    egestas suscipit lectus mauris a lectus
                                    laoreet gestas neque undo luctus feugiat
                                    augue suscipit
                                </p>
                                {/* Button */}
                                <a
                                    href="#"
                                    className="btn btn-blue tra-white-hover mt-20"
                                >
                                    Free Consultation
                                </a>
                            </div>
                        </div>
                        {/* END BANNER TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* END BANNER-7 */}
            {/* BLOG-1
			============================================= */}
            <section id="blog-1" className="wide-60 blog-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Our Stories, Tips &amp; Latest News
                            </h3>
                            {/* Text */}
                            <p>
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero at tempus,
                                blandit posuere ligula varius congue cursus
                                porta feugiat
                            </p>
                        </div>
                    </div>
                    {/* BLOG POSTS HOLDER */}
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div className="col-lg-4">
                            <div
                                className="blog-post wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/post-1-img.jpg"
                                        alt="blog-post-image"
                                    />
                                </div>
                                {/* BLOG POST TITLE */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-sm steelblue-color">
                                        <a href="single-post.html">
                                            5 Benefits Of Integrative Medicine
                                        </a>
                                    </h5>
                                    {/* Post Data */}
                                    <span>
                                        May 03, 2019 by
                                        <span>Dr.Jeremy Smith</span>
                                    </span>
                                    {/* Post Text */}
                                    <p>
                                        Quaerat neque purus ipsum neque dolor
                                        primis libero tempus impedit tempor
                                        blandit sapien at gravida donec ipsum,
                                        at porta justo...
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END  BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div className="col-lg-4">
                            <div
                                className="blog-post wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/post-2-img.jpg"
                                        alt="blog-post-image"
                                    />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-sm steelblue-color">
                                        <a href="single-post.html">
                                            Your Health Is In Your Hands
                                        </a>
                                    </h5>
                                    {/* Post Data */}
                                    <span>
                                        Apr 28, 2019 by
                                        <span>Dr.Jonathan Barnes</span>
                                    </span>
                                    {/* Post Text */}
                                    <p>
                                        Quaerat neque purus ipsum neque dolor
                                        primis libero tempus impedit tempor
                                        blandit sapien at gravida donec ipsum,
                                        at porta justo...
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END  BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div className="col-lg-4">
                            <div
                                className="blog-post wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/post-3-img.jpg"
                                        alt="blog-post-image"
                                    />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-sm steelblue-color">
                                        <a href="single-post.html">
                                            How Weather Impacts Your Health
                                        </a>
                                    </h5>
                                    {/* Post Data */}
                                    <span>
                                        Apr 17, 2019 by
                                        <span>Dr.Megan Coleman</span>
                                    </span>
                                    {/* Post Text */}
                                    <p>
                                        Quaerat neque purus ipsum neque dolor
                                        primis libero tempus impedit tempor
                                        blandit sapien at gravida donec ipsum,
                                        at porta justo...
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END  BLOG POST #3 */}
                    </div>
                    {/* END BLOG POSTS HOLDER */}
                </div>
                {/* End container */}
            </section>
            {/* END BLOG-1 */}
            {/* BANNER-2
			============================================= */}
            <section id="banner-2" className="pt-80 banner-section division">
                <div className="bg-scroll bg-inner bg-image division">
                    <div className="container white-color">
                        <div className="row d-flex align-items-center">
                            {/* CALL TO ACTION IMAGE */}
                            <div className="col-lg-5">
                                <div className="banner-2-img">
                                    <img
                                        className="img-fluid"
                                        src="images/image-05.png"
                                        alt="banner-image"
                                    />
                                </div>
                            </div>
                            {/* BANNER TEXT */}
                            <div className="col-lg-6 offset-lg-1">
                                <div
                                    className="banner-txt pc-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Section ID */}
                                    <span className="section-id id-color">
                                        Modern Medicine
                                    </span>
                                    {/* Title  */}
                                    <h3 className="h3-lg">
                                        Better Technologies for Better
                                        Healthcare
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Egestas magna egestas magna ipsum vitae
                                        purus ipsum primis in cubilia laoreet
                                        augue egestas suscipit lectus mauris
                                        lectus laoreet gestas neque undo luctus
                                        feugiat. Aliquam a augue suscipit
                                    </p>
                                    {/* Button */}
                                    <a
                                        href="all-doctors.html"
                                        className="btn btn-tra-white blue-hover"
                                    >
                                        View Our Doctors
                                    </a>
                                </div>
                            </div>
                            {/* END BANNER TEXT */}
                        </div>
                        {/* End row */}
                    </div>
                    {/* End container */}
                </div>
                {/* End Inner Background */}
            </section>
            {/* END BANNER-2 */}
            {/* FOOTER-1
			============================================= */}
            <Footer2 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default demo1;
