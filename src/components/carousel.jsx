import { createSignal } from "solid-js";
import norwoodLogo from "../../public/assets/NA-background-small.png";

import capitolDome from "/assets/interior-of-california-capitol.jpg";
import norwoodStaff from "/assets/norwood-staff.jpeg";
import capitolBuilding from "/assets/capitol-building.jpg";
import naLogoPng from "/assets/NA-background.png";

export default function Carousel() {
  return (
        <div class="home-banner">
          <img src={capitolDome} class="d-block w-100 home-banner-image" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-card py-5">
              <div class="card-body">
                <h1 class="carousel-item-title pe-4">TRUSTED ADVOCACY.<br/>SUCCESSFUL OUTCOMES.</h1>
              </div>
            </div>
          </div>
        </div>




    // <div id="carouselExampleCaptions" class="carousel slide carousel-fade index-carousel" data-bs-ride="ride">
    //   <div class="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div class="carousel-inner">
    //     {/* First carousel image */}
    //     <div class="carousel-item active">
    //       <img src={capitolDome} class="d-block w-100" alt="..."/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <div class="carousel-card py-5">
    //           <div class="card-body">
    //             <h1 class="carousel-item-title pe-4">TRUSTED ADVOCACY.<br/>SUCCESSFUL OUTCOMES.</h1>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Second carousel image */}
    //     <div class="carousel-item">
    //       <img src={norwoodStaff} class="d-block w-100" alt="..."/>
    //       <div class="carousel-caption d-none d-md-block">
    //       </div>
    //     </div>
    //     {/* Third carousel image */}
    //     <div class="carousel-item">
    //       <img src={capitolBuilding} class="d-block w-100" alt="..."/>
    //       <div class="carousel-caption d-none d-md-block">
    //       </div>
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}