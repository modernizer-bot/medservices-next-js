import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

const pricing2 = () => {
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
                                            Our Pricing
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Pricing
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* PRICING-2 PAGE CONTENT
			============================================= */}
            <div
                id="pricing-2-page"
                className="wide-60 blog-page-section division"
            >
                <div className="container">
                    <div className="row">
                        {/* PRICING-2 HOLDER */}
                        <div className="col-lg-8">
                            <div className="txt-block pr-30">
                                {/* Title */}
                                <h3 className="h3-md steelblue-color">
                                    Patient Pricing Information
                                </h3>
                                {/* Text */}
                                <p className="mb-50">
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
                                {/* Plan Title  */}
                                <h5 className="h5-md steelblue-color">
                                    Regular Diagnostic and Health Care Services
                                </h5>
                                <div className="pricing-table mb-40">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>X-Ray</td>
                                                <td>
                                                    From <span>$1325.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    Magnetic Resonance Imaging
                                                </td>
                                                <td>
                                                    From <span>$1435.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Computer Tomography</td>
                                                <td>
                                                    From <span>$1315.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Laboratory Tests</td>
                                                <td>
                                                    From <span>$890.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Ultrasound Imaging</td>
                                                <td>
                                                    From <span>$985.00</span>
                                                </td>
                                            </tr>
                                            <tr className="last-tr">
                                                <th scope="row">6</th>
                                                <td>Pregnancy Care Service</td>
                                                <td>
                                                    From <span>$1130.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Plan Title  */}
                                <h5 className="h5-md steelblue-color">
                                    Emergency Department Charges
                                </h5>
                                <div className="pricing-table mb-40">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bronchoscopy</td>
                                                <td>
                                                    From <span>$1340.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Parathyroid Scan</td>
                                                <td>
                                                    From <span>$765.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Echocardiography</td>
                                                <td>
                                                    From <span>$1075.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Full Blood Picture</td>
                                                <td>
                                                    From <span>$950.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>
                                                    CT &amp; Ultrasound
                                                    Diagnostic
                                                </td>
                                                <td>
                                                    From <span>$885.00</span>
                                                </td>
                                            </tr>
                                            <tr className="last-tr">
                                                <th scope="row">6</th>
                                                <td>MRI &amp; X-Ray</td>
                                                <td>
                                                    From <span>$1050.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{" "}
                        {/* END PRICING-2 HOLDER */}
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
                        </aside>{" "}
                        {/* END SIDEBAR */}
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END PRICING-2 PAGE CONTENT */}
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
                    {/* ALL PRICING TABLES BUTTON */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                            <div className="all-pricing-btn mb-40">
                                {/* Price Notice */}
                                <p>
                                    <span>Note!</span> Feugiat eros, ac
                                    tincidunt ligula massa in faucibus orci
                                    luctus et ultrices posuere cubilia and curae
                                    integer congue leo metus mollis primis and
                                    mauris lectus laoreet tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End container */}
            </section>{" "}
            {/* END PRICING-1 */}
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

export default pricing2;
