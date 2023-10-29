import Image from "next/image";
import React from "react";

function ServisesItem({img,title,dis}) {
  return (
    <div class="col-lg-6 mb-5 ">
      <div class="row align-items-center ">
        <div class="col-sm-5 ">
          <Image
            class="img-fluid mb-3 mb-sm-0 position-relative " 
            src={`/images/${img}`}
            alt=""
            fill={true}
/>
        </div>
        <div class="col-sm-7">
          <h4>
            <i class="fa fa-truck service-icon"></i>{title}
          </h4>
          <p class="m-0">
          {dis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServisesItem;
