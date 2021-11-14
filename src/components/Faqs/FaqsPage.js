import Link from "next/link";
import React from "react";

const FaqsPage = () => {
    return (
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
                                ultrice in ligula risus auctor tempus feugiat
                                dolor lacinia cubilia curae integer congue leo
                                metus, primis in orci integer metus mollis
                                faucibus enim. Nemo ipsam egestas volute turpis
                                dolores ut aliquam quaerat sodales sapien undo
                                pretium purus feugiat dolor impedit magna purus
                                pretium gravida donec ligula massa gravida donec
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    data-toggle="collapse"
                                                    href="#collapseOne"
                                                    role="button"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Is porta semper MedService
                                                    primis?
                                                </a>{" "}
                                            </Link>
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
                                                Nullam rutrum eget nunc varius
                                                etiam mollis risus congue
                                                aliquam etiam sapien egestas,
                                                congue gestas posuere cubilia
                                                congue ipsum mauris lectus
                                                laoreet gestas neque vitae
                                                auctor eros dolor luctus odio
                                                tempor sapien gravida donec
                                                pretium and ipsum porta
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseTwo"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    How feugiat primis ultrice
                                                    in ligula?
                                                </a>{" "}
                                            </Link>
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
                                                Maecenas gravida porttitor nunc,
                                                quis vehicula magna luctus
                                                tempor. Quisque vel laoreet
                                                turpis. Urna augue, viverra a
                                                augue eget, dictum tempor diam.
                                                Sed pulvinar consectetur nibh,
                                                imperdiet cubilia curae integer
                                                congue leo metus, primis in orci
                                                integer metus mollis faucibus
                                                enim
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseThree"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Did donec pretium and
                                                    MedService porta?
                                                </a>{" "}
                                            </Link>
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
                                                Nullam rutrum eget nunc varius
                                                etiam mollis risus congue
                                                aliquam etiam sapien egestas,
                                                congue gestas posuere cubilia
                                                congue ipsum
                                            </p>
                                            {/* List */}
                                            <ul className="content-list">
                                                <li>
                                                    <p>
                                                        Vitae auctor integer
                                                        congue magna at pretium
                                                        purus pretium ligula
                                                        rutrum luctus risus eros
                                                        dolor auctor cubilia
                                                        curae integer congue leo
                                                        metus, primis in orci
                                                        integer metus mollis
                                                        enim
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Sagittis congue augue
                                                        egestas volutpat egestas
                                                        magna suscipit egestas
                                                        magna cubilia curae
                                                        integer congue leo
                                                        metus, primis in orci
                                                        integer metus mollis
                                                        faucibus enimipsum
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseFour"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    What is metus mollis
                                                    faucibus?
                                                </a>{" "}
                                            </Link>
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
                                                sapien gravida donec ipsum, at
                                                porta justo. Velna vitae auctor
                                                eros congue magna nihil impedit
                                                ligula risus. Mauris donec ociis
                                                et magnis sapien etiam sapien
                                                sem sagittis cubilia curae
                                                integer congue leo metus, primis
                                                in orci integer metus mollis
                                                enim
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    data-toggle="collapse"
                                                    href="#collapseFive"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFive"
                                                >
                                                    How much congue magna nihil
                                                    impedit ligula risus?
                                                </a>{" "}
                                            </Link>
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
                                                Nullam non scelerisque lectus.
                                                In at mauris vel nisl convallis
                                                porta at vitae dui. Nam lacus
                                                ligula, vulputate molestie quis
                                                aliquet cubilia curae integer
                                                congue leo metus, primis in orci
                                                integer metus mollis faucibus
                                                enim
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseSix"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseSix"
                                                >
                                                    What I congue magna nihil
                                                    convallis porta?
                                                </a>{" "}
                                            </Link>
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
                                                Nullam non scelerisque lectus.
                                                In at mauris vel nisl convallis
                                                porta at vitae dui. Nam lacus
                                                ligula, vulputate molestie
                                                bibendum quis, aliquet elementum
                                                massa. Vestibulum ut sagittis
                                                odio
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseSeven"
                                                    role="button"
                                                    aria-expanded="true"
                                                    aria-controls="collapseSeven"
                                                >
                                                    Is there a aliquet elementum
                                                    massa?
                                                </a>{" "}
                                            </Link>
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
                                                sapien gravida donec ipsum, at
                                                porta justo. Velna vitae auctor
                                                eros congue magna nihil impedit
                                                ligula risus. Mauris donec ociis
                                                et magnis sapien etiam sapien
                                                sem sagittis congue tempor
                                                gravida donec enim ipsum porta
                                                justo integer at odio velna
                                                congue integer vitae auctor eros
                                                dolor luctus odio placerat massa
                                                magna
                                            </p>
                                            {/* Text */}
                                            <p>
                                                Nullam rutrum eget nunc varius
                                                etiam mollis risus congue
                                                aliquam etiam sapien egestas,
                                                congue gestas posuere cubilia
                                                congue ipsum mauris lectus
                                                laoreet gestas neque vitae
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
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
                                                </a>{" "}
                                            </Link>
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
                                                Maecenas gravida porttitor nunc,
                                                quis vehicula magna luctus
                                                tempor. Quisque vel laoreet
                                                turpis. Urna augue, viverra a
                                                augue eget, dictum tempor diam.
                                                Sed pulvinar consectetur nibh,
                                                vel imperdiet dui varius
                                                viverra. Pellentesque ac massa
                                                lorem. Fusce eu cursus est fusce
                                                non nulla
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseNine"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseNine"
                                                >
                                                    Do you have vehicula magna
                                                    luctus tempor?
                                                </a>{" "}
                                            </Link>
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
                                                Nullam rutrum eget nunc varius
                                                etiam mollis risus congue
                                                aliquam etiam sapien egestas,
                                                congue gestas posuere cubilia
                                                congue ipsum mauris lectus
                                                laoreet gestas neque vitae
                                                auctor eros dolor luctus odio
                                                placerat magna cursus
                                            </p>
                                            {/* List */}
                                            <ul className="content-list">
                                                <li>
                                                    <p>
                                                        Vitae auctor integer
                                                        congue magna at pretium
                                                        purus pretium ligula
                                                        rutrum luctus risus
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Sagittis congue augue
                                                        egestas volutpat egestas
                                                        magna suscipit egestas
                                                        magna ipsum vitae purus
                                                        efficitur ipsum primis
                                                        in cubilia laoreet augue
                                                        egestas luctus donec
                                                        diamTempor sapien
                                                        gravida donec enim ipsum
                                                        blandit magna at purus
                                                        pretium ligula rutrum
                                                        luctus
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Justo odio integer a
                                                        velna lectus aenean
                                                        magna and mauris lectus
                                                        pretium ligula rutrum
                                                        luctus risus ac risus
                                                        auctor gravida donec
                                                        congue tempor gravida
                                                        donec enim ipsum porta
                                                        justo integer
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    data-toggle="collapse"
                                                    href="#collapseTen"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTen"
                                                >
                                                    I have tempor sapien
                                                    gravida?
                                                </a>{" "}
                                            </Link>
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
                                                sapien gravida donec ipsum, at
                                                porta justo. Velna vitae auctor
                                                eros congue magna nihil impedit
                                                ligula risus. Mauris donec ociis
                                                et magnis sapien etiam sapien
                                                sem sagittis congue tempor
                                                gravida donec enim ipsum porta
                                                justo integer at odio velna
                                                congue integer vitae auctor eros
                                                dolor luctus odio placerat
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseEleven"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseEleven"
                                                >
                                                    I want molestie bibendum
                                                    quis, aliquet?
                                                </a>{" "}
                                            </Link>
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
                                                justo ut aliquam. Aliquam vitae
                                                molestie nunc. Quisque sapien
                                                justo, aliquet non molestie sed,
                                                venenatis nec purus. Aliquam
                                                eget lacinia elit. Vestibulum
                                                tincidunt tincidunt massa, et
                                                porttitor justo tincidunt eu.
                                            </p>
                                            {/* Text */}
                                            <p>
                                                Nullam non scelerisque lectus.
                                                In at mauris vel nisl convallis
                                                porta at vitae dui. Nam lacus
                                                ligula, vulputate molestie
                                                bibendum quis, aliquet elementum
                                                massa. Vestibulum ut sagittis
                                                odio
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    href="#collapseTwelve"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwelve"
                                                >
                                                    Can I tincidunt tincidunt
                                                    massa, et porttitor?
                                                </a>{" "}
                                            </Link>
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
                                                justo ut aliquam. Aliquam vitae
                                                molestie nunc. Quisque sapien
                                                justo, aliquet non molestie sed,
                                                venenatis nec purus. Aliquam
                                                eget lacinia elit. Vestibulum
                                                tincidunt tincidunt massa, et
                                                porttitor justo tincidunt eu.
                                            </p>
                                            {/* Text */}
                                            <p>
                                                Nullam non scelerisque lectus.
                                                In at mauris vel nisl convallis
                                                porta at vitae dui. Nam lacus
                                                ligula, vulputate molestie
                                                bibendum quis, aliquet elementum
                                                massa. Vestibulum ut sagittis
                                                odio
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* END ACCORDION CARD #12 */}
                            </div>
                            {/* END QUESTIONS ACCORDION */}
                        </div>
                    </div>
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
                                    <span>Chief Medical Officer, Founder</span>
                                    <p className="blue-color">1-800-1234-567</p>
                                </div>
                            </div>
                            {/* End Head of Clinic */}
                            {/* Text */}
                            <p className="p-sm">
                                An enim nullam tempor sapien at gravida donec
                                pretium ipsum porta justo integer at odiovelna
                                vitae auctor integer congue magna purus
                            </p>
                            {/* Button */}
                            <Link href="/about">
                                <a className="btn btn-blue blue-hover">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                        {/* END TEXT WIDGET */}
                        {/* SIDEBAR TABLE */}
                        <div className="sidebar-table blue-table sidebar-div mb-50">
                            {/* Title */}
                            <h5 className="h5-md">Working Time</h5>
                            {/* Text */}
                            <p className="p-sm">
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor at tempus feugiat
                                dolor lacinia cursus nulla vitae massa
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
                                        <td className="text-right">CLOSED</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Title */}
                            <h5 className="h5-xs">
                                Need a personal health plan?
                            </h5>
                            {/* Text */}
                            <p className="p-sm">
                                Porta semper lacus cursus, and feugiat primis
                                ultrice ligula at risus auctor
                            </p>
                        </div>
                        {/* END SIDEBAR TABLE */}
                        {/* SIDEBAR TIMETABLE */}
                        <div className="sidebar-timetable sidebar-div mb-50">
                            {/* Title */}
                            <h5 className="h5-md mb-20">Doctors Timetable</h5>
                            {/* Text */}
                            <p className="p-sm">
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor at tempus feugiat
                                dolor lacinia cursus nulla vitae massa
                            </p>
                            {/* Button */}
                            <Link href="/about">
                                <a className="btn btn-blue blue-hover mt-10">
                                    View Timetable
                                </a>
                            </Link>
                        </div>
                        {/* END SIDEBAR TABLE */}
                    </aside>
                    {/* END SIDEBAR */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default FaqsPage;
