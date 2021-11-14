import Contacts1 from "../src/components/Contacts-1/Contacts1";
import Footer4 from "../src/layout/Footer/Footer4";
import Header1 from "../src/layout/Header/Header1";

const Contacts1 = () => {
    return (
        <div id="page" className="page">
            {/* HEADER
			============================================= */}
            <Header1 /> {/* END HEADER */}
            {/* GOOGLE MAP
			============================================= */}
            <div id="gmap" className="gmap" />
            {/* CONTACTS-1
			============================================= */}
            <Contacts1 />
            {/* END CONTACTS-1 */}
            {/* FOOTER-1
			============================================= */}
            <Footer4 />
        </div>
    );
};

export default Contacts1;
