import React from "react";
import Footer5 from "../src/layout/Footer/Footer5";
import Header4 from "../src/layout/Header/Header4";

const demo8 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header4 />
            {/* END HEADER */}
            {/* HERO-8
			============================================= */}
            <section id="hero-8" className="hero-section division">
                {/* SLIDER */}
                <div className="slider blue-nav">
                    <ul className="slides">
                        {/* SLIDE #1 */}
                        <li id="slide-1">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-14.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="steelblue-color">
                                                    Sculpt your body
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    Discover Confidence
                                                </h2>
                                                {/* Text */}
                                                <p className="p-md">
                                                    Feugiat primis ligula risus
                                                    auctor egestas augue mauri
                                                    viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum
                                                    an auctor purus euismod
                                                    pretium purus dolor impedit
                                                    magna purus feugiat dolor
                                                    impedit magna
                                                </p>
                                                {/* Button */}
                                                <a
                                                    href="about-us.html"
                                                    className="btn btn-lime black-hover"
                                                >
                                                    More About Clinic
                                                </a>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End row */}
                                </div>{" "}
                                {/* End container */}
                            </div>{" "}
                            {/* End Image Caption */}
                        </li>{" "}
                        {/* END SLIDE #1 */}
                        {/* SLIDE #2 */}
                        <li id="slide-2">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-15.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center right-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7 offset-sm-3 offset-md-4 offset-lg-5">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="steelblue-color">
                                                    Reduce fat without surgery
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    Discover Your Beauty
                                                </h2>
                                                {/* CONTENT BOX #1 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Quaerat sodales sapien
                                                        undo euismod purus
                                                    </p>
                                                </div>
                                                {/* CONTENT BOX #2 */}
                                                <div className="box-list mb-15">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Nemo ipsam egestas
                                                        volute turpis dolores
                                                        quaerat sodales sapien
                                                        undo pretium purus at
                                                        feugiat dolor impedit
                                                    </p>
                                                </div>
                                                {/* Button */}
                                                <a
                                                    href="all-services.html"
                                                    className="btn btn-lime black-hover"
                                                >
                                                    Our Core Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End row */}
                                </div>{" "}
                                {/* End container */}
                            </div>{" "}
                            {/* End Image Caption */}
                        </li>{" "}
                        {/* END SLIDE #2 */}
                        {/* SLIDE #3 */}
                        <li id="slide-3">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-16.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="steelblue-color">
                                                    Enhance Intimacy
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    Boost your self esteem
                                                </h2>
                                                {/* CONTENT BOX #1 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Quaerat sodales sapien
                                                        undo euismod purus
                                                    </p>
                                                </div>
                                                {/* CONTENT BOX #2 */}
                                                <div className="box-list mb-15">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Nemo ipsam egestas
                                                        volute turpis dolores
                                                        quaerat sodales sapien
                                                        undo pretium purus at
                                                        feugiat dolor impedit
                                                    </p>
                                                </div>
                                                {/* Button */}
                                                <a
                                                    href="all-doctors.html"
                                                    className="btn btn-lime black-hover"
                                                >
                                                    Meet the Doctors
                                                </a>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* End row */}
                                </div>{" "}
                                {/* End container */}
                            </div>{" "}
                            {/* End Image Caption */}
                        </li>{" "}
                        {/* END SLIDE #3 */}
                    </ul>
                </div>{" "}
                {/* END SLIDER */}
            </section>{" "}
            {/* END HERO-8 */}
            {/* INFO-4
			============================================= */}
            <section id="info-4" className="wide-60 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* INFO IMAGE */}
                        <div className="col-lg-6">
                            <div
                                className="info-4-img mb-40 text-center wow fadeInUp"
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
                                className="txt-block mb-40 pc-30 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id lime-color">
                                    Welcome to MedService
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Clinic with Innovative Approach to Treatment
                                </h3>
                                {/* Text */}
                                <p>
                                    An enim nullam tempor sapien gravida donec
                                    pretium ipsum porta justo integer at odio
                                    velna vitae auctor integer congue magna
                                    purus pretium ligula rutrum luctus ultrice
                                    aliquam a augue suscipit
                                </p>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor tempus
                                    feugiat dolor lacinia cubilia curae integer
                                    congue leo metus, eu mollislorem primis in
                                    orci integer metus mollis faucibus. An enim
                                    nullam tempor sapien gravida donec pretium
                                    and ipsum porta justo integer at velna vitae
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
                {/* End container */}
            </section>{" "}
            {/* END INFO-4 */}
            {/* SERVICES-4
			============================================= */}
            <section
                id="services-4"
                className="bg-lightgrey wide-60 services-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section ID */}
                            <span className="section-id lime-color">
                                The Areas of Practice
                            </span>
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Cosmetic &amp; Reconstructive Procedures
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
                    <div className="row">
                        {/* SERVICE BOX #1 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="sbox-4 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/breast_procedure_700x800.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md lime-color">
                                        <a href="service-1.html">
                                            Breast Procedures
                                        </a>
                                    </h5>
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor at
                                        pretium feugiat dolor integer
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="sbox-4 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/body_procedure_700x800.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md lime-color">
                                        <a href="service-1.html">
                                            Body Procedures
                                        </a>
                                    </h5>
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor at
                                        pretium feugiat dolor integer
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="sbox-4 wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/face_procedure_700x800.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md lime-color">
                                        <a href="service-1.html">
                                            Face Procedures
                                        </a>
                                    </h5>
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor at
                                        pretium feugiat dolor integer
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE BOX #4 */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="sbox-4 wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                {/* Image */}
                                <img
                                    className="img-fluid"
                                    src="images/rec_procedure_700x800.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md lime-color">
                                        <a href="service-1.html">
                                            Reconstructive
                                        </a>
                                    </h5>
                                    <p>
                                        Porta semper lacus cursus, feugiat
                                        primis ultrice in ligula risus auctor at
                                        pretium feugiat dolor integer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END SERVICES-4 */}
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
                                <span className="section-id lime-color">
                                    Best Practices
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Restore Your Beauty with MedServices Clinic
                                </h3>
                                {/* Text */}
                                <p className="mb-30">
                                    An enim nullam tempor sapien gravida donec
                                    enim ipsum blandit porta justo integer odio
                                    velna vitae auctor integer congue magna at
                                    pretium purus pretium ligula rutrum itae
                                    laoreet augue posuere and curae integer
                                    congue leo metus mollis primis and mauris
                                </p>
                                {/* Options List */}
                                <div className="row">
                                    <div className="col-xl-6">
                                        {/* Option #1 */}
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon lime-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Nemo ipsam egestas volute and
                                                turpis dolores quaerat
                                            </p>
                                        </div>
                                        {/* Option #2 */}
                                        <div className="box-list">
                                            <div className="box-list-icon lime-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Magna luctus tempor
                                            </p>
                                        </div>
                                        {/* Option #3 */}
                                        <div className="box-list">
                                            <div className="box-list-icon lime-color">
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
                                            <div className="box-list-icon lime-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Magna luctus tempor blandit a
                                                vitae suscipit mollis
                                            </p>
                                        </div>
                                        {/* Option #5 */}
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon lime-color">
                                                <i className="fas fa-angle-double-right" />
                                            </div>
                                            <p className="p-sm">
                                                Nemo ipsam egestas volute turpis
                                                dolores quaerat
                                            </p>
                                        </div>
                                        {/* Option #6 */}
                                        <div className="box-list">
                                            <div className="box-list-icon lime-color">
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
                                    src="images/image-10.png"
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
            {/* INFO-5
			============================================= */}
            <section
                id="info-5"
                className="bg-scroll wide-100 info-section division"
            >
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-8 col-lg-7 col-xl-6 offset-md-4 offset-lg-5 offset-xl-6">
                            <div className="txt-block pc-30 white-color">
                                {/* Section ID */}
                                <span className="section-id id-color">
                                    Highest Quality Care
                                </span>
                                {/* Title */}
                                <h3 className="h3-md">
                                    Solutions to Complex Medical Problems
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
                        </div>{" "}
                        {/* END TEXT BLOCK */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END INFO-5 */}
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
                            {/* Section ID */}
                            <span className="section-id lime-color">
                                Our Medical Specialists
                            </span>
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
                                    <span className="lime-color">
                                        Plastic Surgery, Cosmetic Surgery
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
                                    <span className="lime-color">
                                        Plastic Surgery
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
                                    <span className="lime-color">
                                        Cosmetic Surgery
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
                                    <span className="lime-color">Nurse</span>
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
                                    className="btn btn-lime black-hover"
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
                            {/* Section ID */}
                            <span className="section-id lime-color">
                                Our Testimonials
                            </span>
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
                                    <div className="video-btn play-icon-lime">
                                        <div className="video-block-wrapper">
                                            <i className="fas fa-play" />
                                        </div>
                                    </div>
                                    {/* Preview */}
                                    <img
                                        className="img-fluid"
                                        src="images/video-3.png"
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
                                <span className="section-id lime-color">
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
            {/* BANNER-7
			============================================= */}
            <section
                id="banner-7"
                className="bg-fixed banner-section division"
                style={{ backgroundImage: "url(./images/bg-beauty.jpg)" }}
            >
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
                                    className="btn btn-lime tra-white-hover mt-20"
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
                            {/* Section ID */}
                            <span className="section-id lime-color">
                                From the Blog
                            </span>
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
                                        <span className="lime-color">
                                            Dr.Jeremy Smith
                                        </span>
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
                                        <span className="lime-color">
                                            Dr.Jonathan Barnes
                                        </span>
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
                                        <span className="lime-color">
                                            Dr.Megan Coleman
                                        </span>
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
                                    className="btn btn-lime black-hover"
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
            {/* FOOTER-3
			============================================= */}
            <Footer5 />
            {/* END FOOTER-3 */}
        </div>
    );
};

export default demo8;
