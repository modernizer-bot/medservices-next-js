import React from "react";
import Header1 from "../src/layout/Header/Header1";
import Footer4 from "../src/layout/Footer/Footer4";

const gallery = () => {
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
                                            Our Gallery
                                        </li>
                                    </ol>
                                </nav>
                                {/* Title */}
                                <h4 className="h4-sm steelblue-color">
                                    Our Gallery
                                </h4>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END BREADCRUMB */}
            {/* GALLERY-3
			============================================= */}
            <div id="gallery-3" className="gallery-section division">
                <div className="container">
                    {/* GALLERY FILTERING BUTTONS */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="gallery-filter mb-60">
                                <button data-filter="*" className="is-checked">
                                    All
                                </button>
                                <button data-filter=".dental">
                                    Dental Care
                                </button>
                                <button data-filter=".pediatric">
                                    Pediatric
                                </button>
                                <button data-filter=".cardiology">
                                    Cardiology
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* GALLERY IMAGES HOLDER */}
                    <div className="row">
                        <div className="col-md-12 gallery-items-list">
                            <div className="masonry-wrap grid-loaded">
                                {/* IMAGE #1 */}
                                <div className="gallery-item dental">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-9.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-9.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #1 */}
                                {/* IMAGE #2 */}
                                <div className="gallery-item pediatric">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-10.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-10.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #2 */}
                                {/* IMAGE #3 */}
                                <div className="gallery-item cardiology">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-11.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-11.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #3 */}
                                {/* IMAGE #4 */}
                                <div className="gallery-item pediatric">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-12.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-12.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #4 */}
                                {/* IMAGE #5 */}
                                <div className="gallery-item dental">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-13.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-13.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #5 */}
                                {/* IMAGE #6 */}
                                <div className="gallery-item cardiology">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-14.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-14.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #6 */}
                                {/* IMAGE #7 */}
                                <div className="gallery-item pediatric">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-15.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-15.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #7 */}
                                {/* IMAGE #8 */}
                                <div className="gallery-item cardiology">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-16.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-16.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #8 */}
                                {/* IMAGE #9 */}
                                <div className="gallery-item dental">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-17.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-17.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #9 */}
                                {/* IMAGE #10 */}
                                <div className="gallery-item pediatric">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-18.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-18.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #10 */}
                                {/* IMAGE #11 */}
                                <div className="gallery-item cardiology">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-19.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-19.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #11 */}
                                {/* IMAGE #12 */}
                                <div className="gallery-item dental">
                                    <div className="hover-overlay">
                                        {/* Gallery Image */}
                                        <img
                                            className="img-fluid"
                                            src="images/gallery/image-20.jpg"
                                            alt="galley-image"
                                        />
                                        <div className="item-overlay" />
                                        {/* Image Zoom */}
                                        <div className="image-zoom">
                                            <a
                                                className="image-link"
                                                href="images/gallery/image-20.jpg"
                                                title
                                            >
                                                <i className="fas fa-search-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* END IMAGE #12 */}
                            </div>
                        </div>
                    </div>{" "}
                    {/* END GALLERY IMAGES HOLDER */}
                </div>{" "}
                {/* End container */}
            </div>{" "}
            {/* END GALLERY-3 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default gallery;
