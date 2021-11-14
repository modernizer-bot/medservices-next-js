import About5 from "../src/components/Common/About-5";
import Banner7 from "../src/components/Common/Banner-7";
import Info2 from "../src/components/Common/Info-2";
import Info6 from "../src/components/Common/Info-6";
import Services3 from "../src/components/Common/Services-3";
import Statistic1 from "../src/components/Common/Statistic-1";
import Tabs1 from "../src/components/Common/Tabs-1";
import Testimonials2 from "../src/components/Common/Testimonials-2";
import Video1 from "../src/components/Common/Video-1";
import Demo1About1 from "../src/components/Demo-1/Demo1About1";
import Demo1Banner2 from "../src/components/Demo-1/Demo1Banner2";
import Demo1Blog1 from "../src/components/Demo-1/Demo1Blog1";
import Demo1Doctors1 from "../src/components/Demo-1/Demo1Doctors1";
import Demo1Hero1 from "../src/components/Demo-1/Demo1Hero-1";
import Demo1Info8 from "../src/components/Demo-1/Demo1Info8";
import Demo1Pricing1 from "../src/components/Demo-1/Demo1Pricing1";
import Footer2 from "../src/layout/Footer/Footer2";
import Header3 from "../src/layout/Header/Header3";

const demo1 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header3 />
            {/* END HEADER */}
            {/* HERO-1
			============================================= */}
            <Demo1Hero1 />
            {/* END HERO-1 */}
            {/* ABOUT-1
			============================================= */}
            <Demo1About1 />
            {/* END ABOUT-1 */}
            {/* ABOUT-5
			============================================= */}
            <About5 />
            {/* END ABOUT-5 */}
            {/* SERVICES-3
			============================================= */}
            <Services3 />
            {/* END SERVICES-3 */}
            {/* INFO-2
			============================================= */}
            <Info2 />
            {/* END INFO-2 */}
            {/* INFO-6
			============================================= */}
            <Info6 />
            {/* END INFO-6 */}
            {/* VIDEO-1
			============================================= */}
            <Video1 />
            {/* END VIDEO-1 */}
            {/* TESTIMONIALS-2
			============================================= */}
            <Testimonials2 />
            {/* END TESTIMONIALS-2 */}
            {/* DOCTORS-1
			============================================= */}
            <Demo1Doctors1 />
            {/* END DOCTORS-1 */}
            {/* INFO-8
			============================================= */}
            <Demo1Info8 />
            {/* END INFO-8 */}
            {/* TABS-1
			============================================= */}
            <Tabs1 />
            {/* END TABS-1 */}
            {/* STATISTIC-1
			============================================= */}
            <Statistic1 />
            {/* END STATISTIC-1 */}
            {/* PRICING-1
			============================================= */}
            <Demo1Pricing1 />
            {/* END PRICING-1 */}
            {/* BANNER-7
			============================================= */}
            <Banner7 />
            {/* END BANNER-7 */}
            {/* BLOG-1
			============================================= */}
            <Demo1Blog1 />
            {/* END BLOG-1 */}
            {/* BANNER-2
			============================================= */}
            <Demo1Banner2 />
            {/* END BANNER-2 */}
            {/* FOOTER-1
			============================================= */}
            <Footer2 />
            {/* END FOOTER-1 */}
        </div>
    );
};

export default demo1;
