import React from 'react';

const demo5 = () => {
    return (
        <div id="page" className="page">
  {/* HEADER
			============================================= */}
  <header id="header" className="header">
    {/* MOBILE HEADER */}
    <div className="wsmobileheader clearfix">
      <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
      <span className="smllogo"><img src="images/logo.png" width={180} height={40} alt="mobile-logo" /></span>
      <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone" /></a>
    </div>
    {/* HEADER STRIP */}
    <div className="headtoppart bg-blue clearfix">
      <div className="headerwp clearfix">
        {/* Address */}
        <div className="headertopleft">			     			
          <div className="address clearfix"><span><i className="fas fa-map-marker-alt" />121 King St,
              Melbourne, VIC 3000 </span> <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone" />(800)-569-7890</a>
          </div>
        </div>
        {/* Social Links */}
        <div className="headertopright">
          <a className="googleicon" title="Google" href="#"><i className="fab fa-google" /> <span className="mobiletext02">Google</span></a>
          <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in" /> <span className="mobiletext02">Linkedin</span></a>
          <a className="twittericon" title="Twitter" href="#"><i className="fab fa-twitter" /> <span className="mobiletext02">Twitter</span></a>
          <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f" /> <span className="mobiletext02">Facebook</span></a>
        </div>
      </div>
    </div>	{/* END HEADER STRIP */}
    {/* NAVIGATION MENU */}
    <div className="wsmainfull menu clearfix">
      <div className="wsmainwp clearfix">
        {/* LOGO IMAGE */}
        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
        <div className="desktoplogo"><a href="#hero-5"><img src="images/logo.png" width={180} height={40} alt="header-logo" /></a></div>
        {/* MAIN MENU */}
        <nav className="wsmenu clearfix">
          <ul className="wsmenu-list">
            {/* DROPDOWN MENU */}
            <li aria-haspopup="true"><a href="#">Home <span className="wsarrow" /></a>
              <ul className="sub-menu">
                <li aria-haspopup="true"><a href="demo-1.html">Home Concept #1</a></li>
                <li aria-haspopup="true"><a href="demo-2.html">Home Concept #2</a></li>
                <li aria-haspopup="true"><a href="demo-3.html">Home Concept #3</a></li>
                <li aria-haspopup="true"><a href="demo-4.html">Home Concept #4</a></li>
                <li aria-haspopup="true"><a href="demo-6.html">Home Concept #6</a></li>
                <li aria-haspopup="true"><a href="demo-7.html">Home Concept #7</a></li>
                <li aria-haspopup="true"><a href="demo-8.html">Home Concept #8</a></li>
                <li aria-haspopup="true"><a href="demo-9.html">Home Concept #9</a></li>
                <li aria-haspopup="true"><a href="demo-10.html">Home Concept #10</a></li>
                <li aria-haspopup="true"><a href="demo-11.html">Home Concept #11</a></li>
                <li aria-haspopup="true"><a href="demo-12.html">Home Concept #12</a></li>
              </ul>
            </li>	{/* END DROPDOWN MENU */}
            {/* PAGES */}
            <li aria-haspopup="true"><a href="#">Pages <span className="wsarrow" /></a>
              <div className="wsmegamenu clearfix">
                <div className="container">
                  <div className="row">
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Standard Pages:</li>
                      <li><a href="about-us.html">About Us Page</a></li>
                      <li><a href="who-we-are.html">Who We Are</a></li>
                      <li><a href="all-services.html">Our Services</a></li>
                      <li><a href="service-1.html">Service Single #1</a></li>
                      <li><a href="service-2.html">Service Single #2</a></li>				                             
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Medical Pages:</li>
                      <li><a href="all-departments.html">Our Departments</a></li>								                    
                      <li><a href="department-single.html">Department Single</a></li>
                      <li><a href="all-doctors.html">Meet the Doctors</a></li>
                      <li><a href="doctor-1.html">Doctor's Profile #1</a></li>
                      <li><a href="doctor-2.html">Doctor's Profile #2</a></li>
                      <li><a href="timetable.html">Doctors Timetable</a></li>									                    
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Special Pages:</li>
                      <li><a href="pricing-1.html">Pricing Packages #1</a></li>
                      <li><a href="pricing-2.html">Pricing Packages #2</a></li>								                    
                      <li><a href="appointment.html">Make an Appointment</a></li>
                      <li><a href="faqs.html">FAQs Page</a></li>
                      <li><a href="terms.html">Terms of Use</a></li> 
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Auxiliary Pages:</li>
                      <li><a href="gallery.html">Our Gallery</a></li>
                      <li><a href="blog-listing.html">Blog Listing Page</a></li>
                      <li><a href="single-post.html">Single Blog Post</a></li>								                   
                      <li><a href="contacts-1.html">Contact Us #1</a></li>
                      <li><a href="contacts-2.html">Contact Us #2</a></li> 						
                    </ul>
                  </div>  {/* End row */}	
                </div>  {/* End container */}	
              </div>  {/* End wsmegamenu */}	
            </li>	{/* END PAGES */}
            {/* HALF MENU */}
            <li aria-haspopup="true"><a href="#">Half Menu <span className="wsarrow" /></a>
              <div className="wsmegamenu clearfix halfmenu">
                <div className="container-fluid">
                  <div className="row">
                    {/* Links */}
                    <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                      <li className="title">For Patients:</li>
                      <li><a href="#">Meet The Doctors</a></li>							                    
                      <li><a href="#">Patient Info Sheets</a></li>
                      <li><a href="#">Online Patients Portal</a></li>
                      <li><a href="#">Patients Testimonials</a></li>
                      <li><a href="#">Blog &amp; Latest News</a></li>								                    
                    </ul>
                    {/* Links */}
                    <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                      <li className="title">Quick Links:</li>
                      <li><a href="#">Terms &amp; Privacy Policy</a></li>
                      <li><a href="#">Donor Privacy Policy</a></li>
                      <li><a href="#">Workers Compensation</a></li>
                      <li><a href="#">Insurance Information</a></li>
                      <li><a href="#">After Hours Care</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>	{/* END HALF MENU */}
            {/* MEGAMENU */}
            <li aria-haspopup="true"><a href="#">Mega Menu <span className="wsarrow" /></a>
              <div className="wsmegamenu clearfix">
                <div className="container">
                  <div className="row">
                    {/* MEGAMENU QUICK LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Quick Links:</li>
                      <li><a href="#">For Referring Doctors</a></li>
                      <li><a href="#">Terms &amp; Privacy Policy</a></li>
                      <li><a href="#">Donor Privacy Policy</a></li>								                    
                      <li><a href="#">Patient Info Sheets</a></li>
                      <li><a href="#">Online Patients Portal</a></li>
                      <li><a href="#">Insurance Information</a></li>
                      <li><a href="#">Patients Testimonials</a></li>
                    </ul>
                    {/* MEGAMENU FEATURED NEWS */}
                    <div className="col-lg-5 col-md-12 col-xs-12">
                      {/* Title */}
                      <h3 className="title">Featured News:</h3>
                      {/* Image */}
                      <div className="fluid-width-video-wrapper"><img src="images/blog/featured-news.jpg" alt="featured-news" /></div>
                      {/* Text */}
                      <h5 className="h5-xs"><a href="#">5 Benefits of integrative medicine</a></h5>
                      <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
                        tempus feugiat dolor impedit magna purus at pretium gravida donec
                      </p>
                    </div>	{/* END MEGAMENU FEATURED NEWS */}
                    {/* MEGAMENU LATEST NEWS */}
                    <div className="col-lg-4 col-md-12 col-xs-12">
                      {/* Title */}
                      <h3 className="title">Latest News:</h3>
                      {/* Latest News */}
                      <ul className="latest-news">
                        {/* Post #1 */}
                        <li className="clearfix d-flex align-items-center">
                          {/* Image */}
                          <img className="img-fluid" src="images/blog/latest-post-1.jpg" alt="blog-post-preview" />
                          {/* Text */}
                          <div className="post-summary">
                            <a href="single-post.html">Etiam sapien risus ante auctor tempus accumsan an empor ...</a>
                            <p>43 Comments</p>
                          </div>
                        </li>
                        {/* Post #2 */}
                        <li className="clearfix d-flex align-items-center">
                          {/* Image */}
                          <img className="img-fluid" src="images/blog/latest-post-2.jpg" alt="blog-post-preview" />
                          {/* Text */}
                          <div className="post-summary">
                            <a href="single-post.html">Blandit tempor a sapien ipsum, porta risus auctor justo ...</a>
                            <p>38 Comments</p>
                          </div>
                        </li>
                        {/* Post #3 */}
                        <li className="clearfix d-flex align-items-center">
                          {/* Image */}
                          <img className="img-fluid" src="images/blog/latest-post-3.jpg" alt="blog-post-preview" />
                          {/* Text */}
                          <div className="post-summary">
                            <a href="single-post.html">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</a>
                            <p>29 Comments</p>
                          </div>
                        </li>
                      </ul>
                    </div>	{/* END MEGAMENU LATEST NEWS */}
                  </div>  {/* End row */}	
                </div>  {/* End container */}	
              </div>  {/* End wsmegamenu */}	
            </li>	{/* END MEGAMENU */}
            {/* SIMPLE NAVIGATION LINK */}
            <li className="nl-simple" aria-haspopup="true"><a href="#">Simple Link</a></li>
            {/* NAVIGATION MENU BUTTON */}
            <li className="nl-simple header-btn" aria-haspopup="true"><a href="appointment.html">Make an Appointment</a></li>
          </ul>
        </nav>	{/* END MAIN MENU */}
      </div>
    </div>	{/* END NAVIGATION MENU */}
  </header>	{/* END HEADER */}
  {/* HERO-5
			============================================= */}	
  <section id="hero-5" className="bg-fixed hero-section division">
    <div className="container">						
      <div className="row d-flex align-items-center">
        {/* HERO TEXT */}
        <div className="col-md-9 col-lg-7 col-xl-6">
          <div className="hero-5-strip bg-blue white-color">
            <h5>Our Clinic Provides</h5>	
          </div>
          <div className="hero-txt">
            {/* Title */}
            <h4 className="steelblue-color">Best Quality</h4>
            <h3 className="steelblue-color">Medical treatment for your and your family</h3>
            {/* CONTENT BOX #1 */}
            <div className="box-list grey-color">							
              <div className="box-list-icon"><i className="fas fa-genderless" /></div>
              <p>Risus nec luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum
                tempor sapien and luctus
              </p>							
            </div>
            {/* CONTENT BOX #3 */}
            <div className="box-list grey-color mb-15">	
              <div className="box-list-icon"><i className="fas fa-genderless" /></div>
              <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                purus feugiat dolor impedit
              </p>				
            </div>	
            {/* Button */}
            <a href="about-us.html" className="btn btn-blue blue-hover">Discover More</a>										
          </div>
        </div>	{/* END HERO TEXT */}
      </div>    {/* End row */}
    </div>     {/* End container */}
  </section>	{/* END HERO-5 */}
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
              <h5 className="h5-md steelblue-color">Opening Hours</h5>
              {/* Table */}
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mon – Wed</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 7:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="last-tr">
                    <td>Sun - Sun</td>
                    <td>-</td>
                    <td className="text-right">CLOSED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* ABOUT BOX #2 */}
          <div className="col-md-6 col-lg-4">
            <div className="abox-2">
              <h5 className="h5-md steelblue-color">Doctors Timetable</h5>
              {/* Text */}
              <p>An magnis nulla dolor at sapien augue iaculis purus tempor magna ipsum vitae and purus
                primis ipsum magna ipsum at tempus feugiat dolor impedit felis magna ipsum primis cubilia 
                laoreet augue suscipit lectus mauris
              </p>
              {/* Button */}
              <a href="timetable.html" className="btn btn-sm btn-blue blue-hover mt-25">View Timetable</a>
            </div>
          </div>
          {/* ABOUT BOX #3 */}
          <div className="col-md-6 col-lg-4">
            <div className="abox-2">
              {/* Title */}
              <h5 className="h5-md steelblue-color">Emergency Cases</h5>
              {/* Text */}
              <h4 className="h4-sm emergency-call blue-color"><i className="fas fa-phone" /> 1-800-123-4560</h4>
              <p className="mt-20">An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum vitae 
                a purus primis ipsum magna ipsum tempus feugiat dolor impedit felis magna
              </p>
            </div>
          </div>
        </div>    {/* End row */}
      </div>
    </div>	   {/* End container */}	
  </section>	{/* END ABOUT-2 */}
  {/* ABOUT-5
			============================================= */}
  <section id="about-5" className="pt-100 about-section division">
    <div className="container">
      <div className="row d-flex align-items-center">
        {/* IMAGE BLOCK */}
        <div className="col-lg-6">
          <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
            <img className="img-fluid" src="images/image-03.png" alt="about-image" />
          </div>
        </div>
        {/* TEXT BLOCK */}	
        <div className="col-lg-6">
          <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
            {/* Section ID */}	
            <span className="section-id blue-color">Welcome to MedService</span>
            {/* Title */}
            <h3 className="h3-md steelblue-color">Complete Medical Solutions in One Place</h3>
            {/* Text */}
            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat
              dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer
              metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta
              justo integer at velna vitae auctor integer congue
            </p>
            {/* Singnature */}
            <div className="singnature mt-35">
              {/* Text */}
              <p className="p-small mb-15">Randon Pexon, Head of Clinic</p>
              {/* Singnature Image */}
              {/* Recommended sizes for Retina Ready displays is 400x68px; */}
              <img className="img-fluid" src="images/signature.png" width={200} height={34} alt="signature-image" />	
            </div>
          </div>
        </div>	{/* END TEXT BLOCK */}	
      </div>    {/* End row */}
    </div>	   {/* End container */}
  </section>	{/* END ABOUT-5 */}
  {/* SERVICES-2
			============================================= */}
  <section id="services-2" className="bg-lightgrey wide-70 services-section division">
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">		
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Choose Department</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div> 
      </div>
      <div className="row">
        {/* SERVICE BOX #1 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-083-stethoscope" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Pediatrics</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #2 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-047-head" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Neurology</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #3 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-015-blood-donation-1" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Haematology</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #4 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-048-lungs" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">X-Ray Diagnostic</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #5 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-060-cardiogram-4" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Cardiology</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #6 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-031-scanner" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">MRI</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #7 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
            <a href="department-single.html">	
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-076-microscope" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Laboratory Services</h5>
            </a>
          </div>							
        </div>
        {/* SERVICE BOX #8 */}
        <div className="col-sm-6 col-lg-3">
          <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
            <a href="department-single.html">		
              {/* Icon  */}
              <div className="sbox-2-icon icon-xl">
                <span className="flaticon-068-ambulance-3" />
              </div>
              {/* Title */}
              <h5 className="h5-sm sbox-2-title steelblue-color">Emergency Help</h5>
            </a>
          </div>							
        </div>
      </div>	   {/* End row */}		
    </div>	   {/* End container */}		
  </section>	{/* END SERVICES-2 */}
  {/* TABS-1
			============================================= */}
  <section id="tabs-1" className="wide-100 tabs-section division">
    <div className="container">	
      <div className="row">
        <div className="col-md-12">
          {/* TABS NAVIGATION */}
          <div id="tabs-nav" className="list-group text-center">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              {/* TAB-1 LINK */}
              <li className="nav-item icon-xs">
                <a className="nav-link active" id="tab1-list" data-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                  <span className="flaticon-083-stethoscope" /> Pediatrics
                </a>
              </li>
              {/* TAB-2 LINK */}
              <li className="nav-item icon-xs">
                <a className="nav-link" id="tab2-list" data-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                  <span className="flaticon-005-blood-donation-3" /> Hematology
                </a>
              </li>
              {/* TAB-3 LINK */}
              <li className="nav-item icon-xs">
                <a className="nav-link" id="tab3-list" data-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
                  <span className="flaticon-031-scanner" /> MRI
                </a>
              </li>
              {/* TAB-4 LINK */}
              <li className="nav-item icon-xs">
                <a className="nav-link" id="tab4-list" data-toggle="pill" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">
                  <span className="flaticon-048-lungs" /> X-Ray Diagnostics
                </a>
              </li>
            </ul>
          </div>	{/* END TABS NAVIGATION */}
          {/* TABS CONTENT */}
          <div className="tab-content" id="pills-tabContent">
            {/* TAB-1 CONTENT */}
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1-list">
              <div className="row d-flex align-items-center">
                {/* TAB-1 IMAGE */}
                <div className="col-lg-6">
                  <div className="tab-img">
                    <img className="img-fluid" src="images/pediatrics_700x700.jpg" alt="tab-image" />
                  </div>
                </div>
                {/* TAB-1 TEXT */}
                <div className="col-lg-6">
                  <div className="txt-block pc-30">
                    {/* Title */}
                    <h3 className="h3-md steelblue-color">Pediatrics</h3>
                    {/* Text */}
                    <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit
                      porta justo integer odio velna vitae auctor integer congue magna at pretium 
                      purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue 
                      egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas 
                      magna suscipit
                    </p>
                    {/* Options List */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* Option #1 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>							
                        </div>
                        {/* Option #2 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor</p>				
                        </div>
                        {/* Option  #3 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>				
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/* Option #4 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>				
                        </div>
                        {/* Option #5 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>							
                        </div>
                        {/* Option #6 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor</p>				
                        </div>
                      </div>
                    </div>	{/* End Options List */}
                    {/* Button */}
                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                  </div>	
                </div>	{/* END TAB-1 TEXT */}
              </div>
            </div>	{/* END TAB-1 CONTENT */}
            {/* TAB-2 CONTENT */}
            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
              <div className="row d-flex align-items-center">
                {/* TAB-2 IMAGE */}
                <div className="col-lg-6">
                  <div className="tab-imgs">
                    <img className="img-fluid" src="images/hematology_700x700.jpg" alt="tab-image" />
                  </div>
                </div>
                {/* TAB-2 TEXT */}
                <div className="col-lg-6">
                  <div className="txt-block pc-30">
                    {/* Title */}
                    <h3 className="h3-md steelblue-color">Hematology</h3>
                    {/* Text */}
                    <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit
                      porta justo integer odio velna vitae auctor integer congue magna at pretium 
                      purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue 
                      egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas 
                      magna suscipit
                    </p>
                    {/* Options List */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* Option #1 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>							
                        </div>
                        {/* Option #2 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor</p>				
                        </div>
                        {/* Option #3 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>				
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/* Option #4 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>				
                        </div>
                        {/* Option #5 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>							
                        </div>
                        {/* Option #6 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor</p>				
                        </div>
                      </div>
                    </div>	{/* End Options List */}
                    {/* Button */}
                    <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                  </div>	
                </div>	{/* END TAB-2 TEXT */}
              </div>
            </div>	{/* END TAB-2 CONTENT */}
            {/* TAB-3 CONTENT */}
            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
              <div className="row d-flex align-items-center">
                {/* TAB-3 IMAGE */}
                <div className="col-lg-6">
                  <div className="tab-img">
                    <img className="img-fluid" src="images/mri_700x700.jpg" alt="tab-image" />
                  </div>
                </div>
                {/* TAB-3 TEXT */}
                <div className="col-lg-6">
                  <div className="txt-block pc-30">
                    {/* Title */}
                    <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>
                    {/* Text */}
                    <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit
                      porta justo integer odio velna vitae auctor integer congue magna at pretium 
                      purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue 
                      egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas 
                      magna suscipit
                    </p>
                    {/* Options List */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* Option #1 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>							
                        </div>
                        {/* Option #2 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor</p>				
                        </div>
                        {/* Option #3 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>				
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/* Option #4 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>				
                        </div>
                        {/* Option #5 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>							
                        </div>
                        {/* Option #6 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor</p>				
                        </div>
                      </div>
                    </div>	{/* End Options List */}
                    {/* Button */}
                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                  </div>	
                </div>	{/* END TAB-3 TEXT */}
              </div>
            </div>	{/* END TAB-3 CONTENT */}
            {/* TAB-4 CONTENT */}
            <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
              <div className="row d-flex align-items-center">
                {/* TAB-4 IMAGE */}
                <div className="col-lg-6">
                  <div className="tab-img">
                    <img className="img-fluid" src="images/x-ray_700x700.jpg" alt="tab-image" />
                  </div>
                </div>
                {/* TAB-4 TEXT */}
                <div className="col-lg-6">
                  <div className="txt-block pc-30">
                    {/* Title */}
                    <h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>
                    {/* Text */}
                    <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit
                      porta justo integer odio velna vitae auctor integer congue magna at pretium 
                      purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue 
                      egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas 
                      magna suscipit
                    </p>
                    {/* Options List */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* Option #1 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>							
                        </div>
                        {/* Option #2 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor</p>				
                        </div>
                        {/* Option #3 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>				
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/* Option #4 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>				
                        </div>
                        {/* Option #5 */}
                        <div className="box-list">							
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>							
                        </div>
                        {/* Option #6 */}
                        <div className="box-list">	
                          <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                          <p className="p-sm">An enim nullam tempor</p>				
                        </div>
                      </div>
                    </div>	{/* End Options List */}
                    {/* Button */}
                    <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                  </div>	
                </div>	{/* END TAB-4 TEXT */}
              </div>
            </div>	{/* END TAB-4 CONTENT */}
          </div>	{/* END TABS CONTENT */}
        </div>	
      </div>     {/* End row */}	
    </div>     {/* End container */}	
  </section>	{/* END TABS-1 */}
  {/* ABOUT-6
			============================================= */}
  <section id="about-6" className="about-section division">
    <div className="container">
      <div className="row d-flex align-items-center">
        {/* TEXT BLOCK */}	
        <div className="col-lg-6">
          <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
            {/* Section ID */}	
            <span className="section-id blue-color">Best Practices</span>
            {/* Title */}
            <h3 className="h3-md steelblue-color">Clinic with Innovative Approach to Treatment</h3>
            {/* CONTENT BOX #1 */}
            <div className="box-list">							
              <div className="box-list-icon"><i className="fas fa-genderless" /></div>
              <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                purus feugiat dolor impedit
              </p>							
            </div>
            {/* CONTENT BOX #2 */}
            <div className="box-list">	
              <div className="box-list-icon"><i className="fas fa-genderless" /></div>
              <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar massa purus nulla
              </p>				
            </div>
            {/* Button */}
            <a href="all-doctors.html" className="btn btn-blue blue-hover mt-25">Meet The Doctors</a>
          </div>
        </div>	{/* END TEXT BLOCK */}	
        {/* IMAGE BLOCK */}
        <div className="col-lg-6">
          <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
            <img className="img-fluid" src="images/image-02.png" alt="about-image" />
          </div>
        </div>
      </div>    {/* End row */}
    </div>	   {/* End container */}
  </section>	{/* END ABOUT-6 */}
  {/* STATISTIC-1
			============================================= */}
  <div id="statistic-1" className="bg-scroll statistic-section division">
    <div className="container white-color">
      <div className="row">
        {/* STATISTIC BLOCK #1 */}
        <div className="col-md-6 col-lg-3">						
          <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.4s">
            {/* Icon  */}
            <span className="flaticon-062-cardiogram-3" />
            {/* Text */}
            <h5 className="statistic-number">9,<span className="count-element">632</span></h5>
            <p className="txt-400">Happy Patients</p>																			
          </div>								
        </div>
        {/* STATISTIC BLOCK #2 */}
        <div className="col-md-6 col-lg-3">								
          <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.6s">
            {/* Icon  */}
            <span className="flaticon-137-doctor" />
            {/* Text */}
            <h5 className="statistic-number"><span className="count-element">178</span></h5>	
            <p className="txt-400">Qualified Doctors</p>										
          </div>							
        </div>
        {/* STATISTIC BLOCK #3 */}
        <div className="col-md-6 col-lg-3">					
          <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.8s">	
            {/* Icon  */}
            <span className="flaticon-065-hospital-bed" />
            {/* Text */}
            <h5 className="statistic-number"><span className="count-element">864</span></h5>
            <p className="txt-400">Clinic Rooms</p>									
          </div>						
        </div>
        {/* STATISTIC BLOCK #4 */}
        <div className="col-md-6 col-lg-3">						
          <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="1s">	
            {/* Icon  */}
            <span className="flaticon-040-placeholder" />
            {/* Text */}	
            <h5 className="statistic-number"><span className="count-element">473</span></h5>
            <p className="txt-400">Local Partners</p>				
          </div>						
        </div>
      </div>  {/* End row */}
    </div>	 {/* End container */}		
  </div>	 {/* END STATISTIC-1 */}
  {/* DOCTORS-1
			============================================= */}
  <section id="doctors-1" className="wide-40 doctors-section division">
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">		
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Our Medical Specialists</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div> 
      </div>	 {/* END SECTION TITLE */}	
      <div className="row">
        {/* DOCTOR #1 */}
        <div className="col-md-6 col-lg-3">
          <div className="doctor-1">								
            {/* Doctor Photo */}
            <div className="hover-overlay text-center"> 
              {/* Photo */}
              <img className="img-fluid" src="images/doctor-1.jpg" alt="doctor-foto" />	
              <div className="item-overlay" />
              {/* Profile Link */}		
              <div className="profile-link">
                <a className="btn btn-sm btn-tra-white black-hover" href="doctor-1.html" title>View More Info</a>
              </div> 
            </div>	
            {/* Doctor Meta */}		
            <div className="doctor-meta">
              <h5 className="h5-sm steelblue-color">Jonathan Barnes D.M.</h5>
              <span className="blue-color">Chief Medical Officer</span>
              <p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
                augue luctus magna dolor luctus ipsum neque
              </p>
            </div>	
          </div>								
        </div>	{/* END DOCTOR #1 */}
        {/* DOCTOR #2 */}
        <div className="col-md-6 col-lg-3">
          <div className="doctor-1">	
            {/* Doctor Photo */}
            <div className="hover-overlay text-center"> 
              {/* Photo */}
              <img className="img-fluid" src="images/doctor-2.jpg" alt="doctor-foto" />	
              <div className="item-overlay" />
              {/* Profile Link */}		
              <div className="profile-link">
                <a className="btn btn-sm btn-tra-white black-hover" href="doctor-2.html" title>View More Info</a>
              </div>
            </div>	
            {/* Doctor Meta */}		
            <div className="doctor-meta">
              <h5 className="h5-sm steelblue-color">Hannah Harper D.M.</h5>
              <span className="blue-color">Anesthesiologist</span>
              <p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
                augue luctus magna dolor luctus ipsum neque
              </p>
            </div>	
          </div>					
        </div>	{/* END DOCTOR #2 */}
        {/* DOCTOR #3 */}
        <div className="col-md-6 col-lg-3">
          <div className="doctor-1">	
            {/* Doctor Photo */}
            <div className="hover-overlay text-center"> 
              {/* Photo */}
              <img className="img-fluid" src="images/doctor-3.jpg" alt="doctor-foto" />	
              <div className="item-overlay" />
              {/* Profile Link */}		
              <div className="profile-link">
                <a className="btn btn-sm btn-tra-white black-hover" href="doctor-1.html" title>View More Info</a>
              </div>
            </div>		
            {/* Doctor Meta */}		
            <div className="doctor-meta">
              <h5 className="h5-sm steelblue-color">Matthew Anderson D.M.</h5>
              <span className="blue-color">Cardiology</span>
              <p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
                augue luctus magna dolor luctus ipsum neque
              </p>
            </div>	
          </div>			
        </div>	{/* END DOCTOR #3 */}
        {/* DOCTOR #4 */}
        <div className="col-md-6 col-lg-3">
          <div className="doctor-1">	
            {/* Doctor Photo */}
            <div className="hover-overlay text-center"> 
              {/* Photo */}
              <img className="img-fluid" src="images/doctor-4.jpg" alt="doctor-foto" />	
              <div className="item-overlay" />
              {/* Profile Link */}		
              <div className="profile-link">
                <a className="btn btn-sm btn-tra-white black-hover" href="doctor-2.html" title>View More Info</a>
              </div>
            </div>		
            {/* Doctor Meta */}		
            <div className="doctor-meta">
              <h5 className="h5-sm steelblue-color">Megan Coleman D.M.</h5>
              <span className="blue-color">Neurosurgeon</span>
              <p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
                augue luctus magna dolor luctus ipsum neque
              </p>
            </div>	
          </div>			
        </div>	{/* END DOCTOR #4 */}
      </div>	    {/* End row */}
      {/* ALL DOCTORS BUTTON */}		
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="all-doctors mb-40">
            <a href="all-doctors.html" className="btn btn-blue blue-hover">Meet All Doctors</a>
          </div>
        </div>
      </div>
    </div>	   {/* End container */}
  </section>	{/* END DOCTORS-1 */}
  {/* TESTIMONIALS-2
			============================================= */}
  <section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">		
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">What Our Patients Say</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div> 
      </div>	 {/* END SECTION TITLE */}
      {/* TESTIMONIALS CONTENT */}
      <div className="row">
        <div className="col-md-12">					
          <div className="owl-carousel owl-theme reviews-holder">
            {/* TESTIMONIAL #1 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-1.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
                  magna undo tempus aliquet porta vitae
                </p>	
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Scott Boxer</h5>	
                  <span>Programmer</span>	
                </div>							
              </div>						
            </div>	{/*END  TESTIMONIAL #1 */}
            {/* TESTIMONIAL #2 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-2.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>Mauris donec ociis magnisa a sapien etiam sapien congue augue egestas et ultrice
                  vitae purus diam integer congue magna ligula egestas
                </p>										
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Penelopa Peterson</h5>	
                  <span>Project Manager</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #2 */}
            {/* TESTIMONIAL #3 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-3.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo cubilia
                  laoreet augue	   
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">M.Scanlon</h5>	
                  <span>Photographer</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #3 */}
            {/* TESTIMONIAL #4 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-4.jpg" alt="testimonial-avatar" />
                </div>	
                {/* Testimonial Text */}
                <p>Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula 
                  a lectus aenean magna mauris
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Jeremy Kruse</h5>	
                  <span>Graphic Designer</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #4 */}
            {/* TESTIMONIAL #5 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-5.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum
                  primis in augue ulta ligula egestas
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Evelyn Martinez</h5>	
                  <span>Senior UX/UI Designer</span>	
                </div>						
              </div>						
            </div>	{/* END TESTIMONIAL #5 */}
            {/* TESTIMONIAL #6 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-6.jpg" alt="testimonial-avatar" />
                </div>	
                {/* Testimonial Text */}
                <p>An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula
                  vitae and purus ipsum primis
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Dan Hodges</h5>	
                  <span>Internet Surfer</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #6 */}
            {/* TESTIMONIAL #7 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-7.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                  and dolor blandit vitae
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Isabel M.</h5>	
                  <span>SEO Manager</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #7 */}
            {/* TESTIMONIAL #8 */}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-8.jpg" alt="testimonial-avatar" />
                </div>
                {/* Testimonial Text */}
                <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                  and dolor blandit vitae
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Alex Ross</h5>	
                  <span>Patient</span>	
                </div>							
              </div>						
            </div>	{/* END TESTIMONIAL #8 */}
            {/* TESTIMONIAL #9*/}
            <div className="review-2">
              <div className="review-txt text-center">
                {/* Quote */}
                <div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
                {/* Author Avatar */}
                <div className="testimonial-avatar">
                  <img src="images/review-author-9.jpg" alt="testimonial-avatar" />
                </div>	
                {/* Testimonial Text */}
                <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                  magna dolor neque vitae 								   
                </p>
                {/* Testimonial Author */}
                <div className="review-author">
                  <h5 className="h5-sm">Alisa Milano</h5>	
                  <span>Housewife</span>	
                </div>
              </div>						
            </div>	{/* END TESTIMONIAL #9 */}
          </div>
        </div>									
      </div>	{/* END TESTIMONIALS CONTENT */} 
    </div>	   {/* End container */}
  </section>	 {/* END TESTIMONIALS-2 */}
  {/* PRICING-3
			============================================= */}
  <section id="pricing-3" className="wide-60 pricing-section division">
    <div className="container">	
      <div className="row d-flex align-items-center">
        {/* PRICING TABLE */}
        <div className="col-lg-6">
          <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">
            {/* Section ID */}	
            <span className="section-id blue-color">Our Pricing</span>
            {/* Title */}
            <h3 className="h3-md steelblue-color">Our Packages Are Budget Friendly for Everyone</h3>
            {/* Text */}
            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat
              dolor lacinia cubilia curae integer congue leo metus, primis in orci integer metus mollis faucibus enim 
            </p>
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
                    <td>From <span>$325.00</span></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Magnetic Resonance Imaging</td>
                    <td>From <span>$435.00</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Computer Tomography</td>
                    <td>From <span>$315.00</span></td>
                  </tr>
                  <tr className="last-tr">
                    <th scope="row">4</th>
                    <td>Laboratory Tests</td>
                    <td>From <span>$90.00</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>	{/* END PRICING TABLE */}
        {/* PRICING IMAGE */}
        <div className="col-lg-6">
          <div className="pricing-img wow fadeInUp" data-wow-delay="0.6s">
            <img className="img-fluid" src="images/image-04.png" alt="pricing-image" />
          </div>							
        </div>
      </div>	{/* End row */}
    </div>    {/* End container */}		
  </section>	{/* END PRICING-3 */}
  {/* GALLERY-1
			============================================= */}
  <div id="gallery-1" className="gallery-section division">	
    {/* SECTION TITLE */}	
    <div className="container">
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">		
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Total Health Care Solutions</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div> 
      </div>
    </div>
    {/* GALLERY IMAGES */}
    <div className="row gallery-items-list">							
      {/* IMAGE #1 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-1.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-1.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #2 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-2.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-2.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #3 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-3.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-3.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #4 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-4.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-4.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #5 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-5.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-5.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #6 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-6.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-6.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #7 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-7.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-7.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
      {/* IMAGE #8 */}
      <div className="col-md-6 col-lg-3 gallery-item">
        <div className="hover-overlay"> 
          {/* Gallery Image */}
          <img className="img-fluid" src="images/gallery/image-8.jpg" alt="gallery-image" />			
          <div className="item-overlay" />				
          {/* Image Zoom */}		
          <div className="image-zoom">
            <a className="image-link" href="images/gallery/image-8.jpg" title><i className="fas fa-search-plus" /></a>
          </div> 
        </div>
      </div>
    </div>  {/* END GALLERY IMAGES */}		
  </div>	 {/* END GALLERY-1 */}	
  {/* BLOG-1
			============================================= */}
  <section id="blog-1" className="wide-60 blog-section division">				
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">	
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Our Stories, Tips &amp; Latest News</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div>
      </div>
      {/* BLOG POSTS HOLDER */}
      <div className="row">
        {/* BLOG POST #1 */}
        <div className="col-lg-4">
          <div className="blog-post wow fadeInUp" data-wow-delay="0.4s">
            {/* BLOG POST IMAGE */}
            <div className="blog-post-img">
              <img className="img-fluid" src="images/blog/post-1-img.jpg" alt="blog-post-image" />	
            </div>
            {/* BLOG POST TITLE */}
            <div className="blog-post-txt">
              {/* Post Title */}
              <h5 className="h5-sm steelblue-color"><a href="single-post.html">5 Benefits Of Integrative Medicine</a></h5>
              {/* Post Data */}
              <span>May 03, 2019 by <span>Dr.Jeremy Smith</span></span>
              {/* Post Text */}
              <p>Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at
                gravida donec ipsum, at porta justo...
              </p>
            </div>
          </div>
        </div>	{/* END  BLOG POST #1 */}
        {/* BLOG POST #2 */}
        <div className="col-lg-4">
          <div className="blog-post wow fadeInUp" data-wow-delay="0.6s">
            {/* BLOG POST IMAGE */}
            <div className="blog-post-img">
              <img className="img-fluid" src="images/blog/post-2-img.jpg" alt="blog-post-image" />	
            </div>
            {/* BLOG POST TEXT */}
            <div className="blog-post-txt">
              {/* Post Title */}
              <h5 className="h5-sm steelblue-color"><a href="single-post.html">Your Health Is In Your Hands</a></h5>
              {/* Post Data */}
              <span>Apr 28, 2019 by <span>Dr.Jonathan Barnes</span></span>
              {/* Post Text */}
              <p>Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at
                gravida donec ipsum, at porta justo...
              </p>
            </div>
          </div>
        </div>	{/* END  BLOG POST #2 */}
        {/* BLOG POST #3 */}
        <div className="col-lg-4">
          <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">
            {/* BLOG POST IMAGE */}
            <div className="blog-post-img">
              <img className="img-fluid" src="images/blog/post-3-img.jpg" alt="blog-post-image" />	
            </div>
            {/* BLOG POST TEXT */}
            <div className="blog-post-txt">
              {/* Post Title */}
              <h5 className="h5-sm steelblue-color"><a href="single-post.html">How Weather Impacts Your Health</a></h5>
              {/* Post Data */}
              <span>Apr 17, 2019 by <span>Dr.Megan Coleman</span></span>
              {/* Post Text */}
              <p>Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at
                gravida donec ipsum, at porta justo...
              </p>
            </div>
          </div>
        </div>	{/* END  BLOG POST #3 */}
      </div>	{/* END BLOG POSTS HOLDER */}
    </div>	   {/* End container */}		
  </section>	{/* END BLOG-1 */}
  {/* CONTACTS-1
			============================================= */}
  <section id="contacts-1" className="bg-lightgrey wide-60 contacts-section division">				
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">	
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Have a Question? Get In Touch</h3>	
          {/* Text */}
          <p>Have a question? Want to book an appointment for yourself or your children? Give us a call
            or send an email to contact the MedService.
          </p>
        </div>
      </div>
      <div className="row">	
        {/* CONTACTS INFO */}
        <div className="col-md-5 col-lg-4">
          {/* General Information */}
          <div className="contact-box mb-40">
            <h5 className="h5-sm steelblue-color">General Information</h5>
            <p>121 King Street, Melbourne,</p> 
            <p>Victoria 3000 Australia</p>
            <p>Phone: +12 9 8765 4321</p>
            <p>Email: <a href="mailto:yourdomain@mail.com" className="blue-color">hello@yourdomain.com</a></p>
          </div>
          {/* Patient Experience */}
          <div className="contact-box mb-40">
            <h5 className="h5-sm steelblue-color">Patient Experience</h5>
            <p>Hannah Harper - Patient Experience Coordinator</p>
            <p>Phone: +12 9 8765 4321</p>
            <p>Email: <a href="mailto:yourdomain@mail.com" className="blue-color">hello@yourdomain.com</a></p>
          </div>
          {/* Working Hours */}
          <div className="contact-box mb-40">
            <h5 className="h5-sm steelblue-color">Working Hours</h5>
            <p>Monday – Friday : 8:00 AM - 8:00 PM</p> 
            <p>Saturday : 10:00 AM - 6:00 PM</p>
            <p>Sunday : 10:00 AM - 4:00 PM</p>
          </div>
        </div>	{/* END CONTACTS INFO */}
        {/* CONTACT FORM */}	
        <div className="col-md-7 col-lg-8">
          <div className="form-holder mb-40">
            <form name="contactForm" id="contact-form" className="row contact-form" method="post" action="php/contactForm.php">
              {/* Name */}
              <div className="col-md-12 col-lg-6">
                <div className="form-group">
                  <input id="form_name" type="text" name="name" className="form-control name" placeholder="Your Name*" required="required" data-error="Enter no more than (2) characters." /> 
                  <div className="help-block with-errors" /> 
                </div>
              </div>
              {/* Email */}			
              <div className="col-md-12 col-lg-6">
                <div className="form-group">
                  <input id="form_email" className="form-control email" type="email" name="email" placeholder="Your Email" required="required" data-error="Email is required" /> 
                  <div className="help-block with-errors" />  
                </div>
              </div>
              {/* Phone */}	
              <div className="col-md-12 col-lg-6">
                <div className="form-group">
                  <input id="form_phone" className="form-control phone" type="tel" name="phone" placeholder="Your Phone Number" required="required" data-error="Please enter only digits." /> 
                  <div className="help-block with-errors" />
                </div>
              </div>
              {/* Select Input */}
              <div className="col-md-12 col-lg-6">
                <div className="form-group">
                  <select id="inlineFormCustomSelect1" name="patient" className="custom-select patient">
                    <option>Have You Visited Us Before?*</option>
                    <option>New Patient</option>
                    <option>Returning Patient</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              {/* Subject */}	
              <div className="col-md-12">
                <div className="form-group">
                  <input id="form_subject" className="form-control subject" type="text" name="subject" placeholder="Subject*" required="required" data-error="Subject is required" /> 
                  <div className="help-block with-errors" />
                </div>
              </div>
              {/* Message */}			
              <div className="col-md-12 input-message">
                <div className="form-group">
                  <textarea id="form-message" className="form-control message" name="message" rows={6} placeholder="Your Message ..." required="required" data-error="Enter no more than (10) characters." defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
              </div> 
              {/* Contact Form Message */}
              <div className="messages" />
              {/* Button */}
              <div className="col-md-12 mt-15 form-btn">	
                <button type="submit" className="btn btn-md btn-blue blue-hover submit">Send Your Message</button>	
              </div>
            </form>	
          </div>	
        </div> 	{/* END CONTACT FORM */}	
      </div>	{/* End row */}			  
    </div>	   {/* End container */}		
  </section>	{/* END CONTACTS-1 */}
  {/* BANNER-5
			============================================= */}
  <section id="banner-5" className="pt-100 banner-section division">
    <div className="container">
      {/* SECTION TITLE */}	
      <div className="row">	
        <div className="col-lg-10 offset-lg-1 section-title">		
          {/* Title 	*/}	
          <h3 className="h3-md steelblue-color">Certified and Experienced Doctors</h3>	
          {/* Text */}
          <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
            blandit posuere ligula varius congue cursus porta feugiat
          </p>
        </div> 
      </div>
      {/* BANNER IMAGE */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="banner-5-img wow fadeInUp" data-wow-delay="0.4s">
            <img className="img-fluid" src="images/image-07.png" alt="banner-image" />
          </div>
        </div>
      </div>
    </div>	   {/* End container */}	
  </section>	{/* END BANNER-5 */}
  {/* FOOTER-1
			============================================= */}
  <footer id="footer-1" className="bg-image wide-40 footer division">
    <div className="container">
      {/* FOOTER CONTENT */}
      <div className="row">	
        {/* FOOTER INFO */}
        <div className="col-md-6 col-lg-3">
          <div className="footer-info mb-40">
            {/* Footer Logo */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
            <img src="images/footer-logo-white.png" width={180} height={40} alt="footer-logo" />
            {/* Text */}	
            <p className="p-sm mt-20">Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta
              justo at velna auctor congue
            </p>  
            {/* Social Icons */}
            <div className="footer-socials-links mt-20">
              <ul className="foo-socials text-center clearfix">
                <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>	
                <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></a></li>
                <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></a></li>			
                {/*
										<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
										<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>											
										<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
										<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>									
										<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>											
										<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
										<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
										<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
									    */}	
              </ul>									
            </div>	
          </div>		
        </div>
        {/* FOOTER CONTACTS */}
        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">
            {/* Title */}
            <h5 className="h5-xs">Our Location</h5>
            {/* Address */}
            <p>121 King Street, Melbourne,</p> 
            <p>Victoria 3000 Australia</p>
            {/* Email */}
            <p className="foo-email mt-20">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>
            {/* Phone */}
            <p>P: +12 9 8765 4321</p>
          </div>
        </div>
        {/* FOOTER WORKING HOURS */}
        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">
            {/* Title */}
            <h5 className="h5-xs">Working Time</h5>
            {/* Working Hours */}
            <p className="p-sm">Mon - Wed - <span>9:00 AM - 7:00 PM</span></p>
            <p className="p-sm">Thursday - <span>9:00 AM - 6:30 PM</span></p>
            <p className="p-sm">Friday - <span>9:00 AM - 6:00 PM</span></p>
            <p className="p-sm">Sat - Sun - <span>Closed</span></p>									
          </div>
        </div>
        {/* FOOTER PHONE NUMBER */}
        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">
            {/* Title */}
            <h5 className="h5-xs">Emergency Cases</h5>
            {/* Footer List */}
            <h5 className="h5-xl blue-color">1-800-123-4560</h5>
            {/* Text */}	
            <p className="p-sm mt-15">Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta
              justo velna aucto magna
            </p> 																												
          </div>
        </div>	
      </div>	  {/* END FOOTER CONTENT */}
      {/* FOOTER COPYRIGHT */}
      <div className="bottom-footer">
        <div className="row">
          <div className="col-md-12">
            <p className="footer-copyright">© 2019 <span>MedService</span>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>	   {/* End container */}										
  </footer>	{/* END FOOTER-1 */}
</div>

    );
};

export default demo5;