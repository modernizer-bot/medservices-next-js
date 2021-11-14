import Link from "next/link";
import React from "react";

const HomeFooter = () => {
    return (
        <footer id="footer" className="footer division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 footer-copyright text-center">
                        <p>
                            Designed with <i className="fas fa-heart" /> by
                            <Link href="#">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    href="https://jthemes.com"
                                    title="Top WordPress & HTML Themes"
                                >
                                    Jthemes
                                </a>
                            </Link>
                        </p>
                        <p>
                            © 2019 <span>MedService.</span> All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;
