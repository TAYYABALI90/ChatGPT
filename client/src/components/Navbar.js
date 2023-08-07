// import React, { useState, useEffect } from 'react';

// import logo from '../assets/img/logo.png';

// import Speaker1 from '../assets/img/speakers/1.jpg';
// import Speaker2 from '../assets/img/speakers/2.jpg';
// import Speaker3 from '../assets/img/speakers/3.jpg';
// import Speaker4 from '../assets/img/speakers/4.jpg';
// import Speaker5 from '../assets/img/speakers/5.jpg';
// import Speaker6 from '../assets/img/speakers/6.jpg';

// import VenueGallery1 from '../assets/img/venue-gallery/1.jpg';
// import VenueGallery2 from '../assets/img/venue-gallery/2.jpg';
// import VenueGallery3 from '../assets/img/venue-gallery/3.jpg';
// import VenueGallery4 from '../assets/img/venue-gallery/4.jpg';
// import VenueGallery5 from '../assets/img/venue-gallery/5.jpg';
// import VenueGallery6 from '../assets/img/venue-gallery/6.jpg';
// import VenueGallery7 from '../assets/img/venue-gallery/7.jpg';
// import VenueGallery8 from '../assets/img/venue-gallery/8.jpg';

// import Hotel1 from '../assets/img/hotels/1.jpg';
// import Hotel2 from '../assets/img/hotels/2.jpg';
// import Hotel3 from '../assets/img/hotels/3.jpg';

// import Supporter1 from '../assets/img/supporters/1.png';
// import Supporter2 from '../assets/img/supporters/2.png';
// import Supporter3 from '../assets/img/supporters/3.png';
// import Supporter4 from '../assets/img/supporters/4.png';
// import Supporter5 from '../assets/img/supporters/5.png';
// import Supporter6 from '../assets/img/supporters/6.png';
// import Supporter7 from '../assets/img/supporters/7.png';
// import Supporter8 from '../assets/img/supporters/8.png';

// const Navbar = () => {

//     const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

//     const [IsBackToTop, setIsBackToTop] = useState(false);

//     const [isActiveLink, setIsActiveLink] = useState('home');

//     const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//     const handleScroll = () => {
//         setIsBackToTop(window.scrollY > 100);
//         setIsHeaderScrolled(window.scrollY > 100);
//     };

//     const navbarlinksActive = () => {

//         let position = window.scrollY + 200;

//         const navbarlinks = document.querySelectorAll('#navbar .scrollto');

//         navbarlinks.forEach(navbarlink => {

//             if (!navbarlink.hash) return;

//             const section = document.querySelector(navbarlink.hash);

//             if (!section) return;

//             if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
//                 navbarlink.classList.add('active');
//             } else {
//                 navbarlink.classList.remove('active');
//             };

//         });

//     };

//     useEffect(() => {

//         handleScroll();

//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('scroll', navbarlinksActive);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('scroll', navbarlinksActive);
//         };

//     }, [isHeaderScrolled]);

