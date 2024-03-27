// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
"use client";
import Img from "../../public/image/Img-1.png";
import Image from "next/image";
// function Tabbing() {
//   return (
//     <>
//       <Tabs
//         defaultActiveKey="profile"
//         id="justify-tab-example"
//         className="mb-3"
//         justify
//       >
//         <Tab eventKey="home" title="Mumbai">
//           <div
//             id="carouselExampleControls"
//             class="carousel slide"
//             data-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <div class="cards-wrapper">
//                   <div class="card">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               class="carousel-control-prev"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a
//               class="carousel-control-next"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//         </Tab>
//         <Tab eventKey="profile" title="Pune">
//           <div
//             id="carouselExampleControls"
//             class="carousel slide"
//             data-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <div class="cards-wrapper">
//                   <div class="card">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               class="carousel-control-prev"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a
//               class="carousel-control-next"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//         </Tab>
//         <Tab eventKey="longer-tab" title="Delhi">
//           <div
//             id="carouselExampleControls"
//             class="carousel slide"
//             data-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <div class="cards-wrapper">
//                   <div class="card">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                   <div class="card d-none d-md-block">
//                     <Image src={Img} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">
//                         Some quick example text to build on the card title and
//                         make up the bulk of the cards content.
//                       </p>
//                       <a href="#" class="btn btn-primary">
//                         Go somewhere
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               class="carousel-control-prev"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a
//               class="carousel-control-next"
//               href="#carouselExampleControls"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//         </Tab>
//         <Tab eventKey="contact" title="Banglore">
//           Tab content for Contact
//         </Tab>
//       </Tabs>
//     </>
//   );
// }

// export default Tabbing;

import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <div className="cards-wrapper">
            <div className="card">
              <Image src={Img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card d-none d-md-block">
              <Image src={Img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card d-none d-md-block">
              <Image src={Img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card d-none d-md-block">
              <Image src={Img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Add three more carousel-item divs here with the same structure as above */}
        {/* Replace the activeIndex === 0 condition with the appropriate index */}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
