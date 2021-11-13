import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

const allDoctors = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header1 />
            {/* END HEADER */}
            {/* BREADCRUMB
			============================================= */}
            <div id="breadcrumb" className="division">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className=" breadcrumb-holder">
                                {/* Breadcrumb Nav */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="demo-1.html">Home</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Meet the Doctors
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Meet the Doctors
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* DOCTORS-3
			============================================= */}
            <section
                id="doctors-3"
                className="bg-lightgrey wide-60 doctors-section division"
            >
                <div className="container">
                    <div className="row">
                        {/* DOCTOR #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-1.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Jonathan Barnes D.M.
                                    </h5>
                                    <span>Chief Medical Officer</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #1 */}
                        {/* DOCTOR #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-2.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Hannah Harper D.M.
                                    </h5>
                                    <span>Anesthesiologist</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #2 */}
                        {/* DOCTOR #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-3.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Matthew Anderson D.M.
                                    </h5>
                                    <span>Cardiology</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #3 */}
                        {/* DOCTOR #4 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-4.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Megan Coleman D.M.
                                    </h5>
                                    <span>Neurosurgeon</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #4 */}
                        {/* DOCTOR #5 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-5.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Robert Peterson D.M.
                                    </h5>
                                    <span>Allergist</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #5 */}
                        {/* DOCTOR #6 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-6.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Joshua Elledge D.M.
                                    </h5>
                                    <span>Orthopaedics</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #6 */}
                        {/* DOCTOR #7 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-3.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Matthew Anderson D.M.
                                    </h5>
                                    <span>Cardiology</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #7 */}
                        {/* DOCTOR #8 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-1.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Jonathan Barnes D.M.
                                    </h5>
                                    <span>Chief Medical Officer</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-2.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #8 */}
                        {/* DOCTOR #9 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="doctor-2">
                                {/* Doctor Photo */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/doctor-2.jpg"
                                        alt="doctor-foto"
                                    />
                                </div>
                                {/* Doctor Meta */}
                                <div className="doctor-meta">
                                    <h5 className="h5-xs blue-color">
                                        Hannah Harper D.M.
                                    </h5>
                                    <span>Anesthesiologist</span>
                                    {/* Button */}
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        href="doctor-1.html"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR #9 */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END DOCTORS-3 */}
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
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END STATISTIC-1 */}
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
                    </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
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
                                </div>{" "}
                                {/* END TESTIMONIAL #9 */}
                            </div>
                        </div>
                    </div>{" "}
                    {/* END TESTIMONIALS CONTENT */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END TESTIMONIALS-2 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default allDoctors;
