import React from "react";

const terms = () => {
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
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Terms &amp; Privacy
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Terms &amp; Privacy
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* TERMS & PRIVACY
			============================================= */}
            <section id="terms-page" className="wide-80 terms-section division">
                <div className="container">
                    <div className="row">
                        {/* TERMS CONTENT */}
                        <div className="col-lg-8">
                            <div className="terms-holder pr-30">
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Terms Title*/}
                                    <div className="terms-title">
                                        {/* Text */}
                                        <p className="grey-color">
                                            Last Updated: April 26, 2019
                                        </p>
                                        {/* Text */}
                                        <p className="p-notice steelblue-color">
                                            PLEASE READ THESE TERMS AND
                                            CONDITIONS (THE ‘AGREEMENT’) IN
                                            THEIR ENTIRETY BEFORE USING OR
                                            RECEIVING ANY FEATURES (AS DEFINED
                                            BELOW) FROM SHIFTKEY, INC. (THE
                                            ‘COMPANY’).
                                        </p>
                                        {/* Text */}
                                        <p>
                                            Praesent aliquet lorem purus, quis
                                            mollis nisi laoreet vitae. Mauris
                                            nec consequat tortor. Duis fermentum
                                            a massa in convallis. Quisque eu
                                            ultrices enim, et interdum augue.
                                        </p>
                                    </div>
                                    {/* List */}
                                    <ul className="terms-list">
                                        <li>
                                            Vivamus pretium tellus eget mi
                                            mattis, ut accumsan nunc vehicula.
                                            Donec mattis ex et aliquam aliquam.
                                            Maecenas at luctus augue. Donec nec
                                            leo ac libero pretium tincidunt
                                        </li>
                                        <li>
                                            Aenean quis purus auctor, rhoncus
                                            est non, dictum arcu maximus integer
                                            interdum eget
                                        </li>
                                        <li>
                                            Donec dolor magna, suscipit in magna
                                            dignissim, porttitor hendrerit
                                            gravida felis
                                        </li>
                                        <li>
                                            Aliquam varius neque commodo purus
                                            vulputate pharetra bibendum in ante
                                            id, ornare
                                        </li>
                                        <li>
                                            Morbi dui lectus, lobortis sit amet
                                            felis nec, suscipit imperdiet
                                            sapien. Proin semper ultrices ex, a
                                            sodales purus vehicula. Nunc gravida
                                            ultrices felis eget faucibus
                                            praesent aliquet
                                        </li>
                                    </ul>
                                    {/* Text */}
                                    <p className="p-notice steelblue-color">
                                        IF YOU DO NOT AGREE TO THE TERMS OF THIS
                                        AGREEMENT OR CANNOT MAKE ANY OF THE
                                        FOREGOING REPRESENTATIONS, YOU ARE NOT
                                        PERMITTED TO USE OR RECEIVE ANY SERVICES
                                        FROM THE COMPANY
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit diam. Nunc gravida
                                        ultrices felis eget faucibus. Praesent
                                        aliquet lorem purus, quis mollis nisi
                                        laoreet vitae. Mauris nec consequat
                                        tortor. Duis fermentum a massa in
                                        convallis. Quisque eu ultrices enim, et
                                        interdum augue.
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        1. Collection of Information
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus.Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit. Nunc gravida
                                        ultrices felis eget faucibus. Praesent
                                        aliquet lorem purus, quis mollis nisi
                                        laoreet vitae. Mauris nec consequat
                                        tortor
                                    </p>
                                    {/* List */}
                                    <ul className="terms-list">
                                        <li>
                                            Aenean quis purus auctor, rhoncus
                                            est non, dictum in maximus integer
                                            interdum maximus
                                        </li>
                                        <li>
                                            Donec dolor magna, suscipit in magna
                                            dignissim, porttitor hendrerit diam
                                            gravida ultrices
                                        </li>
                                        <li>
                                            Morbi dui lectus, lobortis sit amet
                                            felis nec, suscipit imperdiet
                                            sapien. Proin semper ultrices ex, a
                                            sodales purus vehicula gravida
                                            ultrices felis eget faucibus
                                            praesent aliquet
                                        </li>
                                        <li>
                                            Nulla tincidunt volutpat tincidunt
                                            habitant morbi tristique senectus et
                                            netus et malesa fames
                                        </li>
                                    </ul>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        2. How We Use Your Information
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Suscipit in magna dignissim, porttitor
                                        hendrerit diam. Nunc gravida ultrices
                                        felis eget faucibus. Praesent aliquet
                                        lorem purus, quis mollis nisi laoreet
                                        vitae.{" "}
                                        <a href="#">
                                            Mauris nec consequat tortor.
                                        </a>{" "}
                                        Duis fermentum a massa in convallis
                                        quisque eu interdum augue.
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Feugiat eros, ac tincidunt ligula massa
                                        in faucibus orci luctus et ultrices
                                        posuere cubilia curae. An nullam tempor
                                        sapien, eget gravida donec enim ipsum
                                        porta justo integer at odio velna
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        3. Sharing Your Information
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit diam gravida
                                        ultrices felis
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        4. Managment of Personal Data
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit diam. Nunc gravida
                                        ultrices felis sodales, nibh vel
                                        tristique aliquet, nisi libero suscipit
                                        diam, sed tempus ante nulla ut purus.
                                        Donec dolor magna, suscipit in magna
                                        dignissim, porttitor hendrerit diam.
                                        Nunc gravida ultrices felis eget
                                        faucibus. Praesent aliquet lorem purus,
                                        quis mollis nisi laoreet vitae mauris
                                        nec consequat
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        5. Right to Access, Correct and Delete
                                        Personal Data
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            5.1 General Availability
                                        </span>{" "}
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor
                                    </p>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            5.2 Restrictions and Suspensions
                                        </span>{" "}
                                        Suscipit in magna dignissim, porttitor
                                        hendrerit diam. Nunc gravida ultrices
                                        felis eget faucibus. Praesent aliquet
                                        lorem purus, quis mollis nisi laoreet
                                        vitae. Duis fermentum a massa in
                                        convallis quisque eu interdum augue.
                                    </p>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            5.3 Scheduling
                                        </span>{" "}
                                        Morbi nulla lorem, vulputate et justo
                                        sed, tristique luctus purus. Etiam vitae
                                        interdum felis, at laoreet massa. Proin
                                        malesuada tellus vel dui laoreet
                                        facilisis. Nullam ac leo semper, gravida
                                        nisi quis, blandit ligula. Aenean
                                        venenatis, velit sit amet malesuada
                                    </p>
                                </div>
                                {/* TERMS BOX #8 */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        6. Warranty Limitations
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Ut non mauris libero. Sed consequat
                                        posuere nunc, eu porttitor neque
                                        dignissim nec. Donec bibendum sodales
                                        elit eu blandit. Suspendisse at finibus
                                        metus. Integer nulla quam, pulvinar
                                        fermentum commodo nec, pulvinar sed
                                        nisi. Sed augue turpis, mollis
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Sed eu quis leo ultrices aliquet.
                                        Curabitur mauris orci, imperdiet eu dui
                                        quis, ulvinar feugiat orci. Curabitur at
                                        ex quis ipsum volutpat vehicula id in
                                        ante. Proin in tortor nec risus interdum
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        7. Notices
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit diam
                                    </p>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            7.1 Nunc gravida ultrices felis
                                        </span>{" "}
                                        Donec sodales, nibh vel tristique
                                        aliquet, nisi libero suscipit diam, sed
                                        tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim,
                                        porttitor hendrerit diam. Nunc gravida
                                        ultrices felis
                                    </p>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            7.2 Aenean venenatis, velit sit amet
                                        </span>{" "}
                                        Suscipit in magna dignissim, porttitor
                                        hendrerit diam.Nunc gravida ultrices
                                        felis eget faucibus. Praesent aliquet
                                        lorem purus, quis mollis nisi laoreet
                                        vitae. Duis fermentum a massa in
                                        convallis quisque eu interdum augue.
                                    </p>
                                    {/* Text */}
                                    <p>
                                        <span className="steelblue-color">
                                            7.3 Scheduling
                                        </span>{" "}
                                        Morbi nulla lorem, vulputate et justo
                                        sed, tristique luctus purus. Etiam vitae
                                        interdum felis, at laoreet massa. Proin
                                        malesuada tellus vel dui laoreet
                                        facilisis. Nullam ac leo semper, gravida
                                        nisi quis, blandit ligula. Aenean
                                        venenatis, velit sit amet malesuada
                                    </p>
                                </div>
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-xl steelblue-color">
                                        8. Claims Of Copyright Infringement
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Mauris ut mi turpis. In laoreet dapibus
                                        metus et ornare. Vestibulum ante ipsum
                                        primis in faucibus orci luctus et
                                        ultrices posuere cubilia Curae; Sed
                                        semper tempor nunc, ut porttitor erat.
                                        Quisque facilisis rhoncus odio.
                                        Pellentesque rutrum congue nulla, vel
                                        vulputate eros maximus id. Praesent
                                        lacus elit, ullamcorper ut lacus eu,
                                        eleifend suscipit est. Nullam
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/*END TERMS CONTENT */}
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
                            {/* IMAGE WIDGET */}
                            <div className="image-widget sidebar-div">
                                <a href="#">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/image-widget.jpg"
                                        alt="image-widget"
                                    />
                                </a>
                            </div>
                        </aside>{" "}
                        {/* END SIDEBAR */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END TERMS & PRIVACY */}
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

export default terms;