//     const backToTop = (event) => {
//         event.preventDefault();
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const scrollTo = (el) => {

//         let header = document.querySelector('#header');

//         let offset = header ? header.offsetHeight : 0;

//         if (!isHeaderScrolled) {
//             offset -= 20;
//         };

//         let element = document.querySelector(el);

//         if (element) {
//             let elementPos = element.offsetTop;
//             window.scrollTo({
//                 top: elementPos - offset,
//                 behavior: 'smooth',
//             });
//         };

//     };

//     const handleLinkClick = (link) => {
//         setIsActiveLink(link);
//         scrollTo(link);
//         setIsMobileNavOpen(false);
//     };

//     const handleMobileNavToggle = () => {
//         setIsMobileNavOpen((prevState) => !prevState);
//     };

//     return (

//         <>

//             <header id="header" className={isHeaderScrolled ? "d-flex align-items-center header-scrolled" : "d-flex align-items-center"}>

//                 <div className="container-fluid container-xxl d-flex align-items-center">

//                     <div id="logo" className="me-auto">

//                         {/* <h1><a href="index.html">The<span>Event</span></a></h1> */}

//                         <a href="index.html" className="scrollto"><img src={logo} alt='' /></a>

//                     </div>

//                     <nav id="navbar" className={`${isMobileNavOpen ? 'navbar order-last order-lg-0 navbar-mobile' : 'navbar order-last order-lg-0'}`}>

//                         <ul>

//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'home' ? 'active' : ''}`}
//                                     href="#hero"
//                                     onClick={() => handleLinkClick('home')}>Home</a>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'about' ? 'active' : ''}`}
//                                     href="#about"
//                                     onClick={() => handleLinkClick('about')}>About</a>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'speakers' ? 'active' : ''}`}
//                                     href="#speakers"
//                                     onClick={() => handleLinkClick('speakers')}>Speakers</a>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'schedule' ? 'active' : ''}`}
//                                     href="#schedule"
//                                     onClick={() => handleLinkClick('schedule')}>Schedule</a>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'venue' ? 'active' : ''}`}
//                                     href="#venue"
//                                     onClick={() => handleLinkClick('venue')}>Venue</a>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'supporters' ? 'active' : ''}`}
//                                     href="#supporters"
//                                     onClick={() => handleLinkClick('supporters')}>Sponsors</a>
//                             </li>
//                             <li
//                                 className="dropdown"
//                             >
//                                 <a href="/">
//                                     <span>Features</span><i className="bi bi-chevron-down"></i>
//                                 </a>
//                                 <ul>
//                                     <li><a href="/">Chat Bot</a></li>
//                                     <li><a href="/">Image Generator</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a
//                                     className={`nav-link scrollto ${isActiveLink === 'contact' ? 'active' : ''}`}
//                                     href="#contact"
//                                     onClick={() => handleLinkClick('contact')}>Contact</a>
//                             </li>

//                         </ul>

//                         <i className={`mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`} onClick={handleMobileNavToggle} />

//                     </nav>

//                     <a className="buy-tickets scrollto" href="#buy-tickets">Sign up</a>

//                 </div>

//             </header>

//             <section id="hero">
//                 <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
//                     <h1 className="mb-4 pb-0">WELCOME TO<br /><span>AI GENIX</span> HUB</h1>
//                     <p className="mb-4 pb-0">"Step into the future and unleash your imagination like never before."</p>
//                     <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4" />
//                     <a href="#about" className="about-btn scrollto">GET STARTED</a>
//                 </div>
//             </section>

//             <main id="main">

//                 <section id="about">
//                     <div className="container position-relative" data-aos="fade-up">
//                         <div className="row">
//                             <div className="col-lg-6">
//                                 <h2>About The Event</h2>
//                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid at ex perspiciatis blanditiis velit numquam similique sequi dolorem accusamus voluptatem.</p>
//                             </div>
//                             <div className="col-lg-3">
//                                 <h3>Where</h3>
//                                 <p>Downtown Conference Center, New York</p>
//                             </div>
//                             <div className="col-lg-3">
//                                 <h3>When</h3>
//                                 <p>Monday to Wednesday<br />10-12 December</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section id="speakers">

//                     <div className="container" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>Event Speakers</h2>
//                             <p>Here are some of our speakers</p>
//                         </div>

//                         <div className="row">

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
//                                     <img src={Speaker1} alt="Speaker 1" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Brenden Legros</a></h3>
//                                         <p>Quas alias incidunt</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
//                                     <img src={Speaker2} alt="Speaker 2" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
//                                         <p>Consequuntur odio aut</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
//                                     <img src={Speaker3} alt="Speaker 3" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
//                                         <p>Fugiat laborum et</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
//                                     <img src={Speaker4} alt="Speaker 4" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
//                                         <p>Debitis iure vero</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
//                                     <img src={Speaker5} alt="Speaker 5" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
//                                         <p>Qui molestiae natus</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                                 <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
//                                     <img src={Speaker6} alt="Speaker 6" className="img-fluid" />
//                                     <div className="details">
//                                         <h3><a href="speaker-details.html">Willow Trantow</a></h3>
//                                         <p>Non autem dicta</p>
//                                         <div className="social">
//                                             <a href><i className="bi bi-twitter" /></a>
//                                             <a href><i className="bi bi-facebook" /></a>
//                                             <a href><i className="bi bi-instagram" /></a>
//                                             <a href><i className="bi bi-linkedin" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </section>

//                 <section id="schedule" className="section-with-bg">

//                     <div className="container" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>Event Schedule</h2>
//                             <p>Here is our event schedule</p>
//                         </div>

//                         <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay={100}>
//                             <li className="nav-item">
//                                 <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Day 1</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Day 2</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Day 3</a>
//                             </li>
//                         </ul>

//                         <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
//                             necessitatibus voluptatem quis labore perspiciatis quia.</h3>

//                         <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay={200}>

//                             <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>09:30 AM</time></div>
//                                     <div className="col-md-10">
//                                         <h4>Registration</h4>
//                                         <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>10:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker1} alt="Brenden Legros" />
//                                         </div>
//                                         <h4>Keynote <span>Brenden Legros</span></h4>
//                                         <p>Facere provident incidunt quos voluptas.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>11:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker2} alt="Hubert Hirthe" />
//                                         </div>
//                                         <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
//                                         <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>12:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker3} alt="Cole Emmerich" />
//                                         </div>
//                                         <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
//                                         <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>02:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker4} alt="Jack Christiansen" />
//                                         </div>
//                                         <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
//                                         <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>03:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker5} alt="Alejandrin Littel" />
//                                         </div>
//                                         <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
//                                         <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>04:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker6} alt="Willow Trantow" />
//                                         </div>
//                                         <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
//                                         <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>10:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker1} alt="Brenden Legros" />
//                                         </div>
//                                         <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
//                                         <p>Facere provident incidunt quos voluptas.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>11:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker2} alt="Hubert Hirthe" />
//                                         </div>
//                                         <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
//                                         <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>12:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker3} alt="Cole Emmerich" />
//                                         </div>
//                                         <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
//                                         <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>02:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker4} alt="Jack Christiansen" />
//                                         </div>
//                                         <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
//                                         <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>03:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker5} alt="Alejandrin Littel" />
//                                         </div>
//                                         <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
//                                         <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>04:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker6} alt="Willow Trantow" />
//                                         </div>
//                                         <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
//                                         <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>10:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker2} alt="Hubert Hirthe" />
//                                         </div>
//                                         <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
//                                         <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>11:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker3} alt="Cole Emmerich" />
//                                         </div>
//                                         <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
//                                         <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>12:00 AM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker1} alt="Brenden Legros" />
//                                         </div>
//                                         <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
//                                         <p>Facere provident incidunt quos voluptas.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>02:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker4} alt="Jack Christiansen" />
//                                         </div>
//                                         <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
//                                         <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>03:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker5} alt="Alejandrin Littel" />
//                                         </div>
//                                         <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
//                                         <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
//                                     </div>
//                                 </div>

//                                 <div className="row schedule-item">
//                                     <div className="col-md-2"><time>04:00 PM</time></div>
//                                     <div className="col-md-10">
//                                         <div className="speaker">
//                                             <img src={Speaker6} alt="Willow Trantow" />
//                                         </div>
//                                         <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
//                                         <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </section>

//                 <section id="venue">

//                     <div className="container-fluid" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>Event Venue</h2>
//                             <p>Event venue location info and gallery</p>
//                         </div>

//                         <div className="row g-0">
//                             <div className="col-lg-6 venue-map">
//                                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0 }} allowFullScreen />
//                             </div>
//                             <div className="col-lg-6 venue-info">
//                                 <div className="row justify-content-center">
//                                     <div className="col-11 col-lg-8 position-relative">
//                                         <h3>Downtown Conference Center, New York</h3>
//                                         <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay={100}>

//                         <div className="row g-0">

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery1} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery1} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery2} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery2} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery3} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery3} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery4} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery4} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery5} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery5} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery6} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery6} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery7} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery7} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4">
//                                 <div className="venue-gallery">
//                                     <a href={VenueGallery8} className="glightbox" data-gall="venue-gallery">
//                                         <img src={VenueGallery8} alt="" className="img-fluid" />
//                                     </a>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </section>

