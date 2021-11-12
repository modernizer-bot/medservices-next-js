import React from "react";

const demo9 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <header id="header-2" className="header ">
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
                {/* HEADER WIDGETS */}
                <div className="hero-widget clearfix">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            {/* LOGO IMAGE */}
                            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                            <div className="col-md-5 col-xl-6">
                                <div className="desktoplogo">
                                    <a href="#hero-9">
                                        <img
                                            src="images/logo.png"
                                            width={180}
                                            height={40}
                                            alt="header-logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            {/* WIDGETS */}
                            <div className="col-md-7 col-xl-6">
                                <div className="row">
                                    {/* Emergency Cases Widget 
						    		<div class="col-md-6">
						    			<div class="header-widget icon-xs">
						    				<span class="flaticon-039-emergency-call-1 blue-color"></span>
							    			<div class="header-widget-txt">
								    			<p>Emergency Cases</p> 
												<p class="header-widget-phone steelblue-color">1-800-123-4560</p>
											</div>
						    			</div>
						    		</div>*/}
                                    {/* Working Hours Widget */}
                                    <div className="col-md-6">
                                        <div className="header-widget icon-xs">
                                            <span className="flaticon-092-clock blue-color" />
                                            <div className="header-widget-txt">
                                                <p className="txt-400">
                                                    Mon – Fri : - 8:00 AM - 8:00
                                                    PM
                                                </p>
                                                <p className="lightgrey-color">
                                                    Sat - Sun : - Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Location Widget */}
                                    <div className="col-md-6">
                                        <div className="header-widget icon-xs">
                                            <span className="flaticon-021-hospital-9 blue-color" />
                                            <div className="header-widget-txt">
                                                <p className="txt-400">
                                                    121 King Street, Melbourne,
                                                </p>
                                                <p className="lightgrey-color">
                                                    Victoria 3000 Australia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END WIDGETS */}
                        </div>
                    </div>
                </div>{" "}
                {/* END HEADER WIDGETS */}
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                        <div className="desktoplogo">
                            <a href="#hero-9">
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
                                                                src="images/blog/header-post-1.jpg"
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
                                                                src="images/blog/header-post-2.jpg"
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
                                                                src="images/blog/header-post-3.jpg"
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
                                {/* HIDDEN NAVIGATION MENU BUTTON */}
                                <li
                                    className="nl-simple header-btn"
                                    aria-haspopup="true"
                                >
                                    <a
                                        className="blue-hover"
                                        href="timetable.html"
                                    >
                                        Our Doctors Timetable
                                    </a>
                                </li>
                            </ul>
                        </nav>{" "}
                        {/* END MAIN MENU */}
                        {/* NAVIGATION MENU BUTTON */}
                        <div className="header-button">
                            <span className="nl-simple header-btn blue-hover">
                                <a href="timetable.html">
                                    Our Doctors Timetable
                                </a>
                            </span>
                        </div>
                    </div>
                </div>{" "}
                {/* END NAVIGATION MENU */}
            </header>{" "}
            {/* END HEADER */}
            {/* HERO-9
			============================================= */}
            <section id="hero-9" className="hero-section">
                <div
                    id="heroCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    {/* SLIDER CONTENT */}
                    <div className="carousel-inner">
                        {/* SLIDE 1 */}
                        <div
                            id="carousel-slide-1"
                            className="bg-fixed carousel-item active"
                        >
                            <div className="mask d-flex align-items-center">
                                <div className="container">
                                    <div className="row">
                                        {/* SLIDE-1 TEXT */}
                                        <div className="col-md-8 col-lg-7">
                                            <div className="hero-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Welcome to MedService
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    We will help you{" "}
                                                    <span>
                                                        to become healthy
                                                    </span>
                                                </h2>
                                                {/* Text */}
                                                <p className="p-md">
                                                    Feugiat primis ligula risus
                                                    auctor egestas augue mauri
                                                    viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum
                                                    in viverra tortor and
                                                    gravida purus pretium lorem
                                                    primis in integer mollis and
                                                    pretium purus pretium
                                                </p>
                                                {/* Button */}
                                                <a
                                                    href="about-us.html"
                                                    className="btn btn-blue blue-hover"
                                                >
                                                    More About Clinic
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END SLIDE 1 */}
                        {/* SLIDE 2 */}
                        <div
                            id="carousel-slide-2"
                            className="bg-fixed carousel-item"
                        >
                            <div className="mask d-flex align-items-center">
                                <div className="container">
                                    <div className="row">
                                        {/* SLIDE-2 TEXT */}
                                        <div className="col-md-8 col-lg-7 offset-md-4 offset-lg-5">
                                            <div className="hero-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Our clinic Provide
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    <span>Best Quality</span>{" "}
                                                    Medical Treatment for You
                                                </h2>
                                                {/* Text */}
                                                <p className="p-md">
                                                    Feugiat primis ligula risus
                                                    auctor egestas augue mauri
                                                    viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum
                                                    in viverra tortor and
                                                    gravida purus pretium lorem
                                                    primis in integer mollis and
                                                    pretium purus pretium
                                                </p>
                                                {/* Button */}
                                                <a
                                                    href="who-we-are.html"
                                                    className="btn btn-black tra-black-hover mr-10"
                                                >
                                                    Get More Info
                                                </a>
                                                <a
                                                    href="all-services.html"
                                                    className="btn btn-blue blue-hover"
                                                >
                                                    Our Core Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END SLIDE 2 */}
                        {/* SLIDE 3 */}
                        <div
                            id="carousel-slide-3"
                            className="bg-fixed carousel-item"
                        >
                            <div className="mask d-flex align-items-center">
                                <div className="container">
                                    <div className="row">
                                        {/* SLIDE-3 TEXT */}
                                        <div className="col-md-8 col-lg-7">
                                            <div className="hero-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Why Choose Our clinic
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    We <span>will Care</span>{" "}
                                                    About Your Health
                                                </h2>
                                                {/* Option Box #1 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon blue-color">
                                                        <i className="fas fa-angle-double-right" />
                                                    </div>
                                                    <p className="p-md">
                                                        Fringilla risus nec,
                                                        luctus mauris orci
                                                        auctor purus euismod
                                                        pretium purus pretium
                                                        ligula rutrum tempor
                                                        sapien at pretium luctus
                                                    </p>
                                                </div>
                                                {/* Option Box #2 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon blue-color">
                                                        <i className="fas fa-angle-double-right" />
                                                    </div>
                                                    <p className="p-md">
                                                        Feugiat primis ultrice
                                                        in ligula risus auctor
                                                        tempus feugiat
                                                    </p>
                                                </div>
                                                {/* Option Box #3 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon blue-color">
                                                        <i className="fas fa-angle-double-right" />
                                                    </div>
                                                    <p className="p-md">
                                                        Porta semper lacus
                                                        cursus, feugiat primis
                                                        ultrice in ligula risus
                                                        auctor tempus feugiat
                                                        dolor impedit magna
                                                        purus pretium donec
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END SLIDE 3 */}
                    </div>{" "}
                    {/* END SLIDER CONTENT */}
                    {/* SLIDER NAVIGATION */}
                    <div className="carousel-nav white-nav">
                        <a
                            className="carousel-control-prev"
                            href="#heroCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            />
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#heroCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
            </section>{" "}
            {/* END HERO-9 */}
            {/* ABOUT-4
			============================================= */}
            <section id="about-4" className="wide-60 about-section division">
                <div className="container">
                    <div className="row">
                        {/* ABOUT BOX #1 */}
                        <div className="col-lg-4">
                            <div
                                className="abox-4 mb-40 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/quality_care_800x600.jpg"
                                    alt="about-image"
                                />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        <a href="#">Highest Quality Care</a>
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice ligula risus auctor
                                        tempus feugiat dolor lacinia cursus
                                        nulla vitae massa placerat at neque
                                        purus ultrice
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ABOUT BOX #2 */}
                        <div className="col-lg-4">
                            <div
                                className="abox-4 mb-40 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/emergency_help_800x600.jpg"
                                    alt="about-image"
                                />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        <a href="#">Emergency Department</a>
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice ligula risus auctor
                                        tempus feugiat dolor lacinia cursus
                                        nulla vitae massa placerat at neque
                                        purus ultrice
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ABOUT BOX #3 */}
                        <div className="col-lg-4">
                            <div
                                className="abox-4 abox-4-table blue-table mb-40 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* Title */}
                                <h5 className="h5-sm">Working Time</h5>
                                {/* Text */}
                                <p>
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
                                                Closed
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END ABOUT-4 */}
            {/* SERVICES-3
			============================================= */}
            <section
                id="services-3"
                className="bg-lightgrey wide-100 services-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Total Health Care Solutions
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
                    {/* SERVICES CONTENT */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme services-holder">
                                {/* SERVICE BOX #1 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-083-stethoscope" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Pediatrics
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #2 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-047-head" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Neurology
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #3 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-015-blood-donation-1" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Haematology
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #4 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-048-lungs" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        X-Ray Diagnostic
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #5 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-060-cardiogram-4" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Cardiology
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #6 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-031-scanner" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        MRI
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #7 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-076-microscope" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Laboratory Services
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                                {/* SERVICE BOX #8 */}
                                <div className="sbox-3 icon-sm">
                                    {/* Icon */}
                                    <div className="sbox-3-icon">
                                        <span className="flaticon-068-ambulance-3" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Emergency Help
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* END SERVICES CONTENT */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END SERVICES-3 */}
            {/* INFO-2
			============================================= */}
            <section id="info-2" className="wide-60 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-lg-6">
                            <div
                                className="txt-block pc-30 mb-40 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id blue-color">
                                    Welcome to MedService
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Complete Medical Solutions in One Place
                                </h3>
                                {/* Text */}
                                <p className="mb-30">
                                    An enim nullam tempor sapien gravida donec
                                    enim ipsum blandit porta justo integer odio
                                    velna vitae auctor integer congue magna at
                                    pretium purus pretium ligula rutrum itae
                                    laoreet augue undo cubilia laoreet an augue
                                    egestas ipsum vitae emo ligula vitae mollis
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
                                                Nemo ipsam egestas volute and
                                                turpis dolores quaerat
                                            </p>
                                        </div>
                                        {/* Option #2 */}
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Magna luctus tempor
                                            </p>
                                        </div>
                                        {/* Option #3 */}
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                An enim nullam tempor at pretium
                                                purus blandit
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
                                                Magna luctus tempor blandit a
                                                vitae suscipit mollis
                                            </p>
                                        </div>
                                        {/* Option #5 */}
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Nemo ipsam egestas volute turpis
                                                dolores quaerat
                                            </p>
                                        </div>
                                        {/* Option #6 */}
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                An enim nullam tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* End Options List */}
                            </div>
                        </div>{" "}
                        {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6">
                            <div
                                className="info-2-img wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/image-04.png"
                                    alt="info-image"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END INFO-2 */}
            {/* INFO-6
			============================================= */}
            <section id="info-6" className="bg-blue info-section division">
                {/* TEXT BLOCK */}
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 offset-lg-6">
                            <div
                                className="txt-block pc-30 white-color wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id id-color">
                                    Best Practices
                                </span>
                                {/* Title */}
                                <h3 className="h3-md">
                                    Clinic with Innovative Approach to Treatment
                                </h3>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Maecenas gravida porttitor nunc, quis
                                        vehicula magna luctus tempor. Quisque
                                        vel laoreet turpis urna augue, viverra a
                                        augue eget, dictum tempor diam pulvinar
                                        massa purus nulla
                                    </p>
                                </div>
                                {/* CONTENT BOX #2 */}
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
                                {/* CONTENT BOX #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Nemo ipsam egestas volute turpis dolores
                                        ut aliquam quaerat sodales sapien undo
                                        pretium purus feugiat dolor impedit
                                        magna purus pretium gravida donec ligula
                                        massa in faucibus
                                    </p>
                                </div>
                                {/* Button */}
                                <a
                                    href="all-doctors.html"
                                    className="btn btn-tra-white blue-hover mt-25"
                                >
                                    Meet The Doctors
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* INFO-6 IMAGE */}
                <div className="info-6-img text-center" />
            </section>{" "}
            {/* END INFO-6 */}
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
                                            <span className="flaticon-083-stethoscope" />{" "}
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
                                            <span className="flaticon-005-blood-donation-3" />{" "}
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
                                            <span className="flaticon-031-scanner" />{" "}
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
                                            <span className="flaticon-048-lungs" />{" "}
                                            X-Ray Diagnostics
                                        </a>
                                    </li>
                                </ul>
                            </div>{" "}
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
                                                        <div className="box-list">
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
                                                        <div className="box-list">
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
                                                </div>{" "}
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-1.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>{" "}
                                        {/* END TAB-1 TEXT */}
                                    </div>
                                </div>{" "}
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
                                                        <div className="box-list">
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
                                                        <div className="box-list">
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
                                                </div>{" "}
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-2.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>{" "}
                                        {/* END TAB-2 TEXT */}
                                    </div>
                                </div>{" "}
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
                                                        <div className="box-list">
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
                                                        <div className="box-list">
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
                                                </div>{" "}
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-1.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>{" "}
                                        {/* END TAB-3 TEXT */}
                                    </div>
                                </div>{" "}
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
                                                        <div className="box-list">
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
                                                        <div className="box-list">
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
                                                </div>{" "}
                                                {/* End Options List */}
                                                {/* Button */}
                                                <a
                                                    href="service-2.html"
                                                    className="btn btn-blue blue-hover mt-30"
                                                >
                                                    View More Details
                                                </a>
                                            </div>
                                        </div>{" "}
                                        {/* END TAB-4 TEXT */}
                                    </div>
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
            {/* END TABS-1 */}
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
            {/* ABOUT-6
			============================================= */}
            <section id="about-6" className="pt-100 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-lg-6">
                            <div
                                className="txt-block pc-30 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id blue-color">
                                    Qualified Doctors
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Group of Certified and Experienced Doctors
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
                                        Maecenas gravida porttitor nunc, quis
                                        vehicula magna luctus tempor. Quisque
                                        vel laoreet turpis urna augue, viverra a
                                        augue eget, dictum tempor diam pulvinar
                                        massa purus nulla
                                    </p>
                                </div>
                                {/* Button */}
                                <a
                                    href="all-doctors.html"
                                    className="btn btn-blue blue-hover mt-25"
                                >
                                    Meet The Doctors
                                </a>
                            </div>
                        </div>{" "}
                        {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6">
                            <div
                                className="about-img text-center wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/image-09.png"
                                    alt="about-image"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END ABOUT-6 */}
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
                    </div>{" "}
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
                        </div>{" "}
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
                        </div>{" "}
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
                        </div>{" "}
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
                        </div>{" "}
                        {/* END DOCTOR #4 */}
                    </div>{" "}
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
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END DOCTORS-1 */}
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
                        </div>{" "}
                        {/* END BANNER TEXT */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
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
                                        May 03, 2019 by{" "}
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
                        </div>{" "}
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
                                        Apr 28, 2019 by{" "}
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
                        </div>{" "}
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
                                        Apr 17, 2019 by{" "}
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
                        </div>{" "}
                        {/* END  BLOG POST #3 */}
                    </div>{" "}
                    {/* END BLOG POSTS HOLDER */}
                    {/* ALL POSTS BUTTON */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="all-posts-btn mb-40 wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                <a
                                    href="blog-listing.html"
                                    className="btn btn-blue blue-hover"
                                >
                                    Read More Posts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END BLOG-1 */}
            {/* BANNER-4
			============================================= */}
            <section
                id="banner-4"
                className="bg-lightgrey banner-section division"
            >
                {/* BANNER TEXT */}
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="banner-txt">
                                {/* Title  */}
                                <h2 className="h2-xs">
                                    Need an Emergency Help? Call Us!
                                </h2>
                                <h3 className="h3-xl blue-color">
                                    +1-800-123-4560
                                </h3>
                                {/* Text */}
                                <p>
                                    Egestas magna egestas magna ipsum vitae
                                    purus ipsum primis in cubilia laoreet augue
                                    egestas suscipit lectus mauris lectus
                                    laoreet gestas neque undo luctus feugiat a
                                    augue suscipit luctus
                                </p>
                                {/* Button */}
                                <a
                                    href="#"
                                    className="btn btn-blue blue-hover mt-20"
                                >
                                    Make An Apointment
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* END CONTENT TEXT */}
                {/* BANNER-4 IMAGE */}
                <div className="banner-4-img" />
            </section>{" "}
            {/* END BANNER-4 */}
            {/* FOOTER-2
			============================================= */}
            <footer id="footer-2" className="wide-40 footer division">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-info mb-40">
                                {/* Footer Logo */}
                                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
                                <img
                                    src="images/footer-logo.png"
                                    width={180}
                                    height={40}
                                    alt="footer-logo"
                                />
                                {/* Email */}
                                <p className="foo-email">
                                    E:{" "}
                                    <a href="mailto:yourdomain@mail.com">
                                        hello@yourdomain.com
                                    </a>
                                </p>
                                {/* Phone */}
                                <p>P: +12 9 8765 4321</p>
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
                        </div>{" "}
                        {/* END FOOTER INFO */}
                        {/* FOOTER PRODUCTS LINKS */}
                        <div className="col-md-6 col-lg-2 offset-lg-1">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-xs">Discovery</h5>
                                {/* Footer List */}
                                <ul className="clearfix">
                                    <li>
                                        <a href="#">Patients Portal</a>
                                    </li>
                                    <li>
                                        <a href="#">Insurance Info</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER COMPANY LINKS */}
                        <div className="col-md-6 col-lg-2">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-xs">About Clinic</h5>
                                {/* Footer Links */}
                                <ul className="clearfix">
                                    <li>
                                        <a href="#">About Clinic</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Press &amp; Media</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Advertising</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER NEWSLETTER FORM */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-form mb-20">
                                {/* Title */}
                                <h5 className="h5-xs">Subscribe Us:</h5>
                                {/* Text */}
                                <p className="p-sm m-bottom-20">
                                    Stay up to date with our latest news,
                                    updates and our new products
                                </p>
                                {/* Newsletter Form Input */}
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            required
                                            id="s-email"
                                        />
                                        <span className="input-group-btn">
                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                <i className="far fa-envelope" />
                                            </button>
                                        </span>
                                    </div>
                                    {/* Newsletter Form Notification */}
                                    <label
                                        htmlFor="s-email"
                                        className="form-notification"
                                    />
                                </form>
                            </div>
                        </div>{" "}
                        {/* END FOOTER NEWSLETTER FORM */}
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
            {/* END FOOTER-2 */}
        </div>
    );
};

export default demo9;
