import Link from "next/link";
import React from "react";
import TimetablePage from "../src/components/Timetable/TimetablePage";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const timetable = () => {
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
                                            <Link href="/demo-1">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Timetable
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Timetable
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* END BREADCRUMB */}
            {/* SCHEDULE TIMETABLE
			============================================= */}
            <TimetablePage />
            {/* END SCHEDULE TIMETABLE */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default timetable;
