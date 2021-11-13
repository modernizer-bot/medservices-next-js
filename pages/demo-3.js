import React from "react";
import Info2 from "../src/components/Common/Info-2";
import Services3 from "../src/components/Common/Services-3";
import Footer4 from "../src/layout/Footer/Footer4";
import Header2 from "../src/layout/Header/Header2";

const demo3 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header2 />
            {/* END HEADER */}
            {/* HERO-3
			============================================= */}
            <section id="hero-3" className="hero-section division">
                {/* SLIDER */}
                <div className="slider blue-nav">
                    <ul className="slides">
                        {/* SLIDE #1 */}
                        <li id="slide-1">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-11.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-7 col-lg-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h2 className="steelblue-color">
                                                    With a Touch of{" "}
                                                    <span>Kindness</span>
                                                </h2>
                                                {/* Text */}
                                                <p className="p-md">
                                                    Feugiat primis ligula risus
                                                    auctor egestas augue mauri
                                                    viverra tortor in iaculis
                                                    and placerat purus feugiat
                                                    primis ultrice in ligula
                                                    impedit magna purus at
                                                    pretium
                                                </p>
                                                {/* Button */}
                                                <a
                                                    href="about-us.html"
                                                    className="btn btn-md btn-blue blue-hover"
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
                                src="images/slider/slide-12.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center right-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-7 col-lg-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h2 className="steelblue-color">
                                                    <span>Child Care</span>{" "}
                                                    Treatments
                                                </h2>
                                                {/* CONTENT BOX #1 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Fringilla risus nec,
                                                        luctus mauris orci
                                                        auctor purus euismod
                                                        pretium purus at pretium
                                                        ligula rutrum
                                                    </p>
                                                </div>
                                                {/* CONTENT BOX #2 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon">
                                                        <i className="fas fa-genderless" />
                                                    </div>
                                                    <p className="p-md">
                                                        Quaerat sodales sapien
                                                        undo euismod risus
                                                        auctor egestas augue
                                                        mauri viverra tortor
                                                        sapien
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
                        {/* END SLIDE #2 */}
                        {/* SLIDE #3 */}
                        <li id="slide-3">
                            {/* Background Image */}
                            <img
                                src="images/slider/slide-13.jpg"
                                alt="slide-background"
                            />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center left-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-7 col-lg-6">
                                            <div className="caption-txt">
                                                {/* Title */}
                                                <h2 className="steelblue-color">
                                                    <span>Newborn</span> Care
                                                    Services
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
                                                        tempus impedit
                                                    </p>
                                                </div>
                                                {/* Option Box #3 */}
                                                <div className="box-list">
                                                    <div className="box-list-icon blue-color">
                                                        <i className="fas fa-angle-double-right" />
                                                    </div>
                                                    <p className="p-md">
                                                        Luctus mauris orci
                                                        auctor purus euismod
                                                        pretium purus dolor
                                                        impedit magna purus at
                                                        pretium donec
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
                        {/* END SLIDE #3 */}
                    </ul>
                </div>{" "}
                {/* END SLIDER */}
            </section>{" "}
            {/* END HERO-3 */}
            {/* ABOUT-3
			============================================= */}
            <section id="about-3" className="about-section division">
                <div className="container">
                    <div className="abox-3-holder">
                        <div className="row d-flex align-items-center">
                            {/* ABOUT BOX #1 */}
                            <div className="col-lg-4">
                                <div
                                    className="abox-3 b-right wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Small Title */}
                                    <p className="blue-color">
                                        Qualified Doctors
                                    </p>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Where People Come First
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        An magnis nulla dolor at sapien augue
                                        erat iaculis purus tempor magna ipsum
                                        vitae a purus primis ipsum magna ipsum
                                    </p>
                                </div>
                            </div>
                            {/* ABOUT BOX #3 */}
                            <div className="col-lg-4">
                                <div
                                    className="abox-3 b-right wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    {/* Small Title */}
                                    <p className="blue-color">
                                        24 Hour Service
                                    </p>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Highest Quality Care
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        An magnis nulla dolor at sapien augue
                                        erat iaculis purus tempor magna ipsum
                                        vitae a purus primis ipsum magna ipsum
                                    </p>
                                </div>
                            </div>
                            {/* ABOUT BOX #3 */}
                            <div className="col-lg-4">
                                <div
                                    className="abox-3 wow fadeInUp"
                                    data-wow-delay="0.8s"
                                >
                                    {/* Small Title */}
                                    <p className="blue-color">Here For You</p>
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        Emergency Department
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        An magnis nulla dolor at sapien augue
                                        erat iaculis purus tempor magna ipsum
                                        vitae a purus primis ipsum magna ipsum
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* End container */}
                </div>
            </section>{" "}
            {/* END ABOUT-3 */}
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
                                    src="images/pediatrics_700x800.jpg"
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
                                <span className="section-id blue-color">
                                    Welcome to MedService
                                </span>
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Complete Medical Solutions in One Place
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
            {/* INFO-2
			============================================= */}
            <Info2 />
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
            {/* SERVICES-3
			============================================= */}
            <Services3 />
            {/* END SERVICES-3 */}
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
                                    src="images/emergency_help_800x600.jpg"
                                    alt="about-image"
                                />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    {/* Title */}
                                    <h5 className="h5-xs steelblue-color">
                                        <a href="all-services.html">
                                            Emergency Department
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
                                            <td>-</td>
                                            <td className="text-right">
                                                9:00 AM - 6:30 PM
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>-</td>
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
            {/* BANNER-2
			============================================= */}
            <section id="banner-2" className="pt-50 banner-section division">
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
            {/* BANNER-3
			============================================= */}
            <section id="banner-3" className="pt-100 banner-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* BANNER TEXT */}
                        <div className="col-lg-5">
                            <div
                                className="banner-txt wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id blue-color">
                                    Why Choose MedService
                                </span>
                                {/* Title  */}
                                <h2 className="h2-xl steelblue-color">
                                    High Quality Medical Care
                                </h2>
                                <h3 className="h3-md blue-color">
                                    +1-800-123-4560
                                </h3>
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
                                    className="btn btn-blue blue-hover mt-15"
                                >
                                    Make An Apointment
                                </a>
                            </div>
                        </div>{" "}
                        {/* END BANNER TEXT */}
                        {/* BANNER IMAGE */}
                        <div className="col-lg-7">
                            <div className="banner-3-img">
                                <img
                                    className="img-fluid"
                                    src="images/image-06.png"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END BANNER-3 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default demo3;
