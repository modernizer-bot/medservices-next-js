import React from "react";

const service2 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <header id="header" className="header">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <a id="wsnavtoggle" className="wsanimated-arrow">
                        <span />
                    </a>
                    <span className="smllogo">
                        <img
                            src="images/logo.png"
                            width={180}
                            height={40}
                            alt="mobile-logo"
                        />
                    </span>
                    <a href="tel:123456789" className="callusbtn">
                        <i className="fas fa-phone" />
                    </a>
                </div>
                {/* HEADER STRIP */}
                <div className="headtoppart bg-blue clearfix">
                    <div className="headerwp clearfix">
                        {/* Address */}
                        <div className="headertopleft">
                            <div className="address clearfix">
                                <span>
                                    <i className="fas fa-map-marker-alt" />
                                    121 King St, Melbourne, VIC 3000{" "}
                                </span>{" "}
                                <a href="tel:123456789" className="callusbtn">
                                    <i className="fas fa-phone" />
                                    (800)-569-7890
                                </a>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="headertopright">
                            <a className="googleicon" title="Google" href="#">
                                <i className="fab fa-google" />{" "}
                                <span className="mobiletext02">Google</span>
                            </a>
                            <a
                                className="linkedinicon"
                                title="Linkedin"
                                href="#"
                            >
                                <i className="fab fa-linkedin-in" />{" "}
                                <span className="mobiletext02">Linkedin</span>
                            </a>
                            <a className="twittericon" title="Twitter" href="#">
                                <i className="fab fa-twitter" />{" "}
                                <span className="mobiletext02">Twitter</span>
                            </a>
                            <a
                                className="facebookicon"
                                title="Facebook"
                                href="#"
                            >
                                <i className="fab fa-facebook-f" />{" "}
                                <span className="mobiletext02">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>{" "}
                {/* END HEADER STRIP */}
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                        <div className="desktoplogo">
                            <a href="demo-1.html">
                                <img
                                    src="images/logo.png"
                                    width={180}
                                    height={40}
                                    alt="header-logo"
                                />
                            </a>
                        </div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <a href="#">
                                        Home <span className="wsarrow" />
                                    </a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true">
                                            <a href="demo-1.html">
                                                Home Concept #1
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-2.html">
                                                Home Concept #2
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-3.html">
                                                Home Concept #3
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-4.html">
                                                Home Concept #4
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-5.html">
                                                Home Concept #5
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-6.html">
                                                Home Concept #6
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-7.html">
                                                Home Concept #7
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-8.html">
                                                Home Concept #8
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-9.html">
                                                Home Concept #9
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-10.html">
                                                Home Concept #10
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-11.html">
                                                Home Concept #11
                                            </a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <a href="demo-12.html">
                                                Home Concept #12
                                            </a>
                                        </li>
                                    </ul>
                                </li>{" "}
                                {/* END DROPDOWN MENU */}
                                {/* PAGES */}
                                <li aria-haspopup="true">
                                    <a href="#">
                                        Pages <span className="wsarrow" />
                                    </a>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Standard Pages:
                                                    </li>
                                                    <li>
                                                        <a href="about-us.html">
                                                            About Us Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="who-we-are.html">
                                                            Who We Are
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="all-services.html">
                                                            Our Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service-1.html">
                                                            Service Single #1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service-2.html">
                                                            Service Single #2
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Medical Pages:
                                                    </li>
                                                    <li>
                                                        <a href="all-departments.html">
                                                            Our Departments
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="department-single.html">
                                                            Department Single
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="all-doctors.html">
                                                            Meet the Doctors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="doctor-1.html">
                                                            Doctor's Profile #1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="doctor-2.html">
                                                            Doctor's Profile #2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="timetable.html">
                                                            Doctors Timetable
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Special Pages:
                                                    </li>
                                                    <li>
                                                        <a href="pricing-1.html">
                                                            Pricing Packages #1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing-2.html">
                                                            Pricing Packages #2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="appointment.html">
                                                            Make an Appointment
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="faqs.html">
                                                            FAQs Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="terms.html">
                                                            Terms of Use
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Auxiliary Pages:
                                                    </li>
                                                    <li>
                                                        <a href="gallery.html">
                                                            Our Gallery
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-listing.html">
                                                            Blog Listing Page
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="single-post.html">
                                                            Single Blog Post
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contacts-1.html">
                                                            Contact Us #1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contacts-2.html">
                                                            Contact Us #2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End row */}
                                        </div>{" "}
                                        {/* End container */}
                                    </div>{" "}
                                    {/* End wsmegamenu */}
                                </li>{" "}
                                {/* END PAGES */}
                                {/* HALF MENU */}
                                <li aria-haspopup="true">
                                    <a href="#">
                                        Half Menu <span className="wsarrow" />
                                    </a>
                                    <div className="wsmegamenu clearfix halfmenu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        For Patients:
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Meet The Doctors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Patient Info Sheets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Online Patients
                                                            Portal
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Patients
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Blog &amp; Latest
                                                            News
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Quick Links:
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Terms &amp; Privacy
                                                            Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Donor Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Workers Compensation
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Insurance
                                                            Information
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            After Hours Care
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>{" "}
                                {/* END HALF MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true">
                                    <a href="#">
                                        Mega Menu <span className="wsarrow" />
                                    </a>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU QUICK LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">
                                                        Quick Links:
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            For Referring
                                                            Doctors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Terms &amp; Privacy
                                                            Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Donor Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Patient Info Sheets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Online Patients
                                                            Portal
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Insurance
                                                            Information
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Patients
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* MEGAMENU FEATURED NEWS */}
                                                <div className="col-lg-5 col-md-12 col-xs-12">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Featured News:
                                                    </h3>
                                                    {/* Image */}
                                                    <div className="fluid-width-video-wrapper">
                                                        <img
                                                            src="images/blog/featured-news.jpg"
                                                            alt="featured-news"
                                                        />
                                                    </div>
                                                    {/* Text */}
                                                    <h5 className="h5-xs">
                                                        <a href="#">
                                                            5 Benefits of
                                                            integrative medicine
                                                        </a>
                                                    </h5>
                                                    <p className="wsmwnutxt">
                                                        Porta semper lacus
                                                        cursus, feugiat primis
                                                        ultrice in ligula risus
                                                        auctor tempus feugiat
                                                        dolor impedit magna
                                                        purus at pretium gravida
                                                        donec
                                                    </p>
                                                </div>{" "}
                                                {/* END MEGAMENU FEATURED NEWS */}
                                                {/* MEGAMENU LATEST NEWS */}
                                                <div className="col-lg-4 col-md-12 col-xs-12">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Latest News:
                                                    </h3>
                                                    {/* Latest News */}
                                                    <ul className="latest-news">
                                                        {/* Post #1 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-1.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">
                                                                    Etiam sapien
                                                                    risus ante
                                                                    auctor
                                                                    tempus
                                                                    accumsan an
                                                                    empor ...
                                                                </a>
                                                                <p>
                                                                    43 Comments
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #2 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-2.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">
                                                                    Blandit
                                                                    tempor a
                                                                    sapien
                                                                    ipsum, porta
                                                                    risus auctor
                                                                    justo ...
                                                                </a>
                                                                <p>
                                                                    38 Comments
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #3 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-3.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">
                                                                    Cursus risus
                                                                    auctor
                                                                    tempus risus
                                                                    laoreet
                                                                    turpis
                                                                    auctor
                                                                    varius ...
                                                                </a>
                                                                <p>
                                                                    29 Comments
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>{" "}
                                                {/* END MEGAMENU LATEST NEWS */}
                                            </div>{" "}
                                            {/* End row */}
                                        </div>{" "}
                                        {/* End container */}
                                    </div>{" "}
                                    {/* End wsmegamenu */}
                                </li>{" "}
                                {/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <a href="#">Simple Link</a>
                                </li>
                                {/* NAVIGATION MENU BUTTON */}
                                <li
                                    className="nl-simple header-btn"
                                    aria-haspopup="true"
                                >
                                    <a href="appointment.html">
                                        Make an Appointment
                                    </a>
                                </li>
                            </ul>
                        </nav>{" "}
                        {/* END MAIN MENU */}
                    </div>
                </div>{" "}
                {/* END NAVIGATION MENU */}
            </header>{" "}
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
                                        <li className="breadcrumb-item">
                                            <a href="all-services.html">
                                                Our Services
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Service Single #2
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Service Single #2
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* SERVICE DETAILS
			============================================= */}
            <div
                id="service-page"
                className="wide-60 service-page-section division"
            >
                <div className="container">
                    <div className="row">
                        {/* SERVICE CONTENT */}
                        <div className="col-lg-8">
                            <div className="s2-page pr-30 mb-40">
                                {/* Title */}
                                <h3 className="h3-md blue-color">
                                    Magnetic Resonance Imaging
                                </h3>
                                <h4 className="h4-sm blue-color">
                                    Maecenas gravida porttitor nunc, magna
                                    luctus tempor viverra cubilia laoreet augue
                                </h4>
                                {/* Text */}
                                <p>
                                    Primis cubilia laoreet augue vitae laoreet
                                    augue in cubilia risus auctor tempus dolor
                                    feugiat, felis lacinia risus auctor id
                                    viverra dolor congue ipsum mauris iaculis
                                    luctus placerat massa magna cursus amet
                                    quisque an aliquet. Feugiat primis in
                                    ultrice ligula risus auctor
                                </p>
                                {/* Text */}
                                <p>
                                    Ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus interdum auctor id
                                    viverra dolor iaculis luctus bibendum luctus
                                    neque rhoncus ipsum tempor varius iaculis at
                                    luctus neque rhoncus ipsum tempor varius
                                    cubilia laoreet augue vitae laoreet augue
                                    undo cubilia feugiat suscipit emper lacus
                                </p>
                                {/* Image */}
                                <div className="content-block-img text-center">
                                    <img
                                        className="img-fluid"
                                        src="images/mri_1000x500.jpg"
                                        alt="content-image"
                                    />
                                </div>
                                {/* Text */}
                                <p>
                                    Ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus interdum auctor id
                                    viverra dolor iaculis luctus bibendum luctus
                                    neque rhoncus ipsum tempor varius iaculis at
                                    luctus neque rhoncus ipsum tempor varius
                                    cubilia laoreet augue vitae laoreet augue
                                    undo cubilia feugiat suscipit emper lacus
                                </p>
                                {/* Options List */}
                                <div className="row">
                                    <div className="col-xl-6">
                                        {/* Option #1 */}
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p>
                                                Nemo ipsam egestas volute turpis
                                                dolores quaerat massa suscipit,
                                                luctus neque
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
                                                dolor primis
                                            </p>
                                        </div>
                                        {/* Option #3 */}
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p>
                                                An enim nullam tempor at pretium
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
                                            <p>
                                                Magna massa suscipit, luctus
                                                neque purus and ipsum neque
                                                dolor primis luctus
                                            </p>
                                        </div>
                                        {/* Option #5 */}
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p>
                                                An enim nullam tempor at pretium
                                                blandit
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
                                                dolor at tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* End Options List */}
                                {/* Small Title */}
                                <h5 className="h5-md blue-color">
                                    Rhoncus ipsum tempor varius iaculis
                                </h5>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Fringilla risus nec, luctus mauris orci
                                        auctor purus euismod pretium purus
                                        pretium ligula rutrum tempor sapien at
                                        pretium luctus ligula rutrum luctus
                                        risus ultrice lacinia risus auctor id
                                        viverra dolor congue ipsum mauris
                                        iaculis luctus placerat massa magna
                                        cursus amet
                                    </p>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Quaerat sodales sapien undo euismod
                                        purus a blandit pretium
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
                                        magna purus pretium gravida donec
                                        quisque an aliquet
                                    </p>
                                </div>
                                {/* Picing Table */}
                                <div className="pricing-table">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bronchoscopy</td>
                                                <td>
                                                    From <span>$1340.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Parathyroid Scan</td>
                                                <td>
                                                    From <span>$765.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Echocardiography</td>
                                                <td>
                                                    From <span>$1075.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Full Blood Picture</td>
                                                <td>
                                                    From <span>$950.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>
                                                    CT &amp; Ultrasound
                                                    Diagnostic
                                                </td>
                                                <td>
                                                    From <span>$885.00</span>
                                                </td>
                                            </tr>
                                            <tr className="last-tr">
                                                <th scope="row">6</th>
                                                <td>MRI &amp; X-Ray</td>
                                                <td>
                                                    From <span>$1050.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Text */}
                                <p>
                                    Primis cubilia laoreet augue vitae laoreet
                                    augue in cubilia risus auctor tempus dolor
                                    feugiat, felis lacinia risus auctor id
                                    viverra dolor congue ipsum mauris iaculis
                                    luctus placerat massa magna cursus amet
                                    quisque an aliquet. Feugiat primis in
                                    ultrice ligula risus auctor
                                </p>
                                {/* Text */}
                                <p>
                                    Ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus interdum auctor id
                                    viverra dolor iaculis luctus bibendum luctus
                                    neque rhoncus ipsum tempor varius iaculis at
                                    luctus neque rhoncus ipsum tempor varius
                                    cubilia laoreet augue vitae laoreet augue
                                    undo cubilia feugiat suscipit
                                </p>
                                {/* Button */}
                                <a
                                    href="appointment.html"
                                    className="btn btn-blue blue-hover"
                                >
                                    Book an Appointment
                                </a>
                            </div>
                        </div>{" "}
                        {/* END SERVICE CONTENT */}
                        {/* SIDEBAR */}
                        <aside id="sidebar" className="col-lg-4">
                            {/* TEXT WIDGET */}
                            <div id="txt-widget" className="sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-sm steelblue-color">
                                    The Heart Of Clinic
                                </h5>
                                {/* Head of Clinic */}
                                <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                                    {/* Avatar */}
                                    <div className="txt-widget-avatar">
                                        <img
                                            src="images/head-of-clinic.jpg"
                                            alt="testimonial-avatar"
                                        />
                                    </div>
                                    {/* Data */}
                                    <div className="txt-widget-data">
                                        <h5 className="h5-md steelblue-color">
                                            Dr. Jonathan Barnes
                                        </h5>
                                        <span>
                                            Chief Medical Officer, Founder
                                        </span>
                                        <p className="blue-color">
                                            1-800-1234-567
                                        </p>
                                    </div>
                                </div>{" "}
                                {/* End Head of Clinic */}
                                {/* Text */}
                                <p className="p-sm">
                                    An enim nullam tempor sapien at gravida
                                    donec pretium ipsum porta justo integer at
                                    odiovelna vitae auctor integer congue magna
                                    purus
                                </p>
                                {/* Button */}
                                <a
                                    href="about.html"
                                    className="btn btn-blue blue-hover"
                                >
                                    Learn More
                                </a>
                            </div>{" "}
                            {/* END TEXT WIDGET */}
                            {/* SIDEBAR TABLE */}
                            <div className="sidebar-table blue-table sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-md">Working Time</h5>
                                {/* Text */}
                                <p className="p-sm">
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor at tempus
                                    feugiat dolor lacinia cursus nulla vitae
                                    massa
                                </p>
                                {/* Table */}
                                <table className="table">
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
                                {/* Title */}
                                <h5 className="h5-xs">
                                    Need a personal health plan?
                                </h5>
                                {/* Text */}
                                <p className="p-sm">
                                    Porta semper lacus cursus, and feugiat
                                    primis ultrice ligula at risus auctor
                                </p>
                            </div>{" "}
                            {/* END SIDEBAR TABLE */}
                            {/* SIDEBAR TIMETABLE */}
                            <div className="sidebar-timetable sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-md mb-20">
                                    Doctors Timetable
                                </h5>
                                {/* Text */}
                                <p className="p-sm">
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor at tempus
                                    feugiat dolor lacinia cursus nulla vitae
                                    massa
                                </p>
                                {/* Button */}
                                <a
                                    href="about.html"
                                    className="btn btn-blue blue-hover mt-10"
                                >
                                    View Timetable
                                </a>
                            </div>{" "}
                            {/* END SIDEBAR TABLE */}
                        </aside>{" "}
                        {/* END SIDEBAR */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END SERVICE DETAILS */}
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
            <footer id="footer-1" className="bg-image wide-40 footer division">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-info mb-40">
                                {/* Footer Logo */}
                                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
                                <img
                                    src="images/footer-logo-white.png"
                                    width={180}
                                    height={40}
                                    alt="footer-logo"
                                />
                                {/* Text */}
                                <p className="p-sm mt-20">
                                    Aliquam orci nullam tempor sapien gravida
                                    donec an enim ipsum porta justo at velna
                                    auctor congue
                                </p>
                                {/* Social Icons */}
                                <div className="footer-socials-links mt-20">
                                    <ul className="foo-socials text-center clearfix">
                                        <li>
                                            <a
                                                href="#"
                                                className="ico-facebook"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="ico-twitter">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="ico-google-plus"
                                            >
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="ico-tumblr">
                                                <i className="fab fa-tumblr" />
                                            </a>
                                        </li>
                                        {/*
										<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
										<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>											
										<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
										<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>									
										<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>											
										<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
										<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
										<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
									    */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* FOOTER CONTACTS */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box mb-40">
                                {/* Title */}
                                <h5 className="h5-xs">Our Location</h5>
                                {/* Address */}
                                <p>121 King Street, Melbourne,</p>
                                <p>Victoria 3000 Australia</p>
                                {/* Email */}
                                <p className="foo-email mt-20">
                                    E:{" "}
                                    <a href="mailto:yourdomain@mail.com">
                                        hello@yourdomain.com
                                    </a>
                                </p>
                                {/* Phone */}
                                <p>P: +12 9 8765 4321</p>
                            </div>
                        </div>
                        {/* FOOTER WORKING HOURS */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box mb-40">
                                {/* Title */}
                                <h5 className="h5-xs">Working Time</h5>
                                {/* Working Hours */}
                                <p className="p-sm">
                                    Mon - Wed - <span>9:00 AM - 7:00 PM</span>
                                </p>
                                <p className="p-sm">
                                    Thursday - <span>9:00 AM - 6:30 PM</span>
                                </p>
                                <p className="p-sm">
                                    Friday - <span>9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="p-sm">
                                    Sat - Sun - <span>Closed</span>
                                </p>
                            </div>
                        </div>
                        {/* FOOTER PHONE NUMBER */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box mb-40">
                                {/* Title */}
                                <h5 className="h5-xs">Emergency Cases</h5>
                                {/* Footer List */}
                                <h5 className="h5-xl blue-color">
                                    1-800-123-4560
                                </h5>
                                {/* Text */}
                                <p className="p-sm mt-15">
                                    Aliquam orci nullam undo tempor sapien
                                    gravida donec enim ipsum porta justo velna
                                    aucto magna
                                </p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* END FOOTER CONTENT */}
                    {/* FOOTER COPYRIGHT */}
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="footer-copyright">
                                    © 2019 <span>MedService</span>. All Rights
                                    Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End container */}
            </footer>{" "}
            {/* END FOOTER-1 */}
        </div>
    );
};

export default service2;
