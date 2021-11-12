import React from "react";

const singlePost = () => {
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
                            <div className="breadcrumb-holder">
                                {/* Breadcrumb Nav */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="demo-1.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="blog-listing.html">
                                                Our Blog
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Blog Post
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    5 Benefits of ...
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* BLOG PAGE CONTENT
			============================================= */}
            <div
                id="single-blog-page"
                className="wide-100 blog-page-section division"
            >
                <div className="container">
                    <div className="row">
                        {/* SINGLE POST */}
                        <div className="col-lg-8">
                            <div className="single-blog-post pr-30">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-40">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/post-4-img.jpg"
                                        alt="blog-post-image"
                                    />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="sblog-post-txt">
                                    {/* Post Title */}
                                    <h4 className="h4-lg steelblue-color">
                                        5 Benefits Of Integrative Medicine
                                    </h4>
                                    {/* Post Data */}
                                    <span>
                                        Posted May 03, 2019 by{" "}
                                        <span>Dr.Jeremy Smith</span>
                                    </span>
                                    {/* Post Text */}
                                    <p className="mt-30">
                                        Aliqum mullam blandit tempor sapien
                                        gravida donec ipsum, at porta justo.
                                        Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis
                                        et magnis sapien etiam sapien sem
                                        sagittis congue tempor gravida donec
                                        enim ipsum porta justo integer at odio
                                        velna
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Sagittis congue augue egestas volutpat
                                        egestas magna suscipit egestas magna
                                        ipsum vitae purus efficitur ipsum primis
                                        in cubilia laoreet augue egestas luctus
                                        donec diam.
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Maecenas gravida porttitor nunc, quis
                                        vehicula magna luctus tempor. Quisque
                                        vel laoreet turpis urna augue, viverra a
                                        augue eget, dictum tempor diam. Sed
                                        pulvinar consectetur nibh, vel imperdiet
                                        dui varius viverra. Pellentesque ac
                                        massa lorem. Fusce eu cursus non nulla
                                        vitae massa placerat purus
                                    </p>
                                    {/* Small Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Vitae massa placerat vulputate
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Nullam non scelerisque lectus. In at
                                        mauris vel nisl convallis porta at vitae
                                        dui. Nam lacus ligula, vulputate
                                        molestie bibendum quis, aliquet
                                        elementum massa. Vestibulum ut sagittis
                                        odio
                                    </p>
                                    {/* Post Text */}
                                    <p>
                                        In at mauris vel nisl convallis porta at
                                        vitae dui. Nam lacus ligula, vulputate
                                        molestie bibendum quis, aliquet
                                        elementum massa. Vestibulum ut sagittis
                                        odio. Ac massa lorem. Fusce eu cursus
                                        est. Fusce non nulla vitae massa
                                        placerat vulputate vel a purus. Aliqum
                                        mullam blandit tempor sapien
                                    </p>
                                    {/* INNER IMAGE */}
                                    <div className="post-inner-img">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe
                                                width={950}
                                                height={450}
                                                src="https://www.youtube.com/embed/7e90gBu4pas"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                    {/* Small Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Semper lacus cursus porta, feugiat
                                        primis
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        Curabitur ac dapibus libero. Quisque eu
                                        tristique neque. Phasellus blandit
                                        tristique justo ut aliquam. Aliquam
                                        vitae molestie nunc. Quisque sapien
                                        justo, aliquet non molestie sed,
                                        venenatis nec purus. Aliquam eget
                                        lacinia elit. Vestibulum tincidunt
                                        tincidunt massa, et porttitor justo.
                                    </p>
                                    {/* Option #1 */}
                                    <div className="box-list">
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
                                            Magna luctus tempor augue vitae
                                            laoreet augue in cubilia risus
                                            auctor tempus dolor felis lacinia
                                            risus auctor id viverra dolor
                                        </p>
                                    </div>
                                    {/* Option #3 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            Ligula risus auctor tempus dolor
                                            feugiat, felis lacinia risus
                                            interdum auctor id viverra dolor
                                            iaculis luctus
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
                                    {/* Small Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Cubilia laoreet augue egestas luctus
                                    </h5>
                                    {/* Post Text */}
                                    <p>
                                        Curabitur ac dapibus libero. Quisque eu
                                        tristique neque. Phasellus blandit
                                        tristique justo ut aliquam. Aliquam
                                        vitae molestie nunc. Quisque sapien
                                        justo, aliquet non molestie sed,
                                        venenatis nec purus. Aliquam eget
                                        lacinia tincidunt tincidunt massa, et
                                        porttitor justo. Quisque vel laoreet
                                        turpis. Urna augue, viverra a augue
                                        eget, dictum tempor diam. Sed pulvinar
                                        consectetur nibh, vel imperdiet dui
                                        varius viverra. Pellentesque ac massa
                                        lorem. Fusce eu cursus est. Fusce non
                                        nulla vitae massa placerat bulum
                                        tincidunt tincidunt massa, et porttitor
                                        justo
                                    </p>
                                    {/* Post Text */}
                                    <p>
                                        Sagittis congue augue egestas volutpat
                                        egestas magna suscipit egestas magna
                                        ipsum vitae purus efficitur ipsum primis
                                        in cubilia laoreet augue egestas luctus
                                        donec diam. Curabitur ac dapibus libero.
                                        Quisque eu tristique neque. Phasellus
                                        blandit tristique justo ut aliquam.
                                        Aliquam vitae{" "}
                                        <a href="#">
                                            molestie nunc sapien justo
                                        </a>
                                        , aliquet non molestie sed, venenatis
                                        nec purus. Aliquam eget lacinia elit.
                                        Vestibulum tincidunt tincidunt massa, et
                                        porttitor justo.
                                    </p>
                                    {/* BLOG POST SHARE LINKS */}
                                    <div className="post-share-links">
                                        {/* POST TAGS */}
                                        <div className="post-tags-list">
                                            <span>
                                                <a href="#">
                                                    Effective Treatment
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#">Research</a>
                                            </span>
                                            <span>
                                                <a href="#">Diagnostic</a>
                                            </span>
                                        </div>
                                        {/* POST SHARE ICONS */}
                                        <div className="post-share-list">
                                            <ul className="share-social-icons clearfix">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="share-ico ico-like"
                                                    >
                                                        <i className="far fa-thumbs-up" />{" "}
                                                        Like
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="share-ico ico-facebook"
                                                    >
                                                        <i className="fab fa-facebook-f" />{" "}
                                                        Share
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="share-ico ico-twitter"
                                                    >
                                                        <i className="fab fa-twitter" />{" "}
                                                        Tweet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="share-ico ico-google-plus"
                                                    >
                                                        <i className="fab fa-pinterest-p" />{" "}
                                                        Pin It
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="share-ico ico-google-plus"
                                                    >
                                                        <i className="fab fa-google-plus-g" />{" "}
                                                        Share
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{" "}
                                    {/* END BLOG POST SHARE */}
                                </div>{" "}
                                {/* END BLOG POST TEXT */}
                                {/* ABOUT POST AUTHOR */}
                                <div className="author-senoff">
                                    {/* Avatar */}
                                    <img
                                        src="images/review-author-4.jpg"
                                        alt="author-avatar"
                                    />
                                    {/* Text */}
                                    <div className="author-senoff-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm steelblue-color">
                                            Published by Dr.Jeremy Smith
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur elit eiusmod tempor
                                            sapien incidide ut labore dolore.
                                            incididunt ut labore et dolore.
                                            Neque turpis vitae eros praesent
                                            varius. Egestas a congue augue
                                            egestas volutpat egestas magna
                                            suscipit egestas magna ipsum vitae
                                            urna
                                        </p>
                                    </div>
                                </div>{" "}
                                {/* END ABOUT POST AUTHOR */}
                                {/* RELATED POSTS */}
                                <div className="related-posts">
                                    {/* Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Related Posts
                                    </h5>
                                    <div className="row">
                                        {/* BLOG POST #1 */}
                                        <div className="col-md-6">
                                            <div className="blog-post">
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
                                                            Your Health Is In
                                                            Your Hands
                                                        </a>
                                                    </h5>
                                                    {/* Post Data */}
                                                    <span>
                                                        Apr 28, 2019 by{" "}
                                                        <span className="blue-color">
                                                            Dr.Jonathan Barnes
                                                        </span>
                                                    </span>
                                                    {/* Post Text */}
                                                    <p>
                                                        Quaerat neque purus
                                                        ipsum neque dolor primis
                                                        libero tempus impedit
                                                        tempor blandit sapien at
                                                        gravida donec ipsum, at
                                                        porta justo...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/* END  BLOG POST #1 */}
                                        {/* BLOG POST #2 */}
                                        <div className="col-md-6">
                                            <div className="blog-post">
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
                                                            How Weather Impacts
                                                            Your Health
                                                        </a>
                                                    </h5>
                                                    {/* Post Data */}
                                                    <span>
                                                        Apr 17, 2019 by{" "}
                                                        <span className="blue-color">
                                                            Dr.Megan Coleman
                                                        </span>
                                                    </span>
                                                    {/* Post Text */}
                                                    <p>
                                                        Quaerat neque purus
                                                        ipsum neque dolor primis
                                                        libero tempus impedit
                                                        tempor blandit sapien at
                                                        gravida donec ipsum, at
                                                        porta justo...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/* END  BLOG POST #2 */}
                                    </div>{" "}
                                    {/* End row */}
                                </div>{" "}
                                {/* END RELATED POSTS */}
                                {/* POST COMMENTS */}
                                <div className="single-post-comments">
                                    {/* Title */}
                                    <h5 className="h5-md steelblue-color">
                                        4 Comments
                                    </h5>
                                    {/* COMMENT #1 */}
                                    <div className="media mt-50">
                                        {/* Comment-1 Avatar */}
                                        <img
                                            className="mr-3"
                                            src="images/post-author-1.jpg"
                                            alt="comment-avatar"
                                        />
                                        <div className="media-body">
                                            {/* Comment-1 Meta */}
                                            <div className="comment-meta">
                                                <h5 className="h5-xs mt-0 steelblue-color">
                                                    Jeffrey
                                                </h5>
                                                <span className="comment-date">
                                                    April 20, 2019 at 7:14 PM -{" "}
                                                </span>
                                                <span className="btn-reply">
                                                    <a
                                                        href="#leave-comment"
                                                        className="internal-link"
                                                    >
                                                        <i className="fas fa-reply" />{" "}
                                                        Reply
                                                    </a>
                                                </span>
                                            </div>
                                            {/* Comment-1 Text */}
                                            <p>
                                                Etiam sapien sem magna at vitae
                                                pulvinar congue augue egestas
                                                pretium neque id viverra
                                                suscipit egestas magna porta
                                                ratione, mollis risus lectus
                                                porta rutrum arcu aenean primis
                                                in augue luctus neque purus
                                                ipsum neque dolor primis
                                                suscipit in magna dignissim,
                                                porttitor hendrerit diam. Nunc
                                                gravida ultrices felis
                                            </p>
                                            <hr />
                                            {/* COMMENT #2 */}
                                            <div className="media mt-3">
                                                {/* Comment-2 Avatar */}
                                                <a href="#" className="pr-3">
                                                    <img
                                                        src="images/post-author-2.jpg"
                                                        alt="comment-avatar"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    {/* Comment-2 Meta */}
                                                    <div className="comment-meta">
                                                        <h5 className="h5-xs mt-0 steelblue-color">
                                                            Jeremy
                                                        </h5>
                                                        <span className="comment-date">
                                                            April 20, 2019 at
                                                            11:35 PM -{" "}
                                                        </span>
                                                        <span className="btn-reply">
                                                            <a
                                                                href="#leave-comment"
                                                                className="internal-link"
                                                            >
                                                                <i className="fas fa-reply" />{" "}
                                                                Reply
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* Comment-2 Text */}
                                                    <p>
                                                        Etiam sapien sem magna
                                                        at vitae pulvinar congue
                                                        augue egestas pretium
                                                        neque id viverra
                                                        suscipit porta ratione,
                                                        mollis risus lectus
                                                        porta aliquet lorem
                                                        purus, quis mollis nisi
                                                        laoreet vitae
                                                    </p>
                                                </div>
                                            </div>{" "}
                                            {/* END COMMENT #2 */}
                                        </div>
                                    </div>{" "}
                                    {/* END COMMENT #1 */}
                                    <hr />
                                    {/* COMMENT #3 */}
                                    <div className="media mt-40">
                                        {/* Comment-4 Avatar */}
                                        <img
                                            className="mr-3"
                                            src="images/post-author-3.jpg"
                                            alt="comment-avatar"
                                        />
                                        <div className="media-body">
                                            {/* Comment-4 Meta */}
                                            <div className="comment-meta">
                                                <h5 className="h5-xs mt-0 steelblue-color">
                                                    Samantha
                                                </h5>
                                                <span className="comment-date">
                                                    April 29, 2018 at 5:41 PM -{" "}
                                                </span>
                                                <span className="btn-reply">
                                                    <a
                                                        href="#leave-comment"
                                                        className="internal-link"
                                                    >
                                                        <i className="fas fa-reply" />{" "}
                                                        Reply
                                                    </a>
                                                </span>
                                            </div>
                                            {/* Comment-4 Text */}
                                            <p>
                                                Porta ratione, mollis risus
                                                lectus porta rutrum arcu aenean
                                                primis in augue luctus neque
                                                purus ipsum neque dolor primis
                                                libero tempus, tempor posuere
                                                ligula varius impedit enim
                                                tempor vitae pulvinar congue
                                                augue egestas. Praesent aliquet
                                                lorem purus, quis mollis nisi
                                                laoreet vitae. Mauris nec
                                                consequat tortor. Duis fermentum
                                                a massa in convallis. Quisque eu
                                                ultrices enim, et interdum augue
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* END COMMENT #3 */}
                                    <hr />
                                    {/* COMMENT #4 */}
                                    <div className="media mt-40">
                                        {/* Comment-4 Avatar */}
                                        <img
                                            className="mr-3"
                                            src="images/post-author-4.jpg"
                                            alt="comment-avatar"
                                        />
                                        <div className="media-body">
                                            {/* Comment-4 Meta */}
                                            <div className="comment-meta">
                                                <h5 className="h5-xs mt-0 steelblue-color">
                                                    Robert Peterson
                                                </h5>
                                                <span className="comment-date">
                                                    June 11, 2018 at 11:19 AM -{" "}
                                                </span>
                                                <span className="btn-reply">
                                                    <a
                                                        href="#leave-comment"
                                                        className="internal-link"
                                                    >
                                                        <i className="fas fa-reply" />{" "}
                                                        Reply
                                                    </a>
                                                </span>
                                            </div>
                                            {/* Comment-4 Text */}
                                            <p>
                                                Etiam sapien sem magna at vitae
                                                pulvinar congue augue egestas
                                                pretium neque id viverra
                                                suscipit egestas magna porta
                                                ratione, mollis risus lectus
                                                porta rutrum arcu aenean primis
                                                in augue auctor integer congue
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* END COMMENT #4 */}
                                    <hr />
                                </div>{" "}
                                {/*END POST COMMENTS */}
                                {/* COMMENT FORM */}
                                <div id="leave-comment">
                                    {/* Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Leave a Comment
                                    </h5>
                                    {/* Text */}
                                    <p className="grey-color">
                                        Your email address will not be
                                        published. Required fields are marked *
                                    </p>
                                    <form
                                        name="commentForm"
                                        className="row comment-form"
                                    >
                                        <div
                                            id="input-message"
                                            className="col-md-12 input-message"
                                        >
                                            <p>Add Comment *</p>
                                            <textarea
                                                className="form-control message"
                                                name="message"
                                                rows={6}
                                                placeholder="Enter Your Comment Here* ..."
                                                required
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div
                                            id="input-name"
                                            className="col-md-12"
                                        >
                                            <p>Name*</p>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control name"
                                                placeholder="Enter Your Name*"
                                                required
                                            />
                                        </div>
                                        <div
                                            id="input-email"
                                            className="col-md-12"
                                        >
                                            <p>Email*</p>
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control email"
                                                placeholder="Enter Your Email*"
                                                required
                                            />
                                        </div>
                                        {/* Contact Form Button */}
                                        <div className="col-lg-12 mt-15 form-btn">
                                            <button
                                                type="submit"
                                                className="btn btn-blue blue-hover submit"
                                            >
                                                Post Comment
                                            </button>
                                        </div>
                                        {/* Contact Form Message */}
                                        <div className="col-md-12 comment-form-msg text-center">
                                            <div className="sending-msg">
                                                <span className="loading" />
                                            </div>
                                        </div>
                                    </form>
                                </div>{" "}
                                {/* END COMMENT FORM */}
                            </div>
                        </div>{" "}
                        {/* END SINGLE POST */}
                        {/* SIDEBAR */}
                        <aside id="sidebar" className="col-lg-4">
                            {/* SEARCH FIELD */}
                            <div
                                id="search-field"
                                className="sidebar-div mb-50"
                            >
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-field"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn" type="button">
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                            {/* BLOG CATEGORIES */}
                            <div className="blog-categories sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-sm steelblue-color">
                                    Categories
                                </h5>
                                <ul className="blog-category-list clearfix">
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-angle-double-right blue-color" />{" "}
                                            Elderly Care
                                        </a>{" "}
                                        <span>(5)</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-angle-double-right blue-color" />{" "}
                                            Lifestyle
                                        </a>{" "}
                                        <span>(13)</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-angle-double-right blue-color" />{" "}
                                            Medical
                                        </a>{" "}
                                        <span>(6)</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-angle-double-right blue-color" />{" "}
                                            Treatment{" "}
                                        </a>{" "}
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-angle-double-right blue-color" />{" "}
                                            Pharma
                                        </a>{" "}
                                        <span>(12)</span>
                                    </li>
                                </ul>
                            </div>
                            {/* POPULAR POSTS */}
                            <div className="popular-posts sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-sm steelblue-color">
                                    Popular Posts
                                </h5>
                                <ul className="popular-posts">
                                    {/* Popular post #1 */}
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
                                                Etiam sapien accumsan molestie
                                                ante empor ...
                                            </a>
                                            <p>43 Comments</p>
                                        </div>
                                    </li>
                                    {/* Popular post #2 */}
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
                                                Blandit tempor sapien ipsum,
                                                porta justo ...
                                            </a>
                                            <p>38 Comments</p>
                                        </div>
                                    </li>
                                    {/* Popular post #3 */}
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
                                                Cursus risus laoreet turpis
                                                auctor varius ...
                                            </a>
                                            <p>29 Comments</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* TAGS CLOUD */}
                            <div className="tags-cloud sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-sm steelblue-color">
                                    Tags Cloud
                                </h5>
                                <span className="badge">
                                    <a href="#">Effective Treatment</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Molecular Biology</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Diagnostic</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Pediatrics</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Lifestyle</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Pharma</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Medicine</a>
                                </span>
                                <span className="badge">
                                    <a href="#">Research</a>
                                </span>
                            </div>
                            {/* SIDEBAR TIMETABLE */}
                            <div className="sidebar-timetable sidebar-div mb-50">
                                {/* Title */}
                                <h5 className="h5-md mb-20 steelblue-color">
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
                            {/* END SIDEBAR TIMETABLE */}
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
            </div>{" "}
            {/* END BLOG PAGE CONTENT */}
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

export default singlePost;
