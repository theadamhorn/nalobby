import { createSignal } from "solid-js";
import "./pagetitlebanner.css";

export default function PageTitleBanner(props) {

  return (
    <div class="page-banner">
      <img src={props.bannerImage} class="d-block w-100 page-banner-image" alt="..."/>
      <div class="page-banner-caption">
        <div class="page-banner-card py-3">
          <div class="card-body py-3 px-5">
            <h1 class="page-banner-title">{props.title}</h1>
            <h5 class="page-banner-subtitle mt-4">{props.subtitle}</h5>
          </div>
        </div>
      </div>

      <div class="separator-row"></div>
    </div>
  );
}