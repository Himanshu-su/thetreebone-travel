
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "../node_modules/bootstrap/dist/umd/popper.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {AiOutlineSearch} from 'react-icons/ai'
import { Progress } from '@chakra-ui/react'
import {GrLocation} from 'react-icons/gr'
import {PiDeviceMobileDuotone} from 'react-icons/pi'
import {BsPersonCheck} from 'react-icons/bs'
// import {GrLocation} from 'react-icons/gr'
import {CiMobile3} from 'react-icons/ci'
import {AiOutlineMail} from 'react-icons/ai'
//swiper
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation,FreeMode } from 'swiper/modules';

//client review
// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react'


function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  
  return (
    <div className="App">

{/* //whatsapp */}
<div className="whatsapp">
  <a href="https://wa.me/8858311752?text=Hii..">
    <img src="data:image/jpeg;base64,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" alt="" />
  </a>
</div>

      {/* //nav */}      <div id="navbar">
<div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://catalog.wlimg.com/4/1162057/other-images/12577-comp-image.png" alt="logo" id="header-img" />
          </div>
          <div className="col-md-8">
            <ul id="menu"  className="float-md-right">
              <li><a className="menu-ancher" href="">HOME</a></li>
              <li><a className="menu-ancher" href="">ABOUT US</a></li>
              <li><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" id="nav-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    OUR SERVICES
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">TOUR OPETATORS</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">CARS & COACH RENTAL</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">FLIGHT BOOKING</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">RAILWAY TICKET BOOKING</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">EVENT MANAGEMENT</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">HOTEL BOOKING</a></li>
  </ul>
</div></li>
              {/* tour */}
              <li><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" id="nav-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   TOUR PACKAGES
  </button>
  <ul class="dropdown-menu" >
  <li>
      <a class="dropdown-item" href="#">
        TOURS BY DESTINATION &raquo;
      </a>
      <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">MANALI TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">SHIMLA TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">KEDARNATH TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#"> TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">THEKKADY TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">JAISALMER TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">YAMUNOTRI TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">KOCHI TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">KULLU TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">GANGOTRI TOURS</a>
        </li>
        
      </ul>
      
      </li>
     
      <li>
      <a class="dropdown-item" href="#">
        TOURS BY THEME &raquo;
      </a>
      <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">SIGHTSEEING TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">MOUNTAINEERING TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">ADVENTURE TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">MONUMENTS & HISTORICAL <br /> PLACES TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">MUSEUMS TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">JEEP SAFARI TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">BOATING TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">CAMPING TOURS</a>
        </li>
        <hr class="dropdown-divider"/>
        <li>
          <a class="dropdown-item" href="#">FORTS AND PALACE
          TOURS</a>
        </li>
        </ul>
        </li>
     
  </ul>
</div></li>

              <li><a className="menu-ancher" href="">PAY ONLINE</a></li>
              <li><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" id="nav-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  MORE
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">OUR HOTELS </a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">TESTIMONIALS</a></li>
    <hr class="dropdown-divider"/>
    <li><a class="dropdown-item" href="#">CONTACT US</a></li>
  </ul>
  <button type="button" class="btn btn-success menu-ancher-search"> <li ><AiOutlineSearch/></li></button>
</div>

</li>     
            </ul>
          </div>
        </div>
      </div>
      </div> 
      </div>

      {/* carosel */}
    

        
      <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride='carousel'>
        
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1624952630578-249e8e8cca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1616069198052-4ea364dd1df5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt=""/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



{/* plan */}
<div className="container">
  <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">Plan <span className="carosel-span">Your Trip</span></h2>
    </div>
    </div>
    </div>
    {/* <div className="row" >
      <div className="col-md-1 m-auto">
       <Progress value={100} size='xs' colorScheme='gray' className="carosel-line"/>
  </div>
    </div> */}

{/* card 1 */}
{/* div1 */}
.<div className="container">
  <div className="row">
<div className="col-md-3">
<div class="card" >
  <img src="https://images.unsplash.com/photo-1627241129356-137242cf14f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3 ">Read More</button>
</div>
  </div>
  </div>
  {/* div2 */}
<div className="col-md-3">
<div class="card" >
  <img src="https://plus.unsplash.com/premium_photo-1661962266500-5660d27eb5f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
  </div>
  {/* div 3 */}

<div className="col-md-3 ">
<div class="card" >
  <img src="https://images.unsplash.com/photo-1564329494258-3f72215ba175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFsJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
  </div>
  {/* div 4 */}

<div className="col-md-3">
<div class="card" >
  <img src="https://images.unsplash.com/photo-1607836046730-3317bd58a31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGltYWxheWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
  </div>
  </div>
</div>

{/* view packages */}
<div className="container">
  <div className="row">
    <div className="col-md-12 offset-5 mt-5">
    <button type="button" class="btn btn-card-2 mt-3">View All Packages</button>
      </div>
    </div>
    </div>

{/* services */}


<div className="service-card">
 {/* service heading */}

  <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">SEVICES <span className="carosel-span">WE OFFER</span></h2>
    </div>
    </div>
    {/* //swiper */}
    

          <div className="row" >
          <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
            <div className="col-md-3" >
              {/* 1st swiper */}
            <SwiperSlide>
            <div class="card">
  <img src="https://catalog.wlimg.com/service-images/ttw/tour-operators2.jpg" class="card-img-top swiperdiv " alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
                {/* 2st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card" >
  <img src="https://catalog.wlimg.com/service-images/ttw/car-coach-rental.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
                {/* 3st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card" >
  <img src="https://catalog.wlimg.com/service-images/ttw/flight-booking.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
                {/* 4st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card" >
  <img src="https://catalog.wlimg.com/service-images/ttw/railway-ticket-booking2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
             {/* 5st swiper */}
             <div className="col-md-3">
            <SwiperSlide>
            <div class="card" >
  <img src="https://catalog.wlimg.com/service-images/ttw/event-management2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
               {/* 6st swiper */} 
               <div className="col-md-3">
            <SwiperSlide>
            <div class="card" >
  <img src="https://catalog.wlimg.com/service-images/ttw/hotel-booking2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text">Wonderful Kerala Family Holiday Package for  6 Nights	
Price on Request
 6 Nights / 7 Days</h6>
 <hr class="dropdown-divider"/>
 <div lassName="div-grlocation">
 <GrLocation className="grlocation"/>
 <p  class="card-text card-tour-location">&nbsp;&nbsp;&nbsp;&nbsp; Kochi, Munnar, Thekkady, Alleppey, Kovalam, St. Francis Church, Kathakali, Dutch Palace</p>
 </div>
 <button type="button" class="btn card1-btn mt-3">Read More</button>
  </div>
  </div>
            </SwiperSlide>
            </div>
{/*           
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide> */}
         </Swiper>
          </div>

 </div>

{/* package by destinations */}
<div className="package-destination-card">
 {/* package heading */}
<div className="container">
  <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">PACKAGES <span className="carosel-span">BY DESTINATION</span></h2>
    </div>
    </div>
    </div>
  
    {/* <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">SEVICES <span className="carosel-span">WE OFFER</span></h2>
    </div>
    </div> */}
    {/* //swiper */}
    

          <div className="row" >
          <div className="col-md-12 ">
          <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
            <div className="col-md-3 " >
              {/* 1st swiper */}
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">MANALI TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
                {/* 2st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">SHIMLA TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
                {/* 3st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">MUNNAR TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
                {/* 4st swiper */}
            <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1607836046730-3317bd58a31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGltYWxheWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">HIMALAYA TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
             {/* 5st swiper */}
             <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UklWRVJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">GANGOTRI TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
               {/* 6st swiper */} 
               <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFRFTVBMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">BADRINATH TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
              {/* 7st swiper */} 
              <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1593417033942-bcdf26b74700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxsZXBwZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">ALLEPPEY TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
              {/* 8st swiper */} 
              <div className="col-md-3">
            <SwiperSlide>
            <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1621612207126-4e906b28c410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">THEKKADY TOURS</h3>
  
  </div>
            </SwiperSlide>
            </div>
         </Swiper>
          </div>
          </div>
</div>
  
   {/* package by theme  */}
   <div className="theme-package">
{/* theme package heading */}
{/* <div className="container"> */}
  <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">PACKAGE  <span className="carosel-span">BY THEME</span></h2>
    </div>
   </div>
   <div className="row">
    {/* card1 */}
    <div className="col-md-3">
    <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">SIGHTSEEING TOURS</h3>
    </div>
   </div>
    {/* card2 */}
    <div className="col-md-3">
    <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TU9VTlRBSU4lMjBDTElNQnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">MOUNTAINEERING TOURS</h3>
    </div>
   </div>
    {/* card3 */}
    <div className="col-md-3">
    <div class="card banner" >
  <img src="https://plus.unsplash.com/premium_photo-1661888350177-48a9efbf6985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpbWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">ADVENTURE TOURS</h3>
    </div>
   </div>
    {/* card4 */}
    <div className="col-md-3">
    <div class="card banner" >
  <img src="https://images.unsplash.com/photo-1547716467-fdb9102f1ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TU9OVU1ORVR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."/>
  <h3 className="heading">MONUMENTS TOURS</h3>
    </div>
   </div>
   </div>
   </div>
   {/* client review */}
   <div className="theme-package">
{/* theme package heading */}
{/* <div className="container"> */}
  <div className="row">
    <div className="col-md-12 ">
      <h2 className="text-center m-5">CLIENT  <span className="carosel-span">REVIEW</span></h2>
    </div>
   </div>
   <div className="row">
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
         <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
   {/* 2card */}
   <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
   {/* card 3 */}
   <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
   {/* card 4 */}
   <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
   {/* card 5 */}
   <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
   {/* card 6 */}
   <div className="col-md-3 ">
         <SwiperSlide>
    <div class="card text-center client-card"  >
   
    <p>It is a registered travel agent that provides interesting packages for different destinations and purposes. I have booke..</p>
    <button><a href="">Read More</a></button>
   
 
    </div>
    </SwiperSlide>
   </div>
         </Swiper>
     </div>
   </div>
   {/* about treebone */}
   <div className="container mt-5 about-treebone">
    <div className="row">
      <div className="col-md-6 mt-3 p-5">
        <h2>
        About The Treebone
        </h2>
        <p>The Treebone was founded with the sole intention to serve society with the best travel solutions and services. With extraordinary travel services, we have achieved high standards of advancements in the entire travel and tourism sector of India. We can be perfectly interpreted as one of the leading travel agencies in the entire Himachal Pradesh.</p>
        <h5>Our Services</h5>
        <p>The Treebone has made its existence one of the most reliable and tourist-friendly travel agencies in the entire Himalayan range by delivering class-apart travel services such as tour operating services,</p>
        <button type="button" class="btn card1-btn mt-3">Read More</button>
      </div>
      <div className="col-md-6  p-5">
        <img src="https://catalog.wlimg.com/about-image/about-14.png" alt="" />
      </div>
    </div>
   </div>
{/* quick enquiry */}
<div className="container mt-5 quick-enquiry ">
    <div className="row">
      <div className="col-md-4 mt-2">
        <img src="https://catalog.wlimg.com/templates-images/12577/12582/contact01.jpg" alt="" />
      </div>
      <div className="col-md-8">
      <h3 className=" m-2">QUICK <span className="carosel-span">ENQUIRY</span></h3>
      {/* <FormControl isRequired>
  <Input placeholder=" Your Name" className="w-75 "/>
</FormControl>
<br />
<FormControl isRequired>
  <Input placeholder=" Your Email" className="w-75"/>
</FormControl>
<br />
<FormControl isRequired>
  <Input placeholder=" Phone No" className="w-75"/>
</FormControl>
<br />
<Textarea placeholder='Leave a Massage for us' className="w-75"/>
<br />
<button type="button" class="btn card1-btn mt-3">Send Massage</button> */}
<form action="https://formspree.io/f/xwkdozao" method="POST">
  <input type="text" placeholder="Username" name="username" required autoComplete="off" className="quick-form-input" /><br />
  <input type="email" placeholder="Email" name="Email" required autoComplete="off" className="quick-form-input"/>
  <br />
  <textarea placeholder='Leave a Massage for us' className="quick-form-input-textarea"></textarea>
  <br />
<input type="submit" value='Send Massage' className="btn card1-btn"/>
</form>
      </div>
      </div>
      </div>

{/* upper footer  */}
<div className="upper-footer-div  ">
  <div className="row ">
    <div className="col-md-12 offset-4">
    <img src="https://catalog.wlimg.com/4/1162057/other-images/12577-comp-image.png" alt="" className="mt-n4 mb-4 "/>
    </div>
 
  </div>
  <div className="row">
    <div className="col-md-4">

      <h5 >QUICK CONTACT</h5>
{/*      
      className="footer-icon-p"><PiDeviceMobileDuotone/> */}
 <p>The Treebone hospitality services</p> 
 {/* <BsPersonCheck/>  */}
 <p>Vijay Singh</p> 
 {/* <GrLocation/> */}
<p> At, Dreamland food plaza, NH-48,dungri, rola,Valsad (gujarat), valsad, , - 396375, India</p> 
{/* <CiMobile3/> */}
 <p>08048406868 </p>
 {/* <AiOutlineMail/> */}
 <a href=""><h6>himanshudiv1711@gmail.com</h6></a>

    </div>
   
    <div className="col-md-4 flex-column">
    <h5 >GENERAL LINKS</h5>
    <div className="link-div flex-column">
     <button  className="link-button"><a href="">Home</a></button><br />
     <button  className="link-button"><a href="">Tour Pakckages</a></button><br />
     <button  className="link-button"><a href="">About Us</a></button><br />
     <button  className="link-button"><a href="">Career with us</a></button><br />
     <button  className="link-button"><a href="">Contact us</a></button>
    </div></div>
    <div className="col-md-4">
      <h5>NEWS LETTER</h5>
      <div>
  
      <input type="text" placeholder="Username" name="username" required autoComplete="off" className="quick-form-input mt-3" />
      <input type="submit" value='Submit' className="btn card1-btn"/>
      </div>
    </div>
  </div>
</div>
{/* lower footer */}
<div className="lower-footer  ">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
      <button  className="link-button-footer mt-4"><a href=""><p>
      All Rights Reserved. The Treebone hospitality <br /> services
Developed & Managed By Weblink.In Pvt. Ltd.
        </p></a></button><br />

      </div>
      <div className="col-md-6">
        <img src="https://cheapsslsecurity.com/p/wp-content/uploads/2019/10/siteseal-positive-ssl.png" alt="" width='200px' height='50px' className="lower-footer-img mt-4"/>
      </div>
    </div>

  </div>
</div>
 
   

  </div>


  );
} 

export default App;

//  https://www.upgrad.com/_next/image/?url=https%3A%2…ages%2FMasterclass__1696835840445.png&w=2048&q=75
// https://www.upgrad.com/_next/image/?url=https%3A%2…ages%2FMASTERCLASS__1696917481355.png&w=3840&q=75
// https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FMASTERCLASS__1696917915380.png&w=2048&q=75
// https://www.upgrad.com/_next/image/?url=https%3A%2…ages%2FMasterclass__1696835755547.png&w=3840&q=75
// https://www.upgrad.com/_next/image/?url=https%3A%2…ages%2FMasterclass__1696835755547.png&w=3840&q=75
// https://www.upgrad.com/_next/image/?url=https%3A%2…oft-skills-720x400__1668665768724.png&w=3840&q=75 