//                 <section id="supporters" className="section-with-bg">

//                     <div className="container" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>Sponsors</h2>
//                         </div>

//                         <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay={100}>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter1} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter2} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter3} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter4} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter5} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter6} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter7} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                             <div className="col-lg-3 col-md-4 col-xs-6">
//                                 <div className="supporter-logo">
//                                     <img src={Supporter8} className="img-fluid" alt="" />
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </section>

//                 <section id="faq">

//                     <div className="container" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>F.A.Q </h2>
//                         </div>

//                         <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={100}>

//                             <div className="col-lg-9">

//                                 <ul className="faq-list">

//                                     <li>
//                                         <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq1" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
//                                             </p>
//                                         </div>
//                                     </li>

//                                     <li>
//                                         <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq2" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
//                                             </p>
//                                         </div>
//                                     </li>

//                                     <li>
//                                         <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq3" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
//                                             </p>
//                                         </div>
//                                     </li>

//                                     <li>
//                                         <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq4" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
//                                             </p>
//                                         </div>
//                                     </li>

//                                     <li>
//                                         <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq5" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
//                                             </p>
//                                         </div>
//                                     </li>

//                                     <li>
//                                         <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
//                                         <div id="faq6" className="collapse" data-bs-parent=".faq-list">
//                                             <p>
//                                                 Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
//                                             </p>
//                                         </div>
//                                     </li>

//                                 </ul>

//                             </div>

//                         </div>

//                     </div>

//                 </section>

//                 <section id="subscribe">

