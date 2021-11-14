import Demo8Banner7 from "../src/components/Demo-8/Demo8Banner7.js";
import Demo8Blog1 from "../src/components/Demo-8/Demo8Blog1.js";
import Demo8Doctors1 from "../src/components/Demo-8/Demo8Doctors1.js";
import Demo8Hero8 from "../src/components/Demo-8/Demo8Hero8.js";
import Demo8Info2 from "../src/components/Demo-8/Demo8Info2.js";
import Demo8Info4 from "../src/components/Demo-8/Demo8Info4.js";
import Demo8Info5 from "../src/components/Demo-8/Demo8Info5.js";
import Demo8Reviews2 from "../src/components/Demo-8/Demo8Reviews2.js";
import Demo8Services4 from "../src/components/Demo-8/Demo8Services4.js";
import Demo8Video2 from "../src/components/Demo-8/Demo8Video2.js";
import Footer5 from "../src/layout/Footer/Footer5.js";
import Header4 from "../src/layout/Header/Header4.js";

const Demo8 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header4 />
            {/* END HEADER */}
            {/* HERO-8
			============================================= */}
            <Demo8Hero8 />
            {/* END HERO-8 */}
            {/* INFO-4
			============================================= */}
            <Demo8Info4 />
            {/* END INFO-4 */}
            {/* SERVICES-4
			============================================= */}
            <Demo8Services4 />
            {/* END SERVICES-4 */}
            {/* INFO-2
			============================================= */}
            <Demo8Info2 />
            {/* END INFO-2 */}
            {/* INFO-5
			============================================= */}
            <Demo8Info5 />
            {/* END INFO-5 */}
            {/* DOCTORS-1
			============================================= */}
            <Demo8Doctors1 />
            {/* END DOCTORS-1 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Demo8Reviews2 />
            {/* END TESTIMONIALS-2 */}
            {/* VIDEO-2
			============================================= */}
            <Demo8Video2 />
            {/* END VIDEO-2 */}
            {/* BANNER-7
			============================================= */}
            <Demo8Banner7 />
            {/* END BANNER-7 */}
            {/* BLOG-1
			============================================= */}
            <Demo8Blog1 />
            {/* END BLOG-1 */}
            {/* FOOTER-3
			============================================= */}
            <Footer5 />
            {/* END FOOTER-3 */}
        </div>
    );
};

export default Demo8;
