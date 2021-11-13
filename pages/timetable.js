import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

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
                                            <a href="demo-1.html">Home</a>
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
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* SCHEDULE TIMETABLE
			============================================= */}
            <div id="timetable-page" className="timetable-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* TIMETABLE	*/}
                            <div className="cd-schedule loading">
                                {/* Timeline */}
                                <div className="timeline">
                                    <ul>
                                        <li>
                                            <span>09:00</span>
                                        </li>
                                        <li>
                                            <span>09:30</span>
                                        </li>
                                        <li>
                                            <span>10:00</span>
                                        </li>
                                        <li>
                                            <span>10:30</span>
                                        </li>
                                        <li>
                                            <span>11:00</span>
                                        </li>
                                        <li>
                                            <span>11:30</span>
                                        </li>
                                        <li>
                                            <span>12:00</span>
                                        </li>
                                        <li>
                                            <span>12:30</span>
                                        </li>
                                        <li>
                                            <span>13:00</span>
                                        </li>
                                        <li>
                                            <span>13:30</span>
                                        </li>
                                        <li>
                                            <span>14:00</span>
                                        </li>
                                        <li>
                                            <span>14:30</span>
                                        </li>
                                        <li>
                                            <span>15:00</span>
                                        </li>
                                        <li>
                                            <span>15:30</span>
                                        </li>
                                        <li>
                                            <span>16:00</span>
                                        </li>
                                        <li>
                                            <span>16:30</span>
                                        </li>
                                        <li>
                                            <span>17:00</span>
                                        </li>
                                        <li>
                                            <span>17:30</span>
                                        </li>
                                        <li>
                                            <span>18:00</span>
                                        </li>
                                        <li>
                                            <span>18:30</span>
                                        </li>
                                        <li>
                                            <span>19:00</span>
                                        </li>
                                    </ul>
                                </div>{" "}
                                {/* End Timeline */}
                                {/* Events */}
                                <div className="events">
                                    <ul>
                                        {/* MONDAY */}
                                        <li className="events-group">
                                            <div className="top-info">
                                                <span>Monday</span>
                                            </div>
                                            <ul>
                                                <li
                                                    className="single-event"
                                                    data-start="09:00"
                                                    data-end="11:00"
                                                    data-event="event-1"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Primacy Help Care
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. Hannah Harper
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.13 Hall A
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="11:00"
                                                    data-end="13:00"
                                                    data-event="event-2"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.27 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="13:00"
                                                    data-end="15:00"
                                                    data-event="event-3"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Haematology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. M.Anderson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.46 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="15:00"
                                                    data-end="17:00"
                                                    data-event="event-4"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            X-Ray
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. M.Coleman
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.103 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="17:00"
                                                    data-end="19:00"
                                                    data-event="event-6"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Traumatology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. R.Peterson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>{" "}
                                        {/* END MONDAY */}
                                        {/* TUESDAY */}
                                        <li className="events-group">
                                            <div className="top-info">
                                                <span>Tuesday</span>
                                            </div>
                                            <ul>
                                                <li
                                                    className="single-event"
                                                    data-start="10:00"
                                                    data-end="12:00"
                                                    data-event="event-7"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pulmonary
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. R.Peterson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.13 Hall A
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="13:00"
                                                    data-end="15:00"
                                                    data-event="event-5"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Laryngology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Elledge
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.27 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="15:00"
                                                    data-end="17:00"
                                                    data-event="event-1"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Primacy Help Care
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. Hannah Harper
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.46 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="17:00"
                                                    data-end="19:00"
                                                    data-event="event-4"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            X-Ray
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. .Anderson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.103 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="17:00"
                                                    data-end="19:00"
                                                    data-event="event-8"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>{" "}
                                        {/* END TUESDAY */}
                                        {/* WEDNESDAY */}
                                        <li className="events-group">
                                            <div className="top-info">
                                                <span>Wednesday</span>
                                            </div>
                                            <ul>
                                                <li
                                                    className="single-event"
                                                    data-start="9:00"
                                                    data-end="11:00"
                                                    data-event="event-4"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            X-Ray
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. .Anderson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.103 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="11:00"
                                                    data-end="13:00"
                                                    data-event="event-8"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="14:00"
                                                    data-end="16:00"
                                                    data-event="event-3"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Primacy Help Care
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. Hannah Harper
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.46 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="16:00"
                                                    data-end="18:00"
                                                    data-event="event-4"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            X-Ray
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. .Anderson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.103 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>{" "}
                                        {/* END WEDNESDAY */}
                                        {/* THURSDAY */}
                                        <li className="events-group">
                                            <div className="top-info">
                                                <span>Thursday</span>
                                            </div>
                                            <ul>
                                                <li
                                                    className="single-event"
                                                    data-start="9:00"
                                                    data-end="12:00"
                                                    data-event="event-1"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pulmonary
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. R.Peterson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.13 Hall A
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="12:00"
                                                    data-end="14:00"
                                                    data-event="event-2"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Laryngology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Elledge
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.27 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="14:00"
                                                    data-end="16:00"
                                                    data-event="event-8"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="16:00"
                                                    data-end="19:00"
                                                    data-event="event-6"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Traumatology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. R.Peterson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>{" "}
                                        {/* END THURSDAY */}
                                        {/* FRIDAY */}
                                        <li className="events-group">
                                            <div className="top-info">
                                                <span>Friday</span>
                                            </div>
                                            <ul>
                                                <li
                                                    className="single-event"
                                                    data-start="9:00"
                                                    data-end="11:00"
                                                    data-event="event-8"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="11:00"
                                                    data-end="13:00"
                                                    data-event="event-2"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Laryngology
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Elledge
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.27 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="13:00"
                                                    data-end="15:00"
                                                    data-event="event-3"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Primacy Help Care
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. Hannah Harper
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.46 Hall B
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="15:00"
                                                    data-end="17:00"
                                                    data-event="event-4"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            X-Ray
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. .Anderson
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.103 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                                <li
                                                    className="single-event"
                                                    data-start="17:00"
                                                    data-end="19:00"
                                                    data-event="event-5"
                                                >
                                                    <div className="event-info">
                                                        <em className="event-name">
                                                            Pediatrics
                                                        </em>
                                                        <em className="event-name event-doctor">
                                                            Dr. J.Barnes
                                                        </em>
                                                        <em className="event-name event-room">
                                                            Rm.29 Hall C
                                                        </em>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>{" "}
                                        {/* END FRIDAY */}
                                    </ul>
                                </div>{" "}
                                {/* End Events */}
                            </div>{" "}
                            {/* END TIMETABLE	*/}
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END SCHEDULE TIMETABLE */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default timetable;