//                     <div className="container" data-aos="zoom-in">

//                         <div className="section-header">
//                             <h2>Newsletter</h2>
//                             <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
//                         </div>

//                         <form method="" action="/">
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-6 col-md-10 d-flex">
//                                     <input type="text" className="form-control" placeholder="Enter your Email" />
//                                     <button type="submit" className="ms-2">Subscribe</button>
//                                 </div>
//                             </div>
//                         </form>

//                     </div>

//                 </section>

//                 <section id="contact" className="section-bg">

//                     <div className="container" data-aos="fade-up">

//                         <div className="section-header">
//                             <h2>Contact Us</h2>
//                             <p>Nihil officia ut sint molestiae tenetur.</p>
//                         </div>

//                         <div className="row contact-info">

//                             <div className="col-md-4">
//                                 <div className="contact-address">
//                                     <i className="bi bi-geo-alt" />
//                                     <h3>Address</h3>
//                                     <address>A108 Adam Street, NY 535022, USA</address>
//                                 </div>
//                             </div>

//                             <div className="col-md-4">
//                                 <div className="contact-phone">
//                                     <i className="bi bi-phone" />
//                                     <h3>Phone Number</h3>
//                                     <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
//                                 </div>
//                             </div>

//                             <div className="col-md-4">
//                                 <div className="contact-email">
//                                     <i className="bi bi-envelope" />
//                                     <h3>Email</h3>
//                                     <p><a href="mailto:info@example.com">info@example.com</a></p>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="form">

//                             <form action="" method="" role="form" className="php-email-form">

//                                 <div className="row">
//                                     <div className="form-group col-md-6">
//                                         <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
//                                     </div>

//                                     <div className="form-group col-md-6 mt-3 mt-md-0">
//                                         <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
//                                     </div>
//                                 </div>

//                                 <div className="form-group mt-3">
//                                     <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
//                                 </div>

//                                 <div className="form-group mt-3">
//                                     <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
//                                 </div>

//                                 <div className="my-3">
//                                     <div className="loading">Loading</div>
//                                     <div className="error-message" />
//                                     <div className="sent-message">Your message has been sent. Thank you!</div>
//                                 </div>

//                                 <div className="text-center"><button type="submit">Send Message</button></div>

//                             </form>

//                         </div>

//                     </div>

//                 </section>

//             </main>

//             <footer id="footer">

//                 <div className="footer-top">

//                     <div className="container">

//                         <div className="row">

//                             <div className="col-lg-3 col-md-6 footer-info">
//                                 <img src="assets/img/logo.png" alt="TheEvenet" />
//                                 <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
//                             </div>

//                             <div className="col-lg-3 col-md-6 footer-links">
//                                 <h4>Useful Links</h4>
//                                 <ul>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Home</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">About us</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Services</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Terms of service</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Privacy policy</a></li>
//                                 </ul>
//                             </div>

//                             <div className="col-lg-3 col-md-6 footer-links">
//                                 <h4>Useful Links</h4>
//                                 <ul>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Home</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">About us</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Services</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Terms of service</a></li>
//                                     <li><i className="bi bi-chevron-right" /> <a href="/">Privacy policy</a></li>
//                                 </ul>
//                             </div>

//                             <div className="col-lg-3 col-md-6 footer-contact">
//                                 <h4>Contact Us</h4>
//                                 <p>
//                                     A108 Adam Street <br />
//                                     New York, NY 535022<br />
//                                     United States <br />
//                                     <strong>Phone:</strong> +1 5589 55488 55<br />
//                                     <strong>Email:</strong> info@example.com<br />
//                                 </p>
//                                 <div className="social-links">
//                                     <a href="/" className="twitter"><i className="bi bi-twitter" /></a>
//                                     <a href="/" className="facebook"><i className="bi bi-facebook" /></a>
//                                     <a href="/" className="instagram"><i className="bi bi-instagram" /></a>
//                                     <a href="/" className="google-plus"><i className="bi bi-instagram" /></a>
//                                     <a href="/" className="linkedin"><i className="bi bi-linkedin" /></a>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </div>

//                 <div className="container">
//                     <div className="copyright">
//                         © Copyright <strong>TheEvent</strong>. All Rights Reserved
//                     </div>
//                     <div className="credits">
//                         Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                     </div>
//                 </div>

//             </footer>

//             <a
//                 href="/"
//                 className={IsBackToTop ?
//                     "back-to-top d-flex align-items-center justify-content-center active"
//                     : "back-to-top d-flex align-items-center justify-content-center"}
//                 onClick={backToTop}>

//                 <i className="bi bi-arrow-up-short" />

//             </a>

//         </>

//     )

// }

// export default Navbar;