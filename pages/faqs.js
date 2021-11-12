import React from "react";

const faqs = () => {
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
                                            FAQs
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">FAQs</h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* FAQs PAGE
			============================================= */}
            <section id="faqs-page" className="wide-80 faqs-section division">
                <div className="container">
                    <div className="row">
                        {/* QUESTIONS HOLDER */}
                        <div className="col-lg-8">
                            <div className="questions-holder pr-30">
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Frequently Asked Questions
                                </h3>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor tempus
                                    feugiat dolor lacinia cubilia curae integer
                                    congue leo metus, primis in orci integer
                                    metus mollis faucibus enim. Nemo ipsam
                                    egestas volute turpis dolores ut aliquam
                                    quaerat sodales sapien undo pretium purus
                                    feugiat dolor impedit magna purus pretium
                                    gravida donec ligula massa gravida donec
                                    pretium
                                </p>
                                {/* QUESTIONS ACCORDION */}
                                <div id="accordion" role="tablist">
                                    {/* CATEGORY TITLE  */}
                                    <h5 className="h5-xl blue-color">
                                        1. General Questions
                                    </h5>
                                    {/* ACCORDION CARD #1 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingOne"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#collapseOne"
                                                    role="button"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Is porta semper MedService
                                                    primis?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Nullam rutrum eget nunc
                                                    varius etiam mollis risus
                                                    congue aliquam etiam sapien
                                                    egestas, congue gestas
                                                    posuere cubilia congue ipsum
                                                    mauris lectus laoreet gestas
                                                    neque vitae auctor eros
                                                    dolor luctus odio tempor
                                                    sapien gravida donec pretium
                                                    and ipsum porta
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #1 */}
                                    {/* ACCORDION CARD #2 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingTwo"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseTwo"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    How feugiat primis ultrice
                                                    in ligula?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Maecenas gravida porttitor
                                                    nunc, quis vehicula magna
                                                    luctus tempor. Quisque vel
                                                    laoreet turpis. Urna augue,
                                                    viverra a augue eget, dictum
                                                    tempor diam. Sed pulvinar
                                                    consectetur nibh, imperdiet
                                                    cubilia curae integer congue
                                                    leo metus, primis in orci
                                                    integer metus mollis
                                                    faucibus enim
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #2 */}
                                    {/* ACCORDION CARD #3 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingThree"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseThree"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Did donec pretium and
                                                    MedService porta?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Nullam rutrum eget nunc
                                                    varius etiam mollis risus
                                                    congue aliquam etiam sapien
                                                    egestas, congue gestas
                                                    posuere cubilia congue ipsum
                                                </p>
                                                {/* List */}
                                                <ul className="content-list">
                                                    <li>
                                                        <p>
                                                            Vitae auctor integer
                                                            congue magna at
                                                            pretium purus
                                                            pretium ligula
                                                            rutrum luctus risus
                                                            eros dolor auctor
                                                            cubilia curae
                                                            integer congue leo
                                                            metus, primis in
                                                            orci integer metus
                                                            mollis enim
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Sagittis congue
                                                            augue egestas
                                                            volutpat egestas
                                                            magna suscipit
                                                            egestas magna
                                                            cubilia curae
                                                            integer congue leo
                                                            metus, primis in
                                                            orci integer metus
                                                            mollis faucibus
                                                            enimipsum
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #3 */}
                                    {/* ACCORDION CARD #4 */}
                                    <div className="card no-border">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingFour"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseFour"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    What is metus mollis
                                                    faucibus?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Aliqum mullam blandit tempor
                                                    sapien gravida donec ipsum,
                                                    at porta justo. Velna vitae
                                                    auctor eros congue magna
                                                    nihil impedit ligula risus.
                                                    Mauris donec ociis et magnis
                                                    sapien etiam sapien sem
                                                    sagittis cubilia curae
                                                    integer congue leo metus,
                                                    primis in orci integer metus
                                                    mollis enim
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #4 */}
                                    {/* CATEGORY TITLE  */}
                                    <h5 className="h5-xl blue-color">
                                        2. Medical Treatment Questions
                                    </h5>
                                    {/* ACCORDION CARD #5 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingFive"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#collapseFive"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFive"
                                                >
                                                    How much congue magna nihil
                                                    impedit ligula risus?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseFive"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingFive"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Nullam non scelerisque
                                                    lectus. In at mauris vel
                                                    nisl convallis porta at
                                                    vitae dui. Nam lacus ligula,
                                                    vulputate molestie quis
                                                    aliquet cubilia curae
                                                    integer congue leo metus,
                                                    primis in orci integer metus
                                                    mollis faucibus enim
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #5 */}
                                    {/* ACCORDION CARD #6 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingSix"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseSix"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseSix"
                                                >
                                                    What I congue magna nihil
                                                    convallis porta?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseSix"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingSix"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Nullam non scelerisque
                                                    lectus. In at mauris vel
                                                    nisl convallis porta at
                                                    vitae dui. Nam lacus ligula,
                                                    vulputate molestie bibendum
                                                    quis, aliquet elementum
                                                    massa. Vestibulum ut
                                                    sagittis odio
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #6 */}
                                    {/* ACCORDION CARD #7 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingSeven"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseSeven"
                                                    role="button"
                                                    aria-expanded="true"
                                                    aria-controls="collapseSeven"
                                                >
                                                    Is there a aliquet elementum
                                                    massa?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseSeven"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingSeven"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Aliqum mullam blandit tempor
                                                    sapien gravida donec ipsum,
                                                    at porta justo. Velna vitae
                                                    auctor eros congue magna
                                                    nihil impedit ligula risus.
                                                    Mauris donec ociis et magnis
                                                    sapien etiam sapien sem
                                                    sagittis congue tempor
                                                    gravida donec enim ipsum
                                                    porta justo integer at odio
                                                    velna congue integer vitae
                                                    auctor eros dolor luctus
                                                    odio placerat massa magna
                                                </p>
                                                {/* Text */}
                                                <p>
                                                    Nullam rutrum eget nunc
                                                    varius etiam mollis risus
                                                    congue aliquam etiam sapien
                                                    egestas, congue gestas
                                                    posuere cubilia congue ipsum
                                                    mauris lectus laoreet gestas
                                                    neque vitae
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #7 */}
                                    {/* ACCORDION CARD #8 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingEight"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseEight"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseEight"
                                                >
                                                    Can I auctor eros dolor
                                                    luctus odio placerat massa
                                                    magna?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseEight"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingEight"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Maecenas gravida porttitor
                                                    nunc, quis vehicula magna
                                                    luctus tempor. Quisque vel
                                                    laoreet turpis. Urna augue,
                                                    viverra a augue eget, dictum
                                                    tempor diam. Sed pulvinar
                                                    consectetur nibh, vel
                                                    imperdiet dui varius
                                                    viverra. Pellentesque ac
                                                    massa lorem. Fusce eu cursus
                                                    est fusce non nulla
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #8 */}
                                    {/* ACCORDION CARD #9 */}
                                    <div className="card no-border">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingNine"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseNine"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseNine"
                                                >
                                                    Do you have vehicula magna
                                                    luctus tempor?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseNine"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingNine"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Nullam rutrum eget nunc
                                                    varius etiam mollis risus
                                                    congue aliquam etiam sapien
                                                    egestas, congue gestas
                                                    posuere cubilia congue ipsum
                                                    mauris lectus laoreet gestas
                                                    neque vitae auctor eros
                                                    dolor luctus odio placerat
                                                    magna cursus
                                                </p>
                                                {/* List */}
                                                <ul className="content-list">
                                                    <li>
                                                        <p>
                                                            Vitae auctor integer
                                                            congue magna at
                                                            pretium purus
                                                            pretium ligula
                                                            rutrum luctus risus
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Sagittis congue
                                                            augue egestas
                                                            volutpat egestas
                                                            magna suscipit
                                                            egestas magna ipsum
                                                            vitae purus
                                                            efficitur ipsum
                                                            primis in cubilia
                                                            laoreet augue
                                                            egestas luctus donec
                                                            diamTempor sapien
                                                            gravida donec enim
                                                            ipsum blandit magna
                                                            at purus pretium
                                                            ligula rutrum luctus
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Justo odio integer a
                                                            velna lectus aenean
                                                            magna and mauris
                                                            lectus pretium
                                                            ligula rutrum luctus
                                                            risus ac risus
                                                            auctor gravida donec
                                                            congue tempor
                                                            gravida donec enim
                                                            ipsum porta justo
                                                            integer
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #9 */}
                                    {/* CATEGORY TITLE  */}
                                    <h5 className="h5-xl blue-color">
                                        3. Emergency Help Questions
                                    </h5>
                                    {/* ACCORDION CARD #10 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingTen"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    data-toggle="collapse"
                                                    href="#collapseTen"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTen"
                                                >
                                                    I have tempor sapien
                                                    gravida?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseTen"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTen"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Aliqum mullam blandit tempor
                                                    sapien gravida donec ipsum,
                                                    at porta justo. Velna vitae
                                                    auctor eros congue magna
                                                    nihil impedit ligula risus.
                                                    Mauris donec ociis et magnis
                                                    sapien etiam sapien sem
                                                    sagittis congue tempor
                                                    gravida donec enim ipsum
                                                    porta justo integer at odio
                                                    velna congue integer vitae
                                                    auctor eros dolor luctus
                                                    odio placerat
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #10 */}
                                    {/* ACCORDION CARD #11 */}
                                    <div className="card">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingEleven"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseEleven"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseEleven"
                                                >
                                                    I want molestie bibendum
                                                    quis, aliquet?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseEleven"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingEleven"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Curabitur ac dapibus libero.
                                                    Quisque eu tristique neque.
                                                    Phasellus blandit tristique
                                                    justo ut aliquam. Aliquam
                                                    vitae molestie nunc. Quisque
                                                    sapien justo, aliquet non
                                                    molestie sed, venenatis nec
                                                    purus. Aliquam eget lacinia
                                                    elit. Vestibulum tincidunt
                                                    tincidunt massa, et
                                                    porttitor justo tincidunt
                                                    eu.
                                                </p>
                                                {/* Text */}
                                                <p>
                                                    Nullam non scelerisque
                                                    lectus. In at mauris vel
                                                    nisl convallis porta at
                                                    vitae dui. Nam lacus ligula,
                                                    vulputate molestie bibendum
                                                    quis, aliquet elementum
                                                    massa. Vestibulum ut
                                                    sagittis odio
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #11 */}
                                    {/* ACCORDION CARD #12 */}
                                    <div className="card no-border">
                                        {/* Card Title */}
                                        <div
                                            className="card-header"
                                            role="tab"
                                            id="headingTwelve"
                                        >
                                            <h5 className="h5-xs">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseTwelve"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwelve"
                                                >
                                                    Can I tincidunt tincidunt
                                                    massa, et porttitor?
                                                </a>
                                            </h5>
                                        </div>
                                        {/* Card Content */}
                                        <div
                                            id="collapseTwelve"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwelve"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                {/* Text */}
                                                <p>
                                                    Curabitur ac dapibus libero.
                                                    Quisque eu tristique neque.
                                                    Phasellus blandit tristique
                                                    justo ut aliquam. Aliquam
                                                    vitae molestie nunc. Quisque
                                                    sapien justo, aliquet non
                                                    molestie sed, venenatis nec
                                                    purus. Aliquam eget lacinia
                                                    elit. Vestibulum tincidunt
                                                    tincidunt massa, et
                                                    porttitor justo tincidunt
                                                    eu.
                                                </p>
                                                {/* Text */}
                                                <p>
                                                    Nullam non scelerisque
                                                    lectus. In at mauris vel
                                                    nisl convallis porta at
                                                    vitae dui. Nam lacus ligula,
                                                    vulputate molestie bibendum
                                                    quis, aliquet elementum
                                                    massa. Vestibulum ut
                                                    sagittis odio
                                                </p>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* END ACCORDION CARD #12 */}
                                </div>{" "}
                                {/* END QUESTIONS ACCORDION */}
                            </div>
                        </div>{" "}
                        {/*END QUESTIONS HOLDER */}
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
            </section>{" "}
            {/* END FAQs PAGE */}
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

export default faqs;
