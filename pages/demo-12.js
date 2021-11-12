import React from "react";
import Footer1 from "../src/layout/Footer/Footer1";
import Header6 from "../src/layout/Header/Header6";

const demo12 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header6 />
            {/* END HEADER */}
            {/* HERO-12
			============================================= */}
            <section id="hero-12" className="bg-blue hero-section division">
                {/* HERO TEXT */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h5>Welcome to MedService</h5>
                                <h2>
                                    We Will help you to{" "}
                                    <span>become healthy</span>
                                </h2>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p className="p-md">
                                        Fringilla risus nec, luctus mauris orci
                                        auctor purus euismod pretium purus undo
                                        ligula rutrum tempor sapien pretium
                                    </p>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="box-list mb-15">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p className="p-md">
                                        Nemo ipsam egestas volute turpis dolores
                                        ut aliquam quaerat sodales sapien undo
                                        pretium purus and feugiat
                                    </p>
                                </div>
                                {/* Button */}
                                <a
                                    href="about-us.html"
                                    className="btn btn-tra-white blue-hover"
                                >
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* END END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="hero-12-img" />
            </section>{" "}
            {/* END HERO-12 */}
            {/* ABOUT-2
			============================================= */}
            <section id="about-2" className="about-section division">
                <div className="container">
                    <div className="abox-2-holder">
                        <div className="row">
                            {/* ABOUT BOX #1 */}
                            <div className="col-md-12 col-lg-4">
                                <div className="abox-2">
                                    {/* Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Opening Hours
                                    </h5>
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
                                </div>
                            </div>
                            {/* ABOUT BOX #2 */}
                            <div className="col-md-6 col-lg-4">
                                <div className="abox-2">
                                    <h5 className="h5-md steelblue-color">
                                        Doctors Timetable
                                    </h5>
                                    {/* Text */}
                                    <p>
                                        An magnis nulla dolor at sapien augue
                                        iaculis purus tempor magna ipsum vitae
                                        and purus primis ipsum magna ipsum at
                                        tempus feugiat dolor impedit felis magna
                                        ipsum primis cubilia laoreet augue
                                        suscipit lectus mauris
                                    </p>
                                    {/* Button */}
                                    <a
                                        href="timetable.html"
                                        className="btn btn-sm btn-blue blue-hover mt-25"
                                    >
                                        View Timetable
                                    </a>
                                </div>
                            </div>
                            {/* ABOUT BOX #3 */}
                            <div className="col-md-6 col-lg-4">
                                <div className="abox-2">
                                    {/* Title */}
                                    <h5 className="h5-md steelblue-color">
                                        Emergency Cases
                                    </h5>
                                    {/* Text */}
                                    <h4 className="h4-sm emergency-call blue-color">
                                        <i className="fas fa-phone" />{" "}
                                        1-800-123-4560
                                    </h4>
                                    <p className="mt-20">
                                        An magnis nulla dolor at sapien augue
                                        erat iaculis purus tempor magna ipsum
                                        vitae a purus primis ipsum magna ipsum
                                        tempus feugiat dolor impedit felis magna
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End row */}
                    </div>
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END ABOUT-2 */}
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
                                <span className="section-id blue-color">
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
            {/* SERVICES-5
			============================================= */}
            <section
                id="services-5"
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
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/pediatrics_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Pediatrics
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #2 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/neurology_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Neurology
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #3 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/hematology_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Haematology
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #4 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/x-ray_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            X-Ray Diagnostic
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #5 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/cardiology_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Cardiology
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #6 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/mri_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            MRI Diagnostics
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #7 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/laboratory_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Laboratory Services
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                                {/* SERVICE BOX #8 */}
                                <div className="sbox-5">
                                    {/* Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/emergency_help_700x700.jpg"
                                        alt="content-image"
                                    />
                                    {/* Text */}
                                    <div className="sbox-5-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm blue-color">
                                            Emergency Help
                                        </h5>
                                        {/* Text */}
                                        <p>
                                            Porta semper lacus cursus, feugiat
                                            primis ultrice in ligula risus
                                            auctor tempus feugiat dolor lacinia
                                            cubilia curae integer congue leo
                                            metus
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* END SERVICES CONTENT */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END SERVICES-5 */}
            {/* STATISTIC-3
			============================================= */}
            <div
                id="statistic-3"
                className="wide-60 statistic-section division"
            >
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
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor tempus feugia
                                    dolor lacinia cubilia curae integer congue
                                    leo metus, eu mollislorem primis in orci
                                    integer metus mollis faucibus. An enim
                                    nullam tempor sapien gravida donec pretium
                                </p>
                                {/* Statistic Holder */}
                                <div className="statistic-holder">
                                    <div className="row">
                                        {/* STATISTIC BLOCK #1 */}
                                        <div className="col-sm-4">
                                            <div className="statistic-block icon-sm">
                                                {/* Icon  */}
                                                <span className="flaticon-062-cardiogram-3 blue-color" />
                                                {/* Text */}
                                                <h5 className="statistic-number">
                                                    9,
                                                    <span className="count-element">
                                                        632
                                                    </span>
                                                </h5>
                                                <p>Happy Patients</p>
                                            </div>
                                        </div>
                                        {/* STATISTIC BLOCK #2 */}
                                        <div className="col-sm-4">
                                            <div className="statistic-block icon-sm">
                                                {/* Icon  */}
                                                <span className="flaticon-137-doctor blue-color" />
                                                {/* Text */}
                                                <h5 className="statistic-number">
                                                    <span className="count-element">
                                                        178
                                                    </span>
                                                </h5>
                                                <p>Qualified Doctors</p>
                                            </div>
                                        </div>
                                        {/* STATISTIC BLOCK #3 */}
                                        <div className="col-sm-4">
                                            <div className="statistic-block icon-sm">
                                                {/* Icon  */}
                                                <span className="flaticon-065-hospital-bed blue-color" />
                                                {/* Text */}
                                                <h5 className="statistic-number">
                                                    <span className="count-element">
                                                        864
                                                    </span>
                                                </h5>
                                                <p>Clinic Rooms</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* End Statistic Holder */}
                            </div>
                        </div>{" "}
                        {/* END TEXT BLOCK */}
                        {/* STATISTIC IMAGE */}
                        <div className="col-lg-6">
                            <div
                                className="statistic-img text-center mb-40 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img
                                    className="img-fluid"
                                    src="images/image-04.png"
                                    alt="statistic-image"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END STATISTIC-3 */}
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
                                    Qualified Doctors
                                </span>
                                {/* Title */}
                                <h3 className="h3-md">
                                    Group of Certified and Experienced Doctors
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
            {/* VIDEO-1
			============================================= */}
            <section id="video-1" className="wide-60 video-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
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
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END VIDEO-1 */}
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
                className="wide-60 pricing-section division"
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
                                <span className="flaticon-104-blood-sample blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Blood Test</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        45
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
                                <span className="flaticon-072-hospital-5 blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Medical Care</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        350
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
                                <span className="flaticon-143-teeth blue-color" />
                                {/* Title */}
                                <h5 className="h5-lg">Dental Care</h5>
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <sup className="steelblue-color">$</sup>
                                    <span className="price steelblue-color">
                                        235
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
            {/* INFO-8
			============================================= */}
            <section id="info-8" className="info-section division">
                {/* TEXT BLOCK */}
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-5">
                            <div
                                className="txt-block pc-30 white-color wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Title */}
                                <h4 className="h4-sm">Opening Hours:</h4>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia cursus vitae massa
                                </p>
                                {/* Table */}
                                <table className="table white-color">
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
                                {/* Title */}
                                <h5 className="h5-md">
                                    Need a personal health plan?
                                </h5>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia undo cursus nulla massa
                                    suscipit, luctus neque purus ipsum neque
                                    dolor primis
                                </p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* INFO-7 IMAGE */}
                <div className="info-8-img text-center" />
            </section>{" "}
            {/* END INFO-8 */}
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
            {/* BANNER-8
			============================================= */}
            <section id="banner-8" className="bg-fixed banner-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* BANNER TEXT */}
                        <div className="col-lg-8 offset-lg-2">
                            <div className="banner-txt icon-lg text-center">
                                {/* Icon  */}
                                <span className="flaticon-072-hospital-5" />
                                {/* Title  */}
                                <h3 className="h3-sm">
                                    Take the First Step to Help
                                </h3>
                                <h4 className="h4-lg">
                                    Call MedService Clinic Now
                                </h4>
                                <h2 className="h2-lg">1-800-123-4560</h2>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END BANNER-8 */}
            {/* FOOTER-2
			============================================= */}
            <Footer1 />
            {/* END FOOTER-2 */}
        </div>
    );
};

export default demo12;
