import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

const allServices = () => {
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
                                            Our Services
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Services
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* TABS-2
			============================================= */}
            <section id="tabs-2" className="wide-100 tabs-section division">
                <div className="container">
                    <div className="row">
                        {/* TABS NAVIGATION */}
                        <div className="col-lg-4">
                            <div
                                id="tabs-nav"
                                className="list-group text-center clearfix"
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
                                            id="tab11-list"
                                            data-toggle="pill"
                                            href="#tab-11"
                                            role="tab"
                                            aria-controls="tab-11"
                                            aria-selected="true"
                                        >
                                            Routine Medical Care
                                        </a>
                                    </li>
                                    {/* TAB-2 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab12-list"
                                            data-toggle="pill"
                                            href="#tab-12"
                                            role="tab"
                                            aria-controls="tab-12"
                                            aria-selected="false"
                                        >
                                            Full Blood Picture
                                        </a>
                                    </li>
                                    {/* TAB-3 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab13-list"
                                            data-toggle="pill"
                                            href="#tab-13"
                                            role="tab"
                                            aria-controls="tab-13"
                                            aria-selected="false"
                                        >
                                            MRI Diagnostic
                                        </a>
                                    </li>
                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab14-list"
                                            data-toggle="pill"
                                            href="#tab-14"
                                            role="tab"
                                            aria-controls="tab-14"
                                            aria-selected="false"
                                        >
                                            X-Ray Diagnostic
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>{" "}
                        {/* END TABS NAVIGATION */}
                        {/* TABS CONTENT */}
                        <div className="col-lg-8">
                            <div className="tab-content" id="pills-tabContent">
                                {/* TAB-1 CONTENT */}
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-11"
                                    role="tabpanel"
                                    aria-labelledby="tab11-list"
                                >
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        Routine Medical Care
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae
                                        auctor integer congue magna at pretium
                                        purus pretium ligula rutrum itae laoreet
                                        augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae
                                        arcu mollis blandit ultrice ligula
                                        egestas magna suscipit
                                    </p>
                                    {/* Image */}
                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/pediatrics_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>
                                    {/* Text */}
                                    <p>
                                        An enim nullam tempor sapien gravida
                                        donec enim ipsum blandit porta justo
                                        integer odio velna vitae auctor integer
                                        congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum
                                        vitae emo ligula vitae arcu mollis
                                        blandit ultrice ligula egestas magna
                                        suscipit
                                    </p>
                                    {/* Options List */}
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
                                                    massa suscipit, luctus neque
                                                </p>
                                            </div>
                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            {/* Option #4 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                            {/* Option #6 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End Options List */}
                                    {/* Button */}
                                    <a
                                        href="service-1.html"
                                        className="btn btn-blue blue-hover mt-30"
                                    >
                                        View More Details
                                    </a>
                                </div>{" "}
                                {/* END TAB-1 CONTENT */}
                                {/* TAB-2 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-12"
                                    role="tabpanel"
                                    aria-labelledby="tab12-list"
                                >
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        Full Blood Picture
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae
                                        auctor integer congue magna at pretium
                                        purus pretium ligula rutrum itae laoreet
                                        augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae
                                        arcu mollis blandit ultrice ligula
                                        egestas magna suscipit
                                    </p>
                                    {/* Image */}
                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/hematology_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>
                                    {/* Text */}
                                    <p>
                                        An enim nullam tempor sapien gravida
                                        donec enim ipsum blandit porta justo
                                        integer odio velna vitae auctor integer
                                        congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum
                                        vitae emo ligula vitae arcu mollis
                                        blandit ultrice ligula egestas magna
                                        suscipit
                                    </p>
                                    {/* Options List */}
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
                                                    massa suscipit, luctus neque
                                                </p>
                                            </div>
                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            {/* Option #4 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                            {/* Option #6 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End Options List */}
                                    {/* Button */}
                                    <a
                                        href="service-1.html"
                                        className="btn btn-blue blue-hover mt-30"
                                    >
                                        View More Details
                                    </a>
                                </div>{" "}
                                {/* END TAB-2 CONTENT */}
                                {/* TAB-3 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-13"
                                    role="tabpanel"
                                    aria-labelledby="tab13-list"
                                >
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        MRI Diagnostic
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae
                                        auctor integer congue magna at pretium
                                        purus pretium ligula rutrum itae laoreet
                                        augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae
                                        arcu mollis blandit ultrice ligula
                                        egestas magna suscipit
                                    </p>
                                    {/* Image */}
                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/mri_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>
                                    {/* Text */}
                                    <p>
                                        An enim nullam tempor sapien gravida
                                        donec enim ipsum blandit porta justo
                                        integer odio velna vitae auctor integer
                                        congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum
                                        vitae emo ligula vitae arcu mollis
                                        blandit ultrice ligula egestas magna
                                        suscipit
                                    </p>
                                    {/* Options List */}
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
                                                    massa suscipit, luctus neque
                                                </p>
                                            </div>
                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            {/* Option #4 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                            {/* Option #6 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End Options List */}
                                    {/* Button */}
                                    <a
                                        href="service-1.html"
                                        className="btn btn-blue blue-hover mt-30"
                                    >
                                        View More Details
                                    </a>
                                </div>{" "}
                                {/* END TAB-3 CONTENT */}
                                {/* TAB-4 CONTENT */}
                                <div
                                    className="tab-pane fade"
                                    id="tab-14"
                                    role="tabpanel"
                                    aria-labelledby="tab14-list"
                                >
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        X-Ray Diagnostic
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae
                                        auctor integer congue magna at pretium
                                        purus pretium ligula rutrum itae laoreet
                                        augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae
                                        arcu mollis blandit ultrice ligula
                                        egestas magna suscipit
                                    </p>
                                    {/* Image */}
                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/x-ray_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>
                                    {/* Text */}
                                    <p>
                                        An enim nullam tempor sapien gravida
                                        donec enim ipsum blandit porta justo
                                        integer odio velna vitae auctor integer
                                        congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum
                                        vitae emo ligula vitae arcu mollis
                                        blandit ultrice ligula egestas magna
                                        suscipit
                                    </p>
                                    {/* Options List */}
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
                                                    massa suscipit, luctus neque
                                                </p>
                                            </div>
                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            {/* Option #4 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor at
                                                    pretium blandit
                                                </p>
                                            </div>
                                            {/* Option #6 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus
                                                    neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End Options List */}
                                    {/* Button */}
                                    <a
                                        href="service-1.html"
                                        className="btn btn-blue blue-hover mt-30"
                                    >
                                        View More Details
                                    </a>
                                </div>{" "}
                                {/* END TAB-4 CONTENT */}
                            </div>{" "}
                            {/* END TABS CONTENT */}
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END TABS-2 */}
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
            {/* BANNER-5
			============================================= */}
            <section id="banner-5" className="pt-100 banner-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Certified and Experienced Doctors
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
                    {/* BANNER IMAGE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div
                                className="banner-5-img wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/image-07.png"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END BANNER-5 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default allServices;
