import React from "react";
import Services7 from "../src/components/Common/Services-7";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const aboutUs = () => {
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
                                            About Us
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    About Us
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* INFO-4
			============================================= */}
            <section id="info-4" className="wide-100 info-section division">
                <div className="container">
                    {/* TOP ROW */}
                    <div className="top-row mb-80">
                        <div className="row d-flex align-items-center">
                            {/* INFO IMAGE */}
                            <div className="col-lg-6">
                                <div
                                    className="info-4-img text-center wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <img
                                        className="img-fluid"
                                        src="images/chief_doctor_700x800.jpg"
                                        alt="info-image"
                                    />
                                </div>
                            </div>
                            {/* INFO TEXT */}
                            <div className="col-lg-6">
                                <div
                                    className="txt-block pc-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Section ID */}
                                    <span className="section-id blue-color">
                                        Welcome to MedService
                                    </span>
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        Clinic with Innovative Approach to
                                        Treatment
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        An enim nullam tempor sapien gravida
                                        donec pretium ipsum porta justo integer
                                        at odio velna vitae auctor integer
                                        congue magna purus pretium ligula rutrum
                                        luctus ultrice aliquam a augue suscipit
                                    </p>
                                    {/* Text */}
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia
                                        curae integer congue leo metus, eu
                                        mollislorem primis in orci integer metus
                                        mollis faucibus. An enim nullam tempor
                                        sapien gravida donec pretium and ipsum
                                        porta justo integer at velna vitae
                                        auctor integer congue
                                    </p>
                                    {/* Singnature */}
                                    <div className="singnature mt-35">
                                        {/* Text */}
                                        <p className="p-small mb-15">
                                            Randon Pexon, Head of Clinic
                                        </p>
                                        {/* Singnature Image */}
                                        {/* Recommended sizes for Retina Ready displays is 400x68px; */}
                                        <img
                                            className="img-fluid"
                                            src="images/signature.png"
                                            width={200}
                                            height={34}
                                            alt="signature-image"
                                        />
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END TEXT BLOCK */}
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* END TOP ROW */}
                    {/* BOTTOM ROW */}
                    <div className="bottom-row">
                        <div className="row d-flex align-items-center">
                            {/* INFO TEXT */}
                            <div className="col-lg-6">
                                <div
                                    className="txt-block pc-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Section ID */}
                                    <span className="section-id blue-color">
                                        Highest Quality Care
                                    </span>
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">
                                        Complete Medical Solutions in One Place
                                    </h3>
                                    {/* Text */}
                                    <p className="mb-30">
                                        An enim nullam tempor sapien gravida
                                        donec enim ipsum blandit porta justo
                                        integer odio velna vitae auctor integer
                                        congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue posuere
                                        and curae integer congue leo metus
                                        mollis primis and mauris
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
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
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
                                                    An enim nullam tempor at
                                                    pretium purus blandit
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
                                                    Magna luctus tempor blandit
                                                    a vitae suscipit mollis
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p className="p-sm">
                                                    Nemo ipsam egestas volute
                                                    turpis dolores quaerat
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
                            {/* END INFO TEXT */}
                            {/* INFO IMAGE */}
                            <div className="col-lg-6">
                                <div
                                    className="info-4-img text-center wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <img
                                        className="img-fluid"
                                        src="images/emergency_help_700x800.jpg"
                                        alt="info-image"
                                    />
                                </div>
                            </div>
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* END BOTTOM ROW */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END INFO-4 */}
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
            {/* VIDEO-2
			============================================= */}
            <section id="video-2" className="wide-60 video-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
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
                        </div>{" "}
                        {/* END VIDEO LINK */}
                        {/* VIDEO TEXT */}
                        <div className="col-lg-6">
                            <div
                                className="txt-block pc-30 mb-40 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id blue-color">
                                    Modern Medicine
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Better Technologies for Better Healthcare
                                </h3>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list m-top-15">
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
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END VIDEO-2 */}
            {/* SERVICES-7
			============================================= */}
            <Services7 />
            {/* END SERVICES-7 */}
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

export default aboutUs;
