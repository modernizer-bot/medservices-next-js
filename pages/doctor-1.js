import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

const doctor1 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header1 />
            {/* END HEADER */}
            {/* DOCTOR BREADCRUMBS */}
            <section
                id="doctor-breadcrumbs"
                className="bg-fixed doctor-details-section division"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 offset-md-5">
                            <div className="doctor-data white-color">
                                {/* Name */}
                                <h2 className="h2-xs">Dr. Matthew Anderson</h2>
                                <h5 className="h5-md">
                                    Neurologist / Epilepsy Specialist /
                                    Cardiologist
                                </h5>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END DOCTOR BREADCRUMBS */}
            {/* DOCTOR-1 DETAILS */}
            <section
                id="doctor-1-details"
                className="doctor-details-section division"
            >
                <div className="container">
                    <div className="row">
                        {/* DOCTOR PHOTO */}
                        <div className="col-md-5">
                            <div className="doctor-photo mb-40">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-3.jpg"
                                    alt="doctor-foto"
                                />
                                {/* Doctor Info */}
                                <div className="doctor-info">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Degrees</td>
                                                <td>M.D. of Medicine</td>
                                            </tr>
                                            <tr>
                                                <td>Areas of Expertise</td>
                                                <td>
                                                    <span>
                                                        <i className="fas fa-angle-double-right" />{" "}
                                                        Neurology
                                                    </span>
                                                    <span>
                                                        <i className="fas fa-angle-double-right" />{" "}
                                                        Immunology
                                                    </span>
                                                    <span>
                                                        <i className="fas fa-angle-double-right" />{" "}
                                                        Internal Medicine
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Language(s)</td>
                                                <td>
                                                    English / Spanish / German
                                                </td>
                                            </tr>
                                            <tr className="last-tr">
                                                <td>Work Days</td>
                                                <td>Tuesday - Thursday</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>{" "}
                                {/* End Doctor Info */}
                                {/* Doctor Contacts */}
                                <div className="doctor-contacts text-center">
                                    <h4 className="h4-xs">
                                        <i className="fas fa-mobile-alt" />{" "}
                                        1-(800)-569-7890
                                    </h4>
                                    <h4 className="h4-xs blue-color">
                                        <i className="fas fa-envelope-open-text" />
                                        <a
                                            href="mailto:yourdomain@mail.com"
                                            className="blue-color"
                                        >
                                            hello@yourdomain.com
                                        </a>
                                    </h4>
                                </div>
                                {/* Buttons */}
                                <div className="doctor-photo-btn text-center">
                                    <a
                                        href="appointment.html"
                                        className="btn btn-md btn-blue blue-hover"
                                    >
                                        Book an Appointment
                                    </a>
                                    <a
                                        href="timetable.html"
                                        className="btn btn-md btn-tra-grey grey-hover"
                                    >
                                        View Timetable
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END DOCTOR PHOTO */}
                        {/* DOCTOR'S BIO */}
                        <div className="col-md-7">
                            <div className="doctor-bio">
                                {/* Text */}
                                <p>
                                    Etiam sapien sem magna at vitae pulvinar
                                    congue augue egestas pretium neque id
                                    viverra suscipit egestas magna porta
                                    ratione, mollis risus lectus porta rutrum
                                    arcu aenean primis in augue luctus neque
                                    purus ipsum neque dolor primis suscipit in
                                    magna dignissim, porttitor hendrerit diam
                                </p>
                                {/* Text */}
                                <p>
                                    In at mauris vel nisl convallis porta at
                                    vitae dui. Nam lacus ligula, vulputate
                                    molestie bibendum quis, aliquet elementum
                                    massa. Vestibulum ut sagittis odio. Ac massa
                                    lorem. Fusce eu cursus est. Fusce non nulla
                                    vitae massa placerat vulputate vel a purus.
                                    Aliqum mullam blandit tempor sapien
                                </p>
                                {/* Title */}
                                <h5 className="h5-md blue-color">
                                    Education + Trainings
                                </h5>
                                {/* Text */}
                                <p>
                                    Aliqum mullam blandit tempor sapien gravida
                                    donec ipsum, at porta justo. Velna vitae
                                    auctor congue magna nihil impedit ligula
                                    risus. Mauris donec ociis et magnis sapien
                                    etiam sapien sem sagittis congue tempor
                                    gravida
                                </p>
                                {/* Option #1 */}
                                <div className="box-list m-top-15">
                                    <div className="box-list-icon blue-color">
                                        <i className="fas fa-angle-double-right" />
                                    </div>
                                    <p className="p-sm">
                                        Nemo ipsam egestas volute and turpis
                                        dolores quaerat
                                    </p>
                                </div>
                                {/* Option #2 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color">
                                        <i className="fas fa-angle-double-right" />
                                    </div>
                                    <p className="p-sm">
                                        Magna luctus tempor augue vitae laoreet
                                        augue in cubilia risus auctor tempus
                                        dolor felis lacinia risus auctor id
                                        viverra dolor
                                    </p>
                                </div>
                                {/* Option #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color">
                                        <i className="fas fa-angle-double-right" />
                                    </div>
                                    <p className="p-sm">
                                        Ligula risus auctor tempus dolor
                                        feugiat, felis lacinia risus interdum
                                        auctor id viverra dolor iaculis luctus
                                    </p>
                                </div>
                                {/* Option #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color">
                                        <i className="fas fa-angle-double-right" />
                                    </div>
                                    <p className="p-sm">
                                        An enim nullam tempor at pretium purus
                                        blandit
                                    </p>
                                </div>
                                {/* CERTIFICATES */}
                                <div className="certificates">
                                    {/* Title */}
                                    <h5 className="h5-md blue-color">
                                        Diplomas and Certificates
                                    </h5>
                                    {/* Certificate Preview */}
                                    <div className="row">
                                        {/* Certificate Image */}
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="certificate-image">
                                                <a
                                                    className="image-link"
                                                    href="images/certificate-1.png"
                                                    title
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="images/certificate-1.png"
                                                        alt="certificate-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Certificate Image */}
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="certificate-image">
                                                <a
                                                    className="image-link"
                                                    href="images/certificate-2.png"
                                                    title
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="images/certificate-2.png"
                                                        alt="certificate-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Certificate Image */}
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="certificate-image">
                                                <a
                                                    className="image-link"
                                                    href="images/certificate-3.png"
                                                    title
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="images/certificate-3.png"
                                                        alt="certificate-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Certificate Image */}
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="certificate-image">
                                                <a
                                                    className="image-link"
                                                    href="images/certificate-4.png"
                                                    title
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="images/certificate-4.png"
                                                        alt="certificate-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Certificate Image */}
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="certificate-image">
                                                <a
                                                    className="image-link"
                                                    href="images/certificate-5.png"
                                                    title
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="images/certificate-5.png"
                                                        alt="certificate-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END CERTIFICATES */}
                            </div>
                        </div>{" "}
                        {/* END DOCTOR BIO */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END DOCTOR-1 DETAILS */}
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
                                What Patients Say About Matthew
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

export default doctor1;
