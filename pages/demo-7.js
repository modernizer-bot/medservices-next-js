import React from "react";
import Footer5 from "../src/layout/Footer/Footer5";
import Header5 from "../src/layout/Header/Header5";

const demo7 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header5 /> {/* END HEADER */}
            {/* HERO-7
			============================================= */}
            <section id="hero-7" className="hero-section division">
                {/* SLIDER */}
                <div className="slider blue-nav">
                    <ul className="slides">
                        {/* SLIDE #1 */}
                        <li id="slide-1">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-7.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Welcome to MedService
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    Healthy smile you deserve
                                                </h2>
                                                {/* CONTENT BOX #1 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Fringilla risus nec,
                                                        luctus mauris auctor
                                                        purus sapien euismod
                                                        pretium purus at pretium
                                                        ligula rutrum euismod
                                                    </p>
                                                </div>
                                                {/* CONTENT BOX #3 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Nemo ipsam egestas
                                                        volute turpis dolores
                                                        luctus aliquam and
                                                        quaerat sodales at
                                                        sapien undo pretium
                                                        purus feugiat
                                                    </p>
                                                </div>
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
                                src="images/slider/slide-8.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Friendly, caring dental
                                                    services
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    High-class professionals
                                                </h2>
                                                {/* Text */}
                                                <p className="p-md">
                                                    Feugiat primis ligula risus
                                                    auctor egestas augue mauri
                                                    viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum
                                                    in viverra tortor and
                                                    gravida purus and pretium at
                                                    lorem primis in orci integer
                                                </p>
                                                {/* Button */}
                                                <a
                                                    href="all-doctors.html"
                                                    className="btn btn-blue blue-hover"
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
                        {/* END SLIDE #2 */}
                        {/* SLIDE #3 */}
                        <li id="slide-3">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-9.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h5 className="blue-color">
                                                    Straighter Teeth...Healthier
                                                    Smile!
                                                </h5>
                                                <h2 className="steelblue-color">
                                                    We create radiant smiles
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
                                                        sapien at ligula
                                                    </p>
                                                </div>
                                                {/* Option Box #2 */}
                                                <div className="box-list mb-15">
                                                    <div className="box-list-icon blue-color">
                                                        <i className="fas fa-angle-double-right" />
                                                    </div>
                                                    <p className="p-md">
                                                        Feugiat primis ultrice
                                                        in ligula risus auctor
                                                        tempus feugiat impedit
                                                        dolores ut aliquam
                                                        quaerat sodales
                                                    </p>
                                                </div>
                                                {/* Button */}
                                                <a
                                                    href="who-we-are.html"
                                                    className="btn btn-blue blue-hover"
                                                >
                                                    Discover More
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
            {/* END HERO-7 */}
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
                                    src="images/kids_dentistry_800x600.jpg"
                                    alt="about-image"
                                />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        <a href="all-services.html">
                                            Highest Quality Care
                                        </a>
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
                                    src="images/dental_emergency_800x600.jpg"
                                    alt="about-image"
                                />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        <a href="all-services.html">
                                            Dental Emergency
                                        </a>
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
            {/* ABOUT-5
			============================================= */}
            <section
                id="about-5"
                className="bg-lightgrey pt-100 about-section division"
            >
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6">
                            <div
                                className="about-img text-center wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/image-08.png"
                                    alt="about-image"
                                />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
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
                                    Complete Dental Solutions in One Place
                                </h3>
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
            {/* END ABOUT-5 */}
            {/* SERVICES-4
			============================================= */}
            <section
                id="services-4"
                className="wide-60 services-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Dentistry is Our Profession
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
                                    src="images/general_dentistry_800x600.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md steelblue-color">
                                        <a href="single-service.html">
                                            General Dentistry
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
                                    src="images/kids_dentistry_800x600.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md steelblue-color">
                                        <a href="single-service.html">
                                            Children's Dentistry
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
                                    src="images/cosmetic_dentistry_800x600.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md steelblue-color">
                                        <a href="single-service.html">
                                            Cosmetic Services
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
                                    src="images/dental_emergency_800x600.jpg"
                                    alt="content-image"
                                />
                                {/* Text */}
                                <div className="sbox-4-txt">
                                    <h5 className="h5-md steelblue-color">
                                        <a href="single-service.html">
                                            Dental Emergency
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
            {/* SERVICES-6
			============================================= */}
            <section
                id="services-6"
                className="bg-blue wide-40 servicess-section division"
            >
                <div className="container white-color">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md">Our Core Dental Services</h3>
                            {/* Text */}
                            <p>
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero at tempus,
                                blandit posuere ligula varius congue cursus
                                porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div className="col-md-6 col-lg-4">
                            {/* SERVICE BOX #1 */}
                            <div
                                className="sbox-6 pr-30 text-right wow fadeInRight"
                                data-wow-delay="0.4s"
                            >
                                {/* Text */}
                                <h5 className="h5-md">General Dentistry</h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum neque dolor primis libero tempus
                                </p>
                            </div>
                            {/* SERVICE BOX #2 */}
                            <div
                                className="sbox-6 pr-30 mr-30 text-right wow fadeInRight"
                                data-wow-delay="0.6s"
                            >
                                {/* Text */}
                                <h5 className="h5-sm">Dental Checkups</h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum a dolor primis tempus
                                </p>
                            </div>
                            {/* SERVICE BOX #2 */}
                            <div
                                className="sbox-6 pr-30 text-right wow fadeInRight"
                                data-wow-delay="0.8s"
                            >
                                {/* Text */}
                                <h5 className="h5-md">
                                    Cosmetic Dental Services
                                </h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum neque dolor primis libero tempus
                                </p>
                            </div>
                        </div>
                        {/* SERVICE IMAGE */}
                        <div className="col-lg-4 s6-img">
                            <div
                                className="sbox-6-img mb-40 text-center wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/tooth.png"
                                    alt="services-image"
                                />
                            </div>
                        </div>
                        {/* RIGHT SIDE CONTENT */}
                        <div className="col-md-6 col-lg-4">
                            {/* SERVICE BOX #4 */}
                            <div
                                className="sbox-6 pl-30 wow fadeInLeft"
                                data-wow-delay="0.4s"
                            >
                                {/* Text */}
                                <h5 className="h5-md">Gum Therapy</h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum neque dolor primis libero tempus
                                </p>
                            </div>
                            {/* SERVICE BOX #5 */}
                            <div
                                className="sbox-6 pl-30 ml-30 wow fadeInLeft"
                                data-wow-delay="0.6s"
                            >
                                {/* Text */}
                                <h5 className="h5-md">Wisdom Teeth Removal</h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum a dolor primis tempus
                                </p>
                            </div>
                            {/* SERVICE BOX #6 */}
                            <div
                                className="sbox-6 pl-30 wow fadeInLeft"
                                data-wow-delay="0.8s"
                            >
                                {/* Text */}
                                <h5 className="h5-md">Dental Implants</h5>
                                <p>
                                    Semper a augue suscipit, luctus neque purus
                                    ipsum neque dolor primis libero tempus
                                </p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END SERVICES-6 */}
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
                                    Best Practices
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Clinic with Innovative Approach to Treatment
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
                                    src="images/image-12.png"
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
            {/* GALLERY-1
			============================================= */}
            <div id="gallery-1" className="gallery-section division">
                {/* SECTION TITLE */}
                <div className="container">
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
                </div>
                {/* GALLERY IMAGES */}
                <div className="row gallery-items-list">
                    {/* IMAGE #1 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-1.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-1.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #2 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-2.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-2.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #3 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-3.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-3.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #4 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-4.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-4.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #5 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-5.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-5.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #6 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-6.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-6.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #7 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-7.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-7.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE #8 */}
                    <div className="col-md-6 col-lg-3 gallery-item">
                        <div className="hover-overlay">
                            {/* Gallery Image */}
                            <img
                                className="img-fluid"
                                src="images/gallery/image-8.jpg"
                                alt="gallery-image"
                            />
                            <div className="item-overlay" />
                            {/* Image Zoom */}
                            <div className="image-zoom">
                                <a
                                    className="image-link"
                                    href="images/gallery/image-8.jpg"
                                    title
                                >
                                    <i className="fas fa-search-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* END GALLERY IMAGES */}
            </div>{" "}
            {/* END GALLERY-1 */}
            {/* SERVICES-2
			============================================= */}
            <section
                id="services-2"
                className="wide-70 services-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                We Create the Healthy Smiles
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
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/braces.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Tooth Braces
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/implant.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Dental Implants
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/broken.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Paradontosis
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #4 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/calculus.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Dental Calculus
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #5 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/equipment.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Teeth Whitening
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #6 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/clean.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Teeth Cleaning
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #7 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/anesthetic.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Modern Anesthetic
                                    </h5>
                                </a>
                            </div>
                        </div>
                        {/* SERVICE BOX #8 */}
                        <div className="col-sm-6 col-lg-3">
                            <div
                                className="sbox-2 wow fadeInUp"
                                data-wow-delay="1s"
                            >
                                <a href="department-single.html">
                                    {/* Icon  */}
                                    <div className="sbox-2-icon">
                                        <img
                                            className="img-80"
                                            src="images/icons/caries.png"
                                            alt="service-icon"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title">
                                        Emergency Help
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END SERVICES-2 */}
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
                                        src="images/video-2.png"
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
                                    Highest Quality Care
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Solutions to Complex Medical Problems
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
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END DOCTORS-1 */}
            {/* BANNER-2
			============================================= */}
            <section id="banner-2" className="pt-80 banner-section division">
                <div className="bg-scroll bg-inner bg-image division">
                    <div className="container white-color">
                        <div className="row d-flex align-items-center">
                            {/* CALL TO ACTION IMAGE */}
                            <div className="col-lg-5">
                                <div className="banner-2-img">
                                    <img
                                        className="img-fluid"
                                        src="images/image-05.png"
                                        alt="banner-image"
                                    />
                                </div>
                            </div>
                            {/* BANNER TEXT */}
                            <div className="col-lg-6 offset-lg-1">
                                <div
                                    className="banner-txt pc-30 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Section ID */}
                                    <span className="section-id id-color">
                                        Modern Medicine
                                    </span>
                                    {/* Title  */}
                                    <h3 className="h3-lg">
                                        Better Technologies for Better
                                        Healthcare
                                    </h3>
                                    {/* Text */}
                                    <p>
                                        Egestas magna egestas magna ipsum vitae
                                        purus ipsum primis in cubilia laoreet
                                        augue egestas suscipit lectus mauris
                                        lectus laoreet gestas neque undo luctus
                                        feugiat. Aliquam a augue suscipit
                                    </p>
                                    {/* Button */}
                                    <a
                                        href="all-doctors.html"
                                        className="btn btn-tra-white blue-hover"
                                    >
                                        View Our Doctors
                                    </a>
                                </div>
                            </div>{" "}
                            {/* END BANNER TEXT */}
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* End container */}
                </div>{" "}
                {/* End Inner Background */}
            </section>{" "}
            {/* END BANNER-2 */}
            {/* PRICING-1
			============================================= */}
            <section
                id="pricing-1"
                className="bg-lightgrey wide-60 pricing-section division"
            >
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-md steelblue-color">
                                Best Quality Medical Treatment
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
                    {/* PRICING TABLES */}
                    <div className="row pricing-row">
                        {/* PRICING TABLE #1 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-072-hospital-5 blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">General Dentistry</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        34
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-tra-black blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>{" "}
                        {/* END PRICING TABLE #1 */}
                        {/* PRICING TABLE #2 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-143-teeth blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Cosmetic Services</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        49
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-blue blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>{" "}
                        {/* END PRICING TABLE #1 */}
                        {/* PRICING TABLE #3 */}
                        <div className="col-lg-4">
                            <div className="pricing-table icon-xl">
                                {/* Icon */}
                                <span className="flaticon-109-injection blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Dental Emergency</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        85
                                    </span>
                                    <p className="p-md">monthly</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Medical Specialties</li>
                                    <li>Medical Consultation</li>
                                    <li>Investigations</li>
                                    <li>Medical Treatments</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <a
                                    href="#"
                                    className="btn btn-md btn-tra-black blue-hover"
                                >
                                    Select Plan
                                </a>
                            </div>
                        </div>{" "}
                        {/* END PRICING TABLE #3 */}
                    </div>{" "}
                    {/* END PRICING TABLES */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END PRICING-1 */}
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
            {/* FOOTER-3
			============================================= */}
            <Footer5 />
            {/* END FOOTER-3 */}
        </div>
    );
};

export default demo7;
