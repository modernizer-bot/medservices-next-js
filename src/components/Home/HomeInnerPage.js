import Link from "next/link";
import React from "react";

const HomeInnerPage = () => {
    return (
        <section id="i-pages" className="bg-fixed inner-pages division">
            <div className="container-fluid">
                <div className="st-content">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title text-center">
                            <span className="section-id id-color">
                                We even give you more
                            </span>
                            <h2>21 Additional Inner Pages</h2>
                            <p>
                                All inner pages was carefully crafted to suit
                                your needs. Showcase your Medical Clinics,
                                Hospitals etc. with flexible and pre-made
                                concepts
                            </p>
                        </div>
                    </div>
                    {/* INNER PAGES */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme ipages-holder">
                                {/* ABOUT */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/about.jpg"
                                            alt="about-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/about-us"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>About Us Page</h4>
                                </div>
                                {/* WHO WE ARE */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/who-we-are.jpg"
                                            alt="who-we-are-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/who-we-are"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Who We Are</h4>
                                </div>
                                {/* ALL SERVICES */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/services.jpg"
                                            alt="services-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/all-services"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>All Services Page</h4>
                                </div>
                                {/* SERVICE #1 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/service-1.jpg"
                                            alt="service-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/service-1"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Service Single <span>#1</span>
                                    </h4>
                                </div>
                                {/* SERVICE #2 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/service-2.jpg"
                                            alt="service-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/service-2"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Service Single <span>#2</span>
                                    </h4>
                                </div>
                                {/* ALL DEPARTMENTS */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/departments.jpg"
                                            alt="departments-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/all-departments"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>All Departments Page</h4>
                                </div>
                                {/* DEPARTMENT SINGLE */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/department-single.jpg"
                                            alt="department-single-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/department-single"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Department Single</h4>
                                </div>
                                {/* ALL DOCTORS */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/doctors.jpg"
                                            alt="doctors-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/all-doctors"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>All Doctors Page</h4>
                                </div>
                                {/* DOCTOR #1 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/doctor-1.jpg"
                                            alt="doctor-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/doctor-1"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Doctor Details <span>#1</span>
                                    </h4>
                                </div>
                                {/* DOCTOR #2 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/doctor-2.jpg"
                                            alt="doctor-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/doctor-2"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Doctor Details <span>#2</span>
                                    </h4>
                                </div>
                                {/* PRICING #1 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/pricing-1.jpg"
                                            alt="pricing-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/pricing-1"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Pricing Page <span>#1</span>
                                    </h4>
                                </div>
                                {/* PRICING #2 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/pricing-2.jpg"
                                            alt="pricing-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/pricing-2"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Pricing Page <span>#2</span>
                                    </h4>
                                </div>
                                {/* TIMETABLE */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/timetable.jpg"
                                            alt="timetable-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/timetable"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Timetable Page</h4>
                                </div>
                                {/* APPOINTMENT */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/appointment.jpg"
                                            alt="about-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/appointment"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Make an Appointment</h4>
                                </div>
                                {/* BLOG LISTING */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/blog-listing.jpg"
                                            alt="blog-listing-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/blog-listing"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Blog Listing Page</h4>
                                </div>
                                {/* SINGLE POST */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/single-post.jpg"
                                            alt="single-post-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/single-post"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Single Post Page</h4>
                                </div>
                                {/* GALLERY */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/gallery.jpg"
                                            alt="gallery-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/gallery"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Gallery Page</h4>
                                </div>
                                {/* FAQs */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/faqs.jpg"
                                            alt="faqs-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/faqs"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>FAQs Page</h4>
                                </div>
                                {/* TERMS & PRIVACY */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/terms.jpg"
                                            alt="terms-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/terms"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Terms Page</h4>
                                </div>
                                {/* CONTACTS #1 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/contacts-1.jpg"
                                            alt="contacts-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/contacts-1"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Contacts Page <span>#1</span>
                                    </h4>
                                </div>
                                {/* CONTACTS #2 */}
                                <div className="select_link ip-box">
                                    <div className="hover-overlay">
                                        <img
                                            className="img-fluid"
                                            src="images/contacts-2.jpg"
                                            alt="contacts-preview"
                                        />
                                        <div className="item-overlay">
                                            <div className="overlay-content">
                                                <Link href="#">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="btn"
                                                        href="/contacts-2"
                                                        target="_blank"
                                                    >
                                                        Launch Demo
                                                    </a>{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>
                                        Contacts Page <span>#2</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END INNER PAGES */}
                </div>
            </div>
        </section>
    );
};

export default HomeInnerPage;